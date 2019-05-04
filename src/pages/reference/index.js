import React from "react";

import Layout from "../../components/Layout";
import ModelList from "../../components/ModelList";

export default class ReferenceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flexContainer">
          <aside className="Sidebar" />

          <article className="Section">
            <h1>Reference</h1>
            <div className="reference__wrapper">
              <ModelList />
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}

export const referencePageQuery = graphql`
  query referencePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "model-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
          }
        }
      }
    }
  }
`;
