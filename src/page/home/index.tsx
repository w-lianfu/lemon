import { useEffect } from 'react';
import { NavLink } from 'react-router';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {}, []);

  return (
    <section>
      <p>home page...</p>
      <p>home page...</p>
      <p>home page...</p>
      <p>home page...</p>
      <p>home page...</p>
      <p>home page...</p>
      <p>home page...</p>
      <NavLink to="/">to Dashboard page</NavLink>
    </section>
  );
};

export default Home;
