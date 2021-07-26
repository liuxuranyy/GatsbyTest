import AntdLayout from 'antd/lib/layout';
import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { GsgLogo } from './GsgLogo';

export const Header = () => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
          }
        }
      }
    `}
    render={data => {

      const {
        site: {
          siteMetadata: { headerTitle }
        }
      } = data;

      return (
        <AntdLayout.Header className="px-8 bg-white shadow">
          <div className='flex flex-row justify-between'>
            <div className='flex'>
              <span className='text-2xl font-bold m-4'>{headerTitle}</span>
            </div>
            <div className='flex'>
              <GsgLogo full className="h-9" />
            </div>
          </div>
        </AntdLayout.Header>
      );
    }}
  />
);

