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
    if (data) {
      setIsLogin(true);
      navigate('/diary');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <DarkModeContextProvider>
      <Outlet context={[user, setUser, isLogin, setIsLogin]} />
    </DarkModeContextProvider>
  );
}

export default App;
