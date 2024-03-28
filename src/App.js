import { Outlet, useNavigate } from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';
import DarkModeContextProvider from './context/DarkModeContext.jsx';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('user');
    // 로그인 데이터가 있으면
    if (data) {
      setUser(JSON.parse(data));
      setIsLogin((isLogin) => !isLogin); // 로그인 상태를 변경
      navigate('/diary'); // 루트 경로로 이동
    } else {
      navigate('/welcome'); // 없다면 로그인을 해야 하므로 /welcome 경로로
    }
  }, []);

  return (
    <DarkModeContextProvider>
      <Outlet context={[user, setUser, isLogin, setIsLogin]} />
    </DarkModeContextProvider>
  );
}

export default App;
