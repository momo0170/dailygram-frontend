import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8081/diary',
    }).then((data) => setDiaryList(data.data));
  }, []);
  console.log(diaryList);
  return <div></div>;
}
