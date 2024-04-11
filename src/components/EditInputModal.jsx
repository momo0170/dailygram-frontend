import React, { useContext, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import styles from './css/EditInputModal.module.scss';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { deleteDiary, updateDiary } from '../services/diaryService';
import { DarkModeContext } from '../context/DarkModeContext.jsx';

export default function EditInputModal({
  setDiaryList,
  isCardClick,
  setIsCardClick,
}) {
  const [updatedText, setUpdatedText] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const {
    state: { text, id, nickname },
  } = useLocation();

  const navigate = useNavigate();
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
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
  console.log(user);
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
        <header
          className={`${styles.header} ${darkMode ? styles.darkMode : ''}`}
        >
          <button
            onClick={handleClose}
            className={`${styles.closeBtn} ${darkMode ? styles.darkMode : ''}`}
          >
            <IoIosClose
              size="40"
              className={`${styles.icon} ${darkMode ? styles.darkMode : ''}`}
            />
          </button>
        </header>
        <section
          className={`${styles.section} ${darkMode ? styles.darkMode : ''}`}
        >
          <textarea
            className={`${styles.content} ${darkMode ? styles.darkMode : ''}`}
            defaultValue={text}
            onChange={handleChange}
            disabled={nickname === user.nickname ? false : true}
          ></textarea>
        </section>
        <footer
          className={`${styles.footer} ${darkMode ? styles.darkMode : ''}`}
        >
          {/* 일기를 작성한 사용자 닉네임과 로그인한 사용자 닉네임이 같다면 */}
          {nickname === user.nickname ? (
            <>
              <button onClick={handleDelete} className={styles.deleteBtn}>
                삭제하기
              </button>
              <button
                onClick={handleUpdate}
                className={`${styles.updateBtn} ${
                  darkMode ? styles.darkMode : ''
                }`}
              >
                수정하기
              </button>
            </>
          ) : null}
        </footer>
      </div>
    </div>
  );
}
