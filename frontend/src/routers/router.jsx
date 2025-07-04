import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/home/Home.jsx';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/orders',
        element: <div>Orders</div>,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
