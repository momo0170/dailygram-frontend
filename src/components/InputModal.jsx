import React, { useEffect, useState } from 'react';
import styles from './css/InputModal.module.scss';

import { postDiary } from '../services/diaryService';
import { useNavigate } from 'react-router-dom';

export default function InputModal({
  isBtnClick,
  setIsBtnClick,
  setDiaryList,
}) {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

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
        alert('생성 완료');
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
        <section className={styles.section}>
          <textarea
            onChange={handleChange}
            className={styles.content}
            value={text}
            autoFocus
          ></textarea>
        </section>
        <footer className={styles.footer}>
          <button onClick={handleClose} className={styles.closeBtn}>
            취소
          </button>
          <button onClick={handleCreate} className={styles.createBtn}>
            생성
          </button>
        </footer>
      </div>
    </div>
  );
}
