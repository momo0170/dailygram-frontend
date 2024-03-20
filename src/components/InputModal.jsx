import React, { useState } from 'react';
import styles from './css/InputModal.module.scss';
import { IoIosClose } from 'react-icons/io';
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.background} ${isOpen ? styles.openBackground : ''}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.main} ${isOpen ? styles.openMain : ''}`}
      >
        <header className={styles.header}>
          <button onClick={handleClick} className={styles.closeBtn}>
            <IoIosClose size="40" />
          </button>
        </header>
        <section className={styles.section}>
          <textarea
            onChange={handleChange}
            className={styles.content}
            value={text}
          ></textarea>
        </section>
        <footer className={styles.footer}>
          <button onClick={handleCreate} className={styles.createBtn}>
            생성
          </button>
        </footer>
      </div>
    </div>
  );
}
