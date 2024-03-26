import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/Login.module.scss';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/sign-in`,
      data: {
        ...loginInfo,
      },
    }).then((data) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.data.user[0]));
      navigate('/diary');
    });
  };
  const onChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  console.log(loginInfo);
  return (
    <main className={styles.main}>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={onChange}
          className={styles.id}
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          placeholder="패스워드"
          onChange={onChange}
          className={styles.password}
        />
        <button onClick={handleLogin} className={styles.loginBtn}>
          로그인
        </button>
      </form>
    </main>
  );
}
