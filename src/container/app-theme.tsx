import type { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';

// import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppBar from '@comp/app-bar/index';
import AppStand from '@comp/app-stand/index';
import DarkTheme from '@theme/dark-theme';
import LightTheme from '@theme/light-theme';
import Header from '@comp/header/index';
import Footer from '@comp/footer/index';

import './scss/app-theme.scss';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={LightTheme}>
      <section className="app-theme">
        <Header />
        <section className="app-container">
          <AppBar />
          <section>{children}</section>
          <AppStand />
        </section>
        <Footer />
        <AppStatus />
      </section>
    </ThemeProvider>
  );
};

export default AppTheme;
