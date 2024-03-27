import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './css/Login.module.scss';

export default function Login() {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const [messageOfId, setMessageOfId] = useState('');
  const [messageOfPassword, setMessageOfPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/sign-in`,
      data: {
        ...loginInfo,
      },
    })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data.user[0]));
        setIsLogin((isLogin) => !isLogin);
        navigate('/diary');
      })
      .catch((error) => {
        console.log(error);
        const {
          response: { data, status },
        } = error;
        // 발생한 에러가 401(Unauthorized)면
        if (status === 401) {
          if (data.message === '가입되지 않은 사용자입니다.') {
            setMessageOfId(data.message);
            setMessageOfPassword('');
          }
          if (data.message === '비밀번호가 일치하지 않습니다.') {
            setMessageOfPassword(data.message);
            setMessageOfId('');
          }
        }
      });
  };
  const onChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  console.log(messageOfId);
  console.log(messageOfPassword);

  return (
    <main className={styles.main}>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={onChange}
          className={styles.idInput}
          autoComplete="off"
          style={
            messageOfId
              ? {
                  outline: '2px solid red',
                  border: 'none',
                }
              : {}
          }
        />
        <div
          style={messageOfId ? { opacity: 1 } : { opacity: 0 }}
          className={styles.idMessage}
        >
          {messageOfId}
        </div>

        <input
          name="password"
          type="password"
          placeholder="패스워드"
          onChange={onChange}
          className={styles.passwordInput}
          style={
            messageOfPassword
              ? {
                  outline: '2px solid red',
                  border: 'none',
                }
              : {}
          }
        />
        <div
          style={messageOfPassword ? { opacity: 1 } : { opacity: 0 }}
          className={styles.passwordMessage}
        >
          {messageOfPassword}
        </div>
        <button onClick={handleLogin} className={styles.loginBtn}>
          로그인
        </button>
      </form>
    </main>
  );
}
