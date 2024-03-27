import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './css/Profile.module.scss';

export default function Profile() {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
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
        <div className={styles.info}>
          <img
            src={user?.url}
            alt="profile-img"
            className={styles.profileImg}
          />
          <span className={styles.nickname}>{user?.nickname}</span>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          로그아웃
        </button>
      </aside>
    </>
  );
}
