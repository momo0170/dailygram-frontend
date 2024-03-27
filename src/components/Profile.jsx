import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './css/Profile.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { BsBrightnessHigh } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

export default function Profile() {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const [isClick, setIsClick] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin((isLogin) => !isLogin);
  };
  useEffect(() => {
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  }, []);

  return (
    <>
      <aside className={styles.main}>
        <section className={styles.col}>
          <div className={styles.info}>
            <img
              src={user?.url}
              alt="profile-img"
              className={styles.profileImg}
            />
            <span className={styles.nickname}>{user?.nickname}</span>
          </div>
          <div className={styles.btnAndIcon}>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              로그아웃
            </button>
            <IoIosArrowDown
              size="20"
              className={`${styles.arrow} ${isClick ? styles.clicked : ''} `}
              onClick={() => setIsClick((isClick) => !isClick)}
            />
          </div>
        </section>
        <section
          className={`${styles.darkMode} ${isClick ? styles.clicked : ''}`}
        >
          <BsBrightnessHigh size="25" />
          <span className={styles.text}>다크모드</span>
        </section>
      </aside>
    </>
  );
}
