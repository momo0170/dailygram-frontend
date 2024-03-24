import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/sign-in`,
      data: {
        ...loginInfo,
      },
    }).then((data) => {
      console.log(data);
      navigate('/');
    });
  };
  const onChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  console.log(loginInfo);
  return (
    <main>
      <form onSubmit={handleLogin}>
        <input name="id" type="text" placeholder="아이디" onChange={onChange} />
        <input
          name="password"
          type="password"
          placeholder="패스워드"
          onChange={onChange}
        />
        <button onClick={handleLogin}>로그인</button>
      </form>
    </main>
  );
}
