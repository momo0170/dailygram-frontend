import React, { useContext, useEffect, useState } from 'react';
import Menu from '../components/Menu';
import DiaryList from '../components/DiaryList';
import InputModal from '../components/InputModal';
import EditInputModal from '../components/EditInputModal';
import { getAllDiary } from '../services/diaryService';
import styles from './css/Home.module.scss';
import { useOutletContext } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import Navbar from '../components/Navbar';

export default function Home() {
  const [diaryList, setDiaryList] = useState([]);
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isCardClick, setIsCardClick] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    getAllDiary().then((diaries) => setDiaryList(diaries));
  }, []);
  console.log(darkMode);
  console.log(diaryList);
  return (
    <main className={`${styles.main} ${darkMode ? styles.darkMode : ''}`}>
      <Menu setIsBtnClick={setIsBtnClick} />
      <section className={styles.section}>
        <Navbar diaryList={diaryList} setDiaryList={setDiaryList} />
        <DiaryList
          diaryList={diaryList}
          setIsCardClick={setIsCardClick}
          isCardClick={isCardClick}
        />
      </section>
      {isBtnClick ? (
        <InputModal
          setDiaryList={setDiaryList}
          setIsBtnClick={setIsBtnClick}
          isBtnClick={isBtnClick}
        />
      ) : null}
      {isCardClick ? (
        <EditInputModal
          setDiaryList={setDiaryList}
          isCardClick={isCardClick}
          setIsCardClick={setIsCardClick}
        />
      ) : null}
    </main>
  );
}
