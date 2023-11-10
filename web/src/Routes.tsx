import { Event } from './pages/event';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Share } from './pages/Share';
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
  {
    path: '/event',
    element: <Event />,
  },
  {
    path: '/share',
    element: <Share />,
  },
];
