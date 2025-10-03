import type { ReactNode } from 'react';

import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppBar from '@comp/app-bar/index';
import AppStand from '@comp/app-stand/index';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  return (
    <section>
      <AppTop />
      <AppBar />
      <section>{children}</section>
      <AppStand />
      <AppStatus />
    </section>
  );
};

export default AppTheme;
