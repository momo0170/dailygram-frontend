import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditInputModal from './components/EditInputModal';
import InputModal from './components/InputModal';
import Welcome from './routes/Welcome';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';
import './fonts/Font.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/diary',
        element: <Home />,
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
      {
        path: '/welcome',
        element: <Welcome />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
