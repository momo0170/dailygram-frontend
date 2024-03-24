import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    nickname: '',
    name: '',
    url: '',
  });
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSignUp = () => {
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/sign-up`,
      data: {
        ...userInfo,
      },
    }).then((data) => {
      console.log(data);
      alert('가입이 완료되었습니다!');
      navigate('/');
    });
  };
  const moveToWelcome = () => {
    navigate('/');
  };
  console.log(userInfo);
  return (
    <main>
      <div>
        <div>아이디</div>
        <input name="id" type="text" onChange={onChange} />
      </div>
      <div>
        <div>비밀번호</div>
        <input name="password" type="password" onChange={onChange} />
      </div>
      <div>
        <div>이름</div>
        <input name="name" type="text" onChange={onChange} />
      </div>
      <div>
        <div>닉네임</div>
        <input name="nickname" type="text" onChange={onChange} />
      </div>
      <div>
        <div>사용자 프로필 URL</div>
        <input name="url" type="url" onChange={onChange} />
      </div>

      <button onClick={moveToWelcome}>취소</button>
      <button onClick={handleSignUp}>가입</button>
    </main>
  );
}
