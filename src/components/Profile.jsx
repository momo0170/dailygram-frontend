import React, { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './css/Profile.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { BsBrightnessHigh } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Profile() {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const [isClick, setIsClick] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // 로그아웃 버튼 클릭 시
  const handleLogout = () => {
    setIsLogin(!isLogin);
    localStorage.clear();
  };
  useEffect(() => {
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  }, []);
  console.log(darkMode);
  return (
    <>
      <aside className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
        <section className={styles.col}>
          <div className={styles.info}>
            <img
              src={user?.url}
              alt="profile-img"
              className={styles.profileImg}
            />
            <span
              className={`${styles.nickname} ${
                darkMode ? styles.darkMode : ''
              }`}
            >
              {user?.nickname}
            </span>
          </div>
          <div className={styles.btnAndIcon}>
            <button
              onClick={handleLogout}
              className={`${styles.logoutBtn} ${
                darkMode ? styles.darkMode : ''
              }`}
            >
              로그아웃
            </button>
            <IoIosArrowDown
              size="20"
              className={`${styles.arrow} ${isClick ? styles.clicked : ''} ${
                darkMode ? styles.darkMode : ''
              } `}
              onClick={() => setIsClick((isClick) => !isClick)}
            />
          </div>
        </section>
        <section
          className={`${styles.darkModeBtn} ${isClick ? styles.clicked : ''} ${
            darkMode ? styles.darkMode : ''
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <BsFillMoonFill
              size="25"
              className={`${styles.icon} ${darkMode ? styles.darkMode : ''}`}
            />
          ) : (
            <BsBrightnessHigh
              size="25"
              className={`${styles.icon} ${darkMode ? styles.darkMode : ''}`}
            />
          )}

          <span className={`${styles.text} ${darkMode ? styles.darkMode : ''}`}>
            {darkMode ? '라이트모드' : '다크모드'}
          </span>
        </section>
      </aside>
    </>
  );
}
