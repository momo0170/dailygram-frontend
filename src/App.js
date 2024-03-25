import { Outlet, useNavigate } from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
      navigate('/diary');
    }
  }, []);
  return <Outlet context={[user, setUser]} />;
}

export default App;
