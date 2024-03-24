import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const moveToDiaryList = () => {
    navigate('/diary');
  };
  return (
    <main>
      <form>
        <input type="text" />
        <input type="password" />
        <button onClick={moveToDiaryList}>로그인</button>
      </form>
    </main>
  );
}
