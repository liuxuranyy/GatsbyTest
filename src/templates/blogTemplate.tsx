import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import { Layout } from '../components';

import '../styles/app.css';

// eslint-disable-next-line import/no-default-export
export default function Template({
  data
}) {
  if (!!data) {
    const { mdx } = data;
    return (
      <Layout>
        <div className="ml-60">
          <h1>{mdx.frontmatter.title}</h1>
          <h2>{mdx.frontmatter.date}</h2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </Layout>
    );
  } else {
    return <></>
  }


}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;

