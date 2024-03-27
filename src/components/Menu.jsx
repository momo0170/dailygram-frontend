import React from 'react';
import Profile from './Profile';
import CreateDiaryButton from './CreateDiaryButton';
import styles from './css/Menu.module.scss';
import { useOutletContext } from 'react-router-dom';
import NoProfile from './NoProfile';

export default function Menu({ setIsBtnClick }) {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  return (
    <aside className={styles.aside}>
      {isLogin ? (
        <>
          <Profile />
          <CreateDiaryButton setIsBtnClick={setIsBtnClick} />
        </>
      ) : (
        <NoProfile />
      )}
    </aside>
  );
}
