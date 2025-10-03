import { useEffect } from 'react';
import { NavLink } from 'react-router';

interface IProps {}

const About = (props: IProps) => {
  return (
    <section>
      <p>About Page</p>
      <NavLink to="/">to Home Page</NavLink>
    </section>
  );
};

export default About;
