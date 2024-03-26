import React from 'react';
import Profile from './Profile';
import CreateDiaryButton from './CreateDiaryButton';
import styles from './css/Menu.module.scss';

export default function Menu({ setIsBtnClick }) {
  return (
    <aside className={styles.aside}>
      <Profile />
      <CreateDiaryButton setIsBtnClick={setIsBtnClick} />
    </aside>
  );
}
