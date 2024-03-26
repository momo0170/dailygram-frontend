import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './css/EditInputModal.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteDiary, updateDiary } from '../services/diaryService';

export default function EditInputModal({
  setDiaryList,
  isCardClick,
  setIsCardClick,
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
  const onDelete = (id) => {
    setDiaryList((diaryList) => {
      return diaryList.filter((diary) => diary.id !== id);
    });
  };
  const handleUpdate = () => {
    updateDiary(updatedText, id) //
      .then((updatedText) => onUpdate(updatedText)) //
      .then(() => {
        navigate('/diary');
        setIsCardClick(!isCardClick);
      });
  };
  const handleDelete = () => {
    const check = window.confirm('정말로 삭제하시겠습니까?');
    if (check) {
      deleteDiary(id) //
        .then(() => onDelete(id))
        .then(() => {
          navigate('/diary');
          setIsCardClick(!isCardClick);
        });
    }
  };

  const handleClose = () => {
    navigate('/diary');
    setIsCardClick(!isCardClick);
  };
  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div
      onClick={handleClose}
      className={`${styles.background} ${
        isCardClick ? styles.openBackground : ''
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.main} ${isCardClick ? styles.openMain : ''}`}
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
          <button onClick={handleDelete} className={styles.deleteBtn}>
            삭제
          </button>
          <button onClick={handleUpdate} className={styles.createBtn}>
            수정
          </button>
        </footer>
      </div>
    </div>
  );
}
