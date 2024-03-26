import React, { useEffect } from 'react';
import Diary from './Diary.jsx';
import styles from './css/DiaryList.module.scss';

export default function DiaryList({ diaryList, isCardClick, setIsCardClick }) {
  console.log(diaryList);

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
