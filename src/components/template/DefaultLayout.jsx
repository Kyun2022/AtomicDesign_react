import { Outlet } from 'react-router-dom';
import { Footer } from '../atoms/layout/Footer';
import { Header } from '../atoms/layout/Header';

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
      <Outlet />
    </div>
  );
};
