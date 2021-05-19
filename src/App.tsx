/* eslint-disable */
import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';

//import s from './App.module.scss';
import NotFoundPage from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
