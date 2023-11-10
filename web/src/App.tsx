import {
  Routes,
  Route,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import { routes } from './Routes';

function Root() {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

const router = createHashRouter([{ path: '*', Component: Root }]);

export function App() {
  return <RouterProvider router={router} />;
}
