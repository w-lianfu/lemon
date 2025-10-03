import { useEffect } from 'react';
import { NavLink } from 'react-router';

import Teathief from '@image/teathief.png';

interface IProps {}

const Header = (props: IProps) => {
  useEffect(() => {}, []);

  return (
    <section>
      <img src={Teathief} />
      <p>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </p>
    </section>
  );
};

export default Header;
