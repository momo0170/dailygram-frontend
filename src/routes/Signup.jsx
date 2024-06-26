import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './css/Signup.module.scss';

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    nickname: '',
    name: '',
    url: '',
  });
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  // 가입 버튼을 눌렀을 때
  const handleSignUp = () => {
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/sign-up`,
      data: {
        ...userInfo,
      },
    }) //
      .then((data) => {
        console.log(data);
        alert('가입이 완료되었습니다!');
        localStorage.setItem('user', JSON.stringify(data.data.currentUser));
        setIsLogin((isLogin) => !isLogin);
        navigate('/diary'); // home으로 이동
      });
  };
  // welcome 페이지로 이동
  const moveToWelcome = () => {
    navigate('/welcome');
  };
  console.log(userInfo);
  return (
    <main className={styles.main}>
      <section className={styles.inputs}>
        <div>
          <input
            name="id"
            type="text"
            onChange={onChange}
            placeholder="아이디"
            autoComplete="off"
            required
          />
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="비밀번호"
            autoComplete="off"
            required
          />
          <input
            name="name"
            type="text"
            onChange={onChange}
            placeholder="이름"
            autoComplete="off"
            required
          />
          <input
            name="nickname"
            type="text"
            onChange={onChange}
            placeholder="닉네임"
            autoComplete="off"
            required
          />
          <input
            name="url"
            type="url"
            onChange={onChange}
            placeholder="이미지 URL"
            autoComplete="off"
            required
          />
        </div>
      </section>
      <section className={styles.btns}>
        <button onClick={moveToWelcome} className={styles.cancelBtn}>
          취소
        </button>
        <button onClick={handleSignUp} className={styles.signUpBtn}>
          가입
        </button>
      </section>
    </main>
  );
}
