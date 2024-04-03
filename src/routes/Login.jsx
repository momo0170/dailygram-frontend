import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './css/Login.module.scss';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function Login() {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const [messageOfId, setMessageOfId] = useState('');
  const [messageOfPassword, setMessageOfPassword] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navigate = useNavigate();

  // 로그인 버튼 클릭 시
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
        setIsLogin(!isLogin);
        localStorage.setItem('user', JSON.stringify(data.data.user[0]));
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

  return (
    <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
      <header className={`${styles.logo} ${darkMode ? styles.darkMode : ''}`}>
        Dailygram
      </header>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={onChange}
          autoComplete="off"
          className={`${styles.idInput} ${darkMode ? styles.darkMode : ''} ${
            messageOfId ? styles.focusId : ''
          }`}
        />
        <div
          style={messageOfId ? { opacity: 1 } : { opacity: 0 }}
          className={`${styles.idMessage} ${darkMode ? styles.darkMode : ''}`}
        >
          {messageOfId}
        </div>

        <input
          name="password"
          type="password"
          placeholder="패스워드"
          onChange={onChange}
          autoComplete="off"
          className={`${styles.passwordInput} ${
            darkMode ? styles.darkMode : ''
          } ${messageOfPassword ? styles.focusPassword : ''}`}
        />
        <div
          style={messageOfPassword ? { opacity: 1 } : { opacity: 0 }}
          className={`${styles.passwordMessage} ${
            darkMode ? styles.darkMode : ''
          }`}
        >
          {messageOfPassword}
        </div>
        <button
          onClick={handleLogin}
          className={`${styles.loginBtn} ${darkMode ? styles.darkMode : ''}`}
        >
          로그인
        </button>
      </form>
      <button onClick={() => navigate('/signup')} className={styles.signup}>
        회원가입
      </button>
    </main>
  );
}
