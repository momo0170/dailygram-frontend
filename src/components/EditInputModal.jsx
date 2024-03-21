import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './css/EditInputModal.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteDiary, updateDiary } from '../services/diaryService';

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
  const onDelete = (id) => {
    setDiaryList((diaryList) => {
      return diaryList.filter((diary) => diary.id !== id);
    });
  };
  const handleUpdate = () => {
    updateDiary(updatedText, id) //
      .then((updatedText) => onUpdate(updatedText)) //
      .then(() => {
        navigate('/');
        setIsCardOpen(!isCardOpen);
      });
  };
  const handleDelete = () => {
    const check = window.confirm('정말로 삭제하시겠습니까?');
    if (check) {
      deleteDiary(id) //
        .then(() => onDelete(id))
        .then(() => {
          navigate('/');
          setIsCardOpen(!isCardOpen);
        });
    }
  };

  const handleClose = () => {
    navigate('/');
    setIsCardOpen(!isCardOpen);
  };
  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };

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
