import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './css/EditInputModal.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateDiary } from '../services/diaryService';

export default function EditInputModal({
  isCardOpen,
  setIsCardOpen,
  setDiaryList,
}) {
  const [updatedText, setUpdatedText] = useState('');
  const {
    state: { text, id },
  } = useLocation();
  const navigate = useNavigate();
  const onUpdate = (updatedText) => {
    setDiaryList((diaryList) => {
      return diaryList.map((diary) =>
        diary.id === updatedText.id ? updatedText : diary
      );
    });
  };
  const handleUpdate = () => {
    updateDiary(updatedText, id) //
      .then((updatedText) => onUpdate(updatedText)) //
      .then(() => setIsCardOpen(!isCardOpen));
  };

  const handleClose = () => {
    navigate('/');
    setIsCardOpen(!isCardOpen);
  };
  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };
  console.log(id);
  return (
    <div
      onClick={handleClose}
      className={`${styles.background} ${
        isCardOpen ? styles.openBackground : ''
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.main} ${isCardOpen ? styles.openMain : ''}`}
      >
        <header className={styles.header}>
          <button onClick={handleClose} className={styles.closeBtn}>
            <IoIosClose size="40" />
          </button>
        </header>
        <section className={styles.section}>
          <textarea
            className={styles.content}
            defaultValue={text}
            onChange={handleChange}
          ></textarea>
        </section>
        <footer className={styles.footer}>
          <button onClick={handleUpdate} className={styles.createBtn}>
            수정
          </button>
        </footer>
      </div>
    </div>
  );
}
