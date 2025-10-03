import { useEffect } from 'react';
import { Route, NavLink, Outlet } from 'react-router';

import AppTheme from '@con/app-theme';
import Home from '@page/home/index';

const Dashboard = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppTheme>
      <section>
        <p>~~~ Dashboard Page ~~~</p>
        <Outlet />
      </section>
    </AppTheme>
  );
};

export default Dashboard;
