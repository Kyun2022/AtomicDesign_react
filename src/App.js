import { UserProvider } from './provider/UserProvider';
import React from 'react';
import { RouterComponent } from './router/RouterComponent';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <RouterComponent />
      </UserProvider>
    </RecoilRoot>
  );
};

export default App;
