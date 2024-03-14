import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Diary from '../components/Diary.jsx';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8081/diary',
    }) //
      .then((data) => setDiaryList(data.data));
  }, []);

  console.log(diaryList);
  return (
    <main>
      {diaryList.length > 0
        ? diaryList.map((diary) => <Diary key={diary.id} diary={diary} />)
        : null}
    </main>
  );
}
