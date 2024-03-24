import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/Welcome.module.scss';

export default function Welcome() {
  const navigate = useNavigate();
  const moveToLoginPage = () => {
    navigate('/login');
  };
  const moveToSignUpPage = () => {
    navigate('/signup');
  };
  return (
    <main className={styles.main}>
      <section className={styles.text}>오늘 하루는 어땠나요?</section>
      <section className={styles.btns}>
        <button onClick={moveToLoginPage} className={styles.loginText}>
          로그인
        </button>
        <button onClick={moveToSignUpPage} className={styles.signupText}>
          회원가입
        </button>
      </section>
    </main>
  );
}
