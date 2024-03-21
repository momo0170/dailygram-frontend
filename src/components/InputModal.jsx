import React, { useState } from 'react';
import styles from './css/InputModal.module.scss';

import { postDiary } from '../services/diaryService';

export default function InputModal({ isOpen, setIsOpen, setDiaryList }) {
  const [text, setText] = useState('');
  const onCreate = (newDiary) => {
    setDiaryList((diaries) => [newDiary, ...diaries]);
  };
  const handleCreate = () => {
    postDiary(text) //
      .then((newDiary) => {
        onCreate(newDiary);
        setText('');
      })
      .then(() => {
        alert('생성 완료');
        setIsOpen(!isOpen);
      });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    setText('');
  };

  return (
    <div
      onClick={handleClose}
      className={`${styles.background} ${isOpen ? styles.openBackground : ''}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.main} ${isOpen ? styles.openMain : ''}`}
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
