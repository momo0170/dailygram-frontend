import React, { useContext, useEffect, useState } from 'react';
import styles from './css/InputModal.module.scss';

import { postDiary } from '../services/diaryService';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function InputModal({
  isBtnClick,
  setIsBtnClick,
  setDiaryList,
}) {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const { name, nickname, url } = userInfo;
  const onCreate = (newDiary) => {
    setDiaryList((diaries) => [newDiary, ...diaries]);
  };
  const handleCreate = () => {
    postDiary(text, name, nickname, url) //
      .then((newDiary) => {
        onCreate(newDiary);
        setText('');
      })
      .then(() => {
        navigate('/diary');
        setIsBtnClick(!isBtnClick);
      });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClose = () => {
    navigate('/diary');
    setIsBtnClick(!isBtnClick);
    setText('');
  };
  useEffect(() => {
    const user = window.localStorage.getItem('user');
    setUserInfo(JSON.parse(user));
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`${styles.background} ${
        isBtnClick ? styles.openBackground : ''
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.main} ${isBtnClick ? styles.openMain : ''}`}
      >
        <section
          className={`${styles.section} ${darkMode ? styles.darkMode : ''}`}
        >
          <textarea
            onChange={handleChange}
            className={`${styles.content} ${darkMode ? styles.darkMode : ''}`}
            value={text}
            autoFocus
          ></textarea>
        </section>
        <footer
          className={`${styles.footer} ${darkMode ? styles.darkMode : ''}`}
        >
          <button onClick={handleClose} className={styles.closeBtn}>
            취소하기
          </button>
          <button
            onClick={handleCreate}
            className={`${styles.createBtn} ${darkMode ? styles.darkMode : ''}`}
          >
            생성하기
          </button>
        </footer>
      </div>
    </div>
  );
}
