exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const results = await graphql(`
  {
    allMdx {
      edges {
        node {
          id
          body
          frontmatter {
            slug
            date
            title
          }
        }
      }
    }
  }`);

  // eslint-disable-next-line no-console
  console.log(results.data.allMdx.edges.map(edge => edge.node.frontmatter.title));
  return results.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/blogTemplate.tsx'),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug
      }
    });
  });
};
