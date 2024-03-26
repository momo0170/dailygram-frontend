import React from 'react';
import styles from './css/Diary.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Diary({ diary, isCardClick, setIsCardClick }) {
  const { nickname, createdAt, text, url, id } = diary;
  const navigate = useNavigate();
  const lookDiary = () => {
    setIsCardClick(!isCardClick);
    navigate(`/diary/${id}`, { state: { text, id } });
  };
  return (
    // 클릭 시 /diary/:id 로 이동
    <li onClick={lookDiary}>
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
