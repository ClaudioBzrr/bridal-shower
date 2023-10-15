import { Home } from './pages/Home';
import { IRoute } from './types/Route';

export const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
];
