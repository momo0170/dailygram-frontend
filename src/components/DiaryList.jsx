import React, { useEffect } from 'react';
import Diary from './Diary.jsx';
import styles from './css/DiaryList.module.scss';

export default function DiaryList({ diaryList, isCardClick, setIsCardClick }) {
  console.log(diaryList);
  useEffect(() => {
    const data = localStorage.getItem('usr');
    if (!data) {
      console.log('로그인된 상태가 아닙니다.');
    }
  });
  return (
    <main className={styles.main}>
      <ul>
        {diaryList?.map((diary) => (
          <Diary
            key={diary.id}
            diary={diary}
            isCardClick={isCardClick}
            setIsCardClick={setIsCardClick}
          />
        ))}
      </ul>
    </main>
  );
}
