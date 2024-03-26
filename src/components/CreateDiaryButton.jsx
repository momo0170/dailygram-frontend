import React from 'react';
import styles from './css/CreateDiaryButton.module.scss';
import { useNavigate } from 'react-router-dom';

export default function CreateDiaryButton({ setIsBtnClick }) {
  const handleClick = () => {
    setIsBtnClick(true); // 버튼이 클릭된 상태를 true
    navigate('/diary/create'); // <InputModal> 로 이동
  };
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={handleClick}>
      생성하기
    </button>
  );
}
