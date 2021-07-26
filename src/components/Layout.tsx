import React from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar';

import { Layout as AntdLayout } from 'antd';


export const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <AntdLayout>
        <AntdLayout.Sider className="bg-white" width={300}>
          <SideBar />
        </AntdLayout.Sider>

        <AntdLayout.Content className="p-12">
          {children}
        </AntdLayout.Content>

      </AntdLayout>
    </div>
  );
};
