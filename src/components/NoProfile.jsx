import React, { useContext } from 'react';
import styles from './css/NoProfile.module.scss';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function NoProfile() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/login');
  };
  return (
    <section className={`${styles.section} ${darkMode ? styles.darkMode : ''}`}>
      <span className={`${styles.text} ${darkMode ? styles.darkMode : ''}`}>
        로그인이 필요합니다
      </span>
      <div
        onClick={moveToLogin}
        className={`${styles.btn} ${darkMode ? styles.darkMode : ''}`}
      >
        <RiArrowGoBackLine
          className={`${styles.btnIcon} ${darkMode ? styles.darkMode : ''}`}
        />
        <span
          className={`${styles.btnText} ${darkMode ? styles.darkMode : ''}`}
        >
          로그인 하러 가기
        </span>
      </div>
    </section>
  );
}
