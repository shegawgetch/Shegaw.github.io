import { Outlet } from 'react-router-dom';
import Head from '../layout/Head';
import Footer from '../layout/Footer';

export const PrivateRout = () => {
  return (
    <div>
      <Head />   
      <Outlet />
      <Footer />
    </div>
  );
};
