import React from 'react';
import styles from './css/CreateDiaryButton.module.scss';

export default function CreateDiaryButton({ setIsOpen }) {
  const handleClick = () => setIsOpen(true);
  return (
    <button className={styles.btn} onClick={handleClick}>
      생성하기
    </button>
  );
}
