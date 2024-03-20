import React from 'react';
import styles from './css/CreateDiaryButton.module.scss';

export default function CreateDiaryButton({ isOpen, setIsOpen }) {
  const handleClick = () => setIsOpen(true);
  return (
    <button className={styles.btn} onClick={handleClick}>
      새로운 일기 생성하기
    </button>
  );
}
