import React from 'react';
import styles from './css/Diary.module.scss';

export default function Diary({ diary }) {
  const { nickname, createdAt, text, url } = diary;
  return (
    <li>
      {/* text는 추후에 카드 이미지로 변경 예정 */}
      <div className={styles.cardImg}>{text}</div>
      <div className={styles.info}>
        <div className={styles.user}>
          <img src={url} alt="profile-img" />
          <span className={styles.nickname}>{nickname}</span>
        </div>
        <div className={styles.createdAt}>{createdAt.slice(0, 15)}</div>
      </div>
    </li>
  );
}
