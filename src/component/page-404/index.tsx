import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface IProps {}

const Page404 = (props: IProps) => {
  const navi = useNavigate();
  navi('/');

  return (
    <section />
  );
};

export default Page404;
