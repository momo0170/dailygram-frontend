import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import DiaryList from './routes/DiaryList';
import EditInputModal from './components/EditInputModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DiaryList />,
      },
      {
        path: 'diary/:id',
        element: <EditInputModal />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter router={router}>
    <App />
  </BrowserRouter>
);
