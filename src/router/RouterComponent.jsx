import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from '../components/Pages/Top';
import { Users } from '../components/Pages/Users';
import { DefaultLayout } from '../components/template/DefaultLayout';
import { HeaderOnly } from '../components/template/HeaderOnly';

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Top />} />
        </Route>
        <Route path="/users" element={<HeaderOnly />}>
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
