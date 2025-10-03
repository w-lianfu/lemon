import { useEffect } from 'react';
import { NavLink } from 'react-router';

interface IProps {}

const Contact = (props: IProps) => {
  return (
    <section>
      <p>Contact Page</p>
      <NavLink to="/">to Home Page</NavLink>
    </section>
  );
};

export default Contact;
