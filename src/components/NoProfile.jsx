import React, { useContext } from 'react';
import styles from './css/NoProfile.module.scss';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function NoProfile() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/login');
  };
  return (
    <section className={`${styles.section} ${darkMode ? styles.darkMode : ''}`}>
      <div
        onClick={moveToLogin}
        className={`${styles.btn} ${darkMode ? styles.darkMode : ''}`}
      >
        <span
          className={`${styles.btnText} ${darkMode ? styles.darkMode : ''}`}
        >
          로그인
        </span>
      </div>
    </section>
  );
}
