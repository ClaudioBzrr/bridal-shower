import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { IRoute } from './types/Route';

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/join',
    element: <Login />,
  },
];
