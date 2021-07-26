import React from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const Layout = ({ children }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderOtherContents = (mobileView: boolean) => (
    <div className={`flex flex-1 items-center space-x-6 ${mobileView ? 'justify-between' : 'justify-end'}`}>
      show something
    </div>
  );

  return (
    <div>
      <Header/>
      <SideBar/>
      {children}
    </div>
  );
};
