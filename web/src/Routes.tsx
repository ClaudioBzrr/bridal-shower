import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { IRoute } from './types/Route';

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resgiter',
    element: <Register />,
  },
];
