import { Link } from 'gatsby';
import * as React from 'react';

export class IndexPage extends React.Component {
  render() {
    return (
    <div>
      <title>Home Page</title>
      <Link to="my-first-post">Go to my first Markdown blog post</Link>
    </div>);
  }
}
