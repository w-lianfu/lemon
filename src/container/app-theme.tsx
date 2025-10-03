import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

// import AppTop from '@comp/app-top/index';
import Header from '@comp/header/index';
import AppStatus from '@comp/app-status/index';
import AppBar from '@comp/app-bar/index';
import AppStand from '@comp/app-stand/index';
import './scss/app-theme.scss';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  return (
    <section className="app-theme">
      <Header />
      <section className="app-container">
        <AppBar />
        <section>{children}</section>
        <AppStand />
      </section>
      <AppStatus />
    </section>
  );
};

export default AppTheme;
