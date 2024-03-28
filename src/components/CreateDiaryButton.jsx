import React, { useContext } from 'react';
import styles from './css/CreateDiaryButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

export default function CreateDiaryButton({ setIsBtnClick }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    setIsBtnClick(true); // 버튼이 클릭된 상태를 true
    navigate('/diary/create'); // <InputModal> 로 이동
  };
  const navigate = useNavigate();
  return (
    <button
      className={`${styles.btn} ${darkMode ? styles.darkMode : ''}`}
      onClick={handleClick}
    >
      생성하기
    </button>
  );
}
