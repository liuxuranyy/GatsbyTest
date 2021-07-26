import { Menu } from 'antd';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

export interface MenuItem {
  slug: string;
  title: string;
}

export const SideBar = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                slug
                date
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const edges = allMdx.edges;

      const menuItems = edges.map(({ node }) => ({
        slug: node.frontmatter.slug,
        title: node.frontmatter.title
      })
      ) as MenuItem[];
      return (
        <SideBarMenu menuItems={menuItems}/>
      );
    }}
  />

);

const SideBarMenu = ({ menuItems }: {menuItems: MenuItem[]}) => (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    className="overflow-hidden transition-all w-60 h-full bg-indigo-300"
  >
    {
      menuItems.map(item => (<Menu.Item key={item.slug}><Link to={item.slug}>
        {item.title}
      </Link></Menu.Item>))
    }
  </Menu>
);
