import React, { useEffect, useState } from 'react';
import Diary from '../components/Diary.jsx';
import { getAllDiary, postDiary } from '../services/diaryService.js';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
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

  return (
    <main>
      {diaryList.length > 0
        ? diaryList.map((diary) => <Diary key={diary.id} diary={diary} />)
        : null}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleSubmit}>일기 생성</button>
      </form>
    </main>
  );
}
