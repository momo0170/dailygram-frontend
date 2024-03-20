import React from 'react';
import styles from './css/InputModal.module.scss';
import { IoIosClose } from 'react-icons/io';

export default function InputModal({ isOpen, setIsOpen }) {
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
          <textarea className={styles.content}></textarea>
        </section>
        <footer className={styles.footer}>
          <button className={styles.createBtn}>생성</button>
        </footer>
      </div>
    </div>
  );
}
