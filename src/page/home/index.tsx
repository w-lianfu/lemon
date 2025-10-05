import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { Button } from '@mui/material';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {}, []);

  return (
    <section>
      <p>home page...</p>
      <p>home page...</p>
      <p><Button variant="contained" color="primary">to Dashboard Page</Button></p>
      <p><Button variant="contained" color="secondary">to Dashboard Page</Button></p>
      <p><Button variant="contained" color="success">to Dashboard Page</Button></p>
      <p><Button variant="contained" color="info">to Dashboard Page</Button></p>
      <p><Button variant="contained" color="warning">to Dashboard Page</Button></p>
      <Button variant="contained" color="error">to Dashboard Page</Button>
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
