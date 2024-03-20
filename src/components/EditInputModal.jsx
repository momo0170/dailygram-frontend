import React, { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './css/EditInputModal.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditInputModal({ isCardOpen, setIsCardOpen }) {
  // const location = useLocation();
  const {
    state: { text },
  } = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleUpdate = () => {
    console.log('update!');
  };

  const handleClose = () => {
    navigate('/');
    setIsCardOpen(!isCardOpen);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
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
          <button onClick={handleUpdate} className={styles.createBtn}>
            수정
          </button>
        </footer>
      </div>
    </div>
  );
}
