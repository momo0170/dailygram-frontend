import React from 'react';
import styles from './css/NoProfile.module.scss';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

export default function NoProfile() {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/login');
  };
  return (
    <section className={styles.section}>
      <span className={styles.text}>로그인이 필요합니다</span>
      <div onClick={moveToLogin} className={styles.btn}>
        <RiArrowGoBackLine className={styles.btnIcon} />
        <span className={styles.btnText}>로그인 하러 가기</span>
      </div>
    </section>
  );
}
