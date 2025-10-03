import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  return (
    <section>{children}</section>
  );
};

export default AppTheme;
