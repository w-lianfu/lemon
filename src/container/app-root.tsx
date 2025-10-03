import { useEffect } from 'react';

import '@scss/index.scss';
import AppTheme from './app-theme';
import AppRouter from './app-router';

const AppRoot = () => (
  <AppTheme>
    <AppRouter />
  </AppTheme>
);

export default AppRoot;
