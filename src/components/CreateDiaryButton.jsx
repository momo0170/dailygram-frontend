import React from 'react';
import styles from './css/CreateDiaryButton.module.scss';
import { useNavigate } from 'react-router-dom';

export default function CreateDiaryButton({ setIsOpen }) {
  const handleClick = () => {
    navigate('/diary/create');
    setIsOpen(true);
  };
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={handleClick}>
      생성하기
    </button>
  );
}
