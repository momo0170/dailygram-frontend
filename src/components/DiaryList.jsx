import React, { useContext } from 'react';
import Diary from './Diary.jsx';
import styles from './css/DiaryList.module.scss';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function DiaryList({ diaryList, isCardClick, setIsCardClick }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
      <ul className={darkMode ? styles.darkMode : ''}>
        {diaryList?.map((diary) => (
          <Diary
            key={diary.id}
            diary={diary}
            isCardClick={isCardClick}
            setIsCardClick={setIsCardClick}
          />
        ))}
      </ul>
    </main>
  );
}
