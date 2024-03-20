import React, { useEffect, useState } from 'react';
import Diary from '../components/Diary.jsx';
import { getAllDiary } from '../services/diaryService.js';
import styles from './css/DiaryList.module.scss';
import CreateDiaryButton from '../components/CreateDiaryButton.jsx';
import InputModal from '../components/InputModal.jsx';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAllDiary().then((diaries) => setDiaryList(diaries));
  }, []);

  return (
    <main className={styles.main}>
      <ul>
        {diaryList.length > 0
          ? diaryList.map((diary) => <Diary key={diary.id} diary={diary} />)
          : null}
      </ul>
      <InputModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setDiaryList={setDiaryList}
      />
      <CreateDiaryButton setIsOpen={setIsOpen} />
    </main>
  );
}
