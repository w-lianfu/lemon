import { useEffect } from 'react';
import { NavLink } from 'react-router';

const Dashboard = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>~~~ Dashboard Page ~~~</p>
      <NavLink to="/home">to Home Page</NavLink>
    </section>
  );
};

export default Dashboard;
