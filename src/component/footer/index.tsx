import { useEffect } from 'react';

import './index.scss';
import Teathief from '@image/teathief.png';

interface IProps {}

const Footer = (props: IProps) => {
  useEffect(() => {}, []);

  return (
    <section className="footer">
      <img src={Teathief} />
      <p>소중한 순간에 머물며, 창작과 티타임 속에서 이야기를 발견합니다.</p>
      <p className="copyright">© 2025 티띠쁘 • All rights reserved.</p>
    </section>
  );
};

export default Footer;
