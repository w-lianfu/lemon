import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

import Page404 from '@comp/page-404/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import About from '@page/about/index';
import Contact from '@page/contact/index';

interface IProps {}

const AppRouter = (props: IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index={true} element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
