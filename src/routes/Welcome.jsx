import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const moveToLoginPage = () => {
    navigate('/login');
  };
  const moveToSignUpPage = () => {
    navigate('/signup');
  };
  return (
    <main>
      <div className="text">오늘 하루는 어땠나요?</div>
      <div>
        <button onClick={moveToLoginPage} className="login">
          로그인
        </button>
        <button onClick={moveToSignUpPage} className="signup">
          회원가입
        </button>
      </div>
    </main>
  );
}
