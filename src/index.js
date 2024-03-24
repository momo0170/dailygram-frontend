import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DiaryList from './routes/DiaryList';
import EditInputModal from './components/EditInputModal';
import InputModal from './components/InputModal';
import Welcome from './routes/Welcome';
import Login from './routes/Login';
import Signup from './routes/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Welcome />,
      },
    ],
  },
  {
    path: '/diary',
    element: <DiaryList />,
    children: [
      {
        path: '/diary/create',
        element: <InputModal />,
      },
      {
        path: '/diary/:id',
        element: <EditInputModal />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
