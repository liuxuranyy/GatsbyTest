import { Link } from 'gatsby';
import * as React from 'react';

import "antd/dist/antd.css";

const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <Link to="my-first-post">Go to my first Markdown blog post</Link>
    </>
  )
};

export default IndexPage
