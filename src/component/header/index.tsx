import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { Button } from '@mui/material';

import './index.scss';
import Teathief from '@image/teathief.png';

interface IProps {}

const Header = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {}, []);

  return (
    <section className="header">
      <img src={Teathief} />
      <p>
        <Button variant="dashed" color="primary"
          onClick={() => navi('/home')}>Home
        </Button>
        <Button variant="dashed" color="success"
          onClick={() => navi('/about')}>About
        </Button>
        <Button variant="dashed" color="primary"
          onClick={() => navi('/contact')}>Contact
        </Button>
      </p>
    </section>
  );
};

export default Header;
