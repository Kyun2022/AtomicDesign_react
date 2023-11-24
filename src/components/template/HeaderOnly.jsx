import { Outlet } from 'react-router-dom';
import { Header } from '../atoms/layout/Header';

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <div className="">
      <Header />
      {children}
      <Outlet />
    </div>
  );
};
