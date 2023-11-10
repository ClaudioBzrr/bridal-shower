import { Routes, Route } from 'react-router-dom';
import { routes } from './Routes';

export function App() {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}
