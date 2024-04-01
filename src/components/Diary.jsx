import React, { useContext } from 'react';
import styles from './css/Diary.module.scss';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext.jsx';
import convertDate from '../util/convertDate.js';

export default function Diary({ diary, isCardClick, setIsCardClick }) {
  const { nickname, createdAt, text, url, id } = diary;
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const lookDiary = () => {
    setIsCardClick(!isCardClick);
    navigate(`/diary/${id}`, { state: { text, id, nickname } });
  };

  return (
    // 클릭 시 /diary/:id 로 이동
    <li onClick={lookDiary} className={darkMode ? styles.darkMode : ''}>
      <div className={`${styles.text} ${darkMode ? styles.darkMode : ''}`}>
        {text}
      </div>
      <div className={`${styles.info} ${darkMode ? styles.darkMode : ''}`}>
        <div className={styles.user}>
          <img src={url} alt="profile-img" />
          <span
            className={`${styles.nickname} ${darkMode ? styles.darkMode : ''}`}
          >
            {nickname}
          </span>
        </div>
        <div
          className={`${styles.createdAt} ${darkMode ? styles.darkMode : ''}`}
        >
          {convertDate(createdAt)}
        </div>
      </div>
    </li>
  );
}
