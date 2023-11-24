import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from '../Pages/Top';
import { Users } from '../Pages/Users';
import { DefaultLayout } from '../template/DefaultLayout';
import { HeaderOnly } from '../template/HeaderOnly';

export const RouterComponents = () => {
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
