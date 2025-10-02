import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode,
}

const AppTheme = (props: IProps) => {
  const { children } = props;
  return (
    <div>
      <p>~~~ welcome ~~~</p>
      <div>{children}</div>
    </div>
  );
};

export default AppTheme;
