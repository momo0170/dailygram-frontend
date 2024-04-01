import React, { useEffect, useState } from 'react';
import styles from './css/Navbar.module.scss';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getAllDiary, getDiaryByNickname } from '../services/diaryService';

export default function Navbar({ diaryList, setDiaryList }) {
  const [isFilter, setIsFilter] = useState(false);
  const [user, setUser, isLogin, setIsLogin] = useOutletContext();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (isFilter) {
      if (isLogin) {
        getDiaryByNickname(user.nickname).then((data) => setDiaryList(data));
      } else {
        navigate('/login');
      }
    } else {
      getAllDiary().then((data) => setDiaryList(data));
    }
  }, [isFilter]);
  console.log('현재 필터 상태', isFilter);
  return (
    <nav className={styles.nav}>
      <button
        onClick={() => setIsFilter(!isFilter)}
        className={styles.myDiaryBtn}
      >
        {isFilter ? '전체 일기' : '나의 일기'}
      </button>
    </nav>
  );
}
