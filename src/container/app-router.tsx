import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

import Page404 from '@comp/page-404/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';

interface IProps {}

const AppRouter = (props: IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
