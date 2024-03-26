import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import DiaryList from '../components/DiaryList';
import InputModal from '../components/InputModal';
import EditInputModal from '../components/EditInputModal';
import { getAllDiary } from '../services/diaryService';
import styles from './css/Home.module.scss';

export default function Home() {
  const [diaryList, setDiaryList] = useState([]);
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isCardClick, setIsCardClick] = useState(false);

  useEffect(() => {
    getAllDiary().then((diaries) => setDiaryList(diaries));
  }, []);
  console.log(isBtnClick);
  console.log(isCardClick);
  return (
    <main className={styles.main}>
      <Menu setIsBtnClick={setIsBtnClick} />
      <DiaryList
        diaryList={diaryList}
        setIsCardClick={setIsCardClick}
        isCardClick={isCardClick}
      />
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
