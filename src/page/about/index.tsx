import { useEffect } from 'react';
import { NavLink } from 'react-router';

import Footer from '@comp/footer/index';

interface IProps {}

const About = (props: IProps) => {
  return (
    <section>
      <p>About Page</p>
      <NavLink to="/">to Home Page</NavLink>
      <Footer />
    </section>
  );
};

export default About;
