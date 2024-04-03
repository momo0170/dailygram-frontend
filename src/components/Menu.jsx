import React, { useContext } from 'react';
import Profile from './Profile';
import CreateDiaryButton from './CreateDiaryButton';
import styles from './css/Menu.module.scss';
import { useOutletContext } from 'react-router-dom';
import NoProfile from './NoProfile.jsx';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function Menu({ setIsBtnClick }) {
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <aside className={`${styles.aside} ${darkMode ? styles.darkMode : ''}`}>
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
