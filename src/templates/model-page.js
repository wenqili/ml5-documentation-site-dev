import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ModelList from "../components/ModelList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
    <article className="ml5Grid__content">
      {helmet || ""}
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">
              {title}
              {tags && tags.length ? (
                <span className="TagList__wrapper">
                  <ul className="TagList">
                    {tags.map(tag => (
                      <li key={tag + `tag`} className={`TagList__` + tag}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </span>
              ) : null}
            </h1>
            <p>{description}</p>

            <Tabs>
              <TabList>
                <Tab>Documentation</Tab>
                <Tab>Examples</Tab>
                <Tab>Tutorial</Tab>
                <Tab>Advanced</Tab>
              </TabList>

              <TabPanel>
                <h2>Documentation</h2>
                <PostContent content={content} />
              </TabPanel>

              <TabPanel>
                <h2>Examples</h2>
              </TabPanel>

              <TabPanel>
                <h2>Tutorial</h2>
              </TabPanel>

              <TabPanel>
                <h2>Advanced</h2>
              </TabPanel>
            </Tabs>
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
  console.log(post.frontmatter.title);

  return (
    <Layout>
      <section className="ml5Grid__wrapper">
        <div className="ml5Grid__container">
          <section className="ml5Grid__sidebar">
            <div className="Sidebar__container">
              <div>
                <span className="ml5Grid__sidebarTitle">Models</span>
              </div>
              <ModelList />
            </div>
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
