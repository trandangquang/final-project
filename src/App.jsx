import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { useEffect } from 'react';
import './App.css';
import { NotFound } from './components/not-found';
import { Login } from './feature/auth';
import { Register } from './feature/auth/';
import { Home } from './feature/home';
import { ProductDetails, TypeProductPage } from './feature/product';
import { auth } from './firebase';
import { Protected } from './routes';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Protected />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/home',
        element: <Home />,
      },
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: '/type',
        element: <TypeProductPage />,
      },
      {
        path: '/detail',
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    console.log(auth.currentUser);
  });
  return <RouterProvider router={router} />;
}

export default App;
