import React, { useEffect, useState } from 'react';
import Diary from '../components/Diary.jsx';
import { getAllDiary, postDiary } from '../services/diaryService.js';
import styles from './css/DiaryList.module.scss';
import CreateDiaryButton from '../components/CreateDiaryButton.jsx';
import InputModal from '../components/InputModal.jsx';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  let [text, setText] = useState('');

  const handleCreate = (newDiary) => {
    setDiaryList((diaries) => [newDiary, ...diaries]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postDiary(text) //
      .then((newDiary) => {
        setText('');
        handleCreate(newDiary);
      });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    getAllDiary().then((diaries) => setDiaryList(diaries));
  }, []);

  console.log(diaryList);
  console.log(isOpen);

  return (
    <main className={styles.main}>
      <ul>
        {diaryList.length > 0
          ? diaryList.map((diary) => <Diary key={diary.id} diary={diary} />)
          : null}
      </ul>
      <InputModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <CreateDiaryButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* modal form */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleSubmit}>일기 생성</button>
      </form> */}
    </main>
  );
}
