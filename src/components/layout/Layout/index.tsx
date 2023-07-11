import React, { PropsWithChildren } from 'react';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
