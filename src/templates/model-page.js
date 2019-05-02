import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ModelList from "../components/ModelList";

export const ModelPageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article className="Section">
      {helmet || ""}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="">
              {title}
                {tags && tags.length ? (
                  <span className="TagList__wrapper">
                    <ul className="TagList">
                      {tags.map(tag => (
                        <li key={tag + `tag`} className={`TagList__`+tag}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                ) : null}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </article>
  );
};

ModelPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const ModelPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section className="container">
        <div className="flexContainer">
          <section className="Sidebar">
            <div>
              <span className="Sidebar__title">Model</span>
            </div>
            <ModelList />
          </section>
          <ModelPageTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet titleTemplate="%s | Models">
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                  name="description"
                  content={`${post.frontmatter.description}`}
                />
              </Helmet>
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
          />
        </div>
      </section>
    </Layout>
  );
};

ModelPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ModelPage;

export const pageQuery = graphql`
  query ModelByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
