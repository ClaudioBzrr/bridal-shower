import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { IRoute } from './types/Route';

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
