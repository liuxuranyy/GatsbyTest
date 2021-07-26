import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import { Layout } from '../components';

import '../styles/app.css';

// eslint-disable-next-line import/no-default-export
export default function Template({
  data
}) {
  const { mdx } = data;
  return (
    <Layout>
      <div className="ml-60">
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        {/* <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: mdx.html }}
        /> */}
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
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

