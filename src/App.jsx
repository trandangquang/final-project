import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import './App.css';
import { NotFound } from './components/not-found';
import { Login } from './feature/auth';
import { Register } from './feature/auth/';
import { Home, TypeProduct } from './feature/home';
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
        element: <TypeProduct />,
      },
      // {
      //   path: '/detail',
      //   element: <ProductDetails />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;