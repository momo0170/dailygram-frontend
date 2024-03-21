import React, { useEffect, useState } from 'react';
import Diary from '../components/Diary.jsx';
import { getAllDiary } from '../services/diaryService.js';
import styles from './css/DiaryList.module.scss';
import CreateDiaryButton from '../components/CreateDiaryButton.jsx';
import InputModal from '../components/InputModal.jsx';
import EditInputModal from '../components/EditInputModal.jsx';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    getAllDiary().then((diaries) => setDiaryList(diaries));
  }, []);

  console.log(diaryList);
  return (
    <main className={styles.main}>
      <ul>
        {diaryList?.map((diary) => (
          <Diary
            key={diary.id}
            diary={diary}
            isCardOpen={isCardOpen}
            setIsCardOpen={setIsCardOpen}
          />
        ))}
      </ul>
      {isCardOpen ? (
        <EditInputModal
          isCardOpen={isCardOpen}
          setIsCardOpen={setIsCardOpen}
          setDiaryList={setDiaryList}
        />
      ) : null}
      {isOpen ? (
        <InputModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setDiaryList={setDiaryList}
        />
      ) : null}

      <CreateDiaryButton setIsOpen={setIsOpen} />
    </main>
  );
}
