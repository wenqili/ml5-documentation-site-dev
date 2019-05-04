import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Layout from "../components/Layout";
import Features from "../components/Features";

export const HomePageTemplate = ({
  content,
  image,
  title,
  heading,
  mainpitch,
  description,
  intro,
  version,
  model,
  team
}) => (
  <div>
    <div
      className="home__featuredImage full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div className="home__overlay" />
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1 className="home__featuredTitle">{heading}</h1>
        {/* <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3> */}
      </div>
    </div>
    <section className="home__section section section--gradient">
      <div className="container">
        <div className="flexContainer--center">
          <Link className="Button btn" to="/start">
            Get started with ml5.js
          </Link>
        </div>
        <div className="flexContainer">
          <div className="">
            <h1 className="home__pitchTitle">{mainpitch.title}</h1>
            <p className="home__pitchDescription">{mainpitch.description}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="home__blurb">
      <div className="flexContainer flexContainer--homeblurb">
        <Features gridItems={intro.blurbs} />
      </div>
    </section>

    <section className="home__update">
      <div className="flexContainer flexContainer--homeUpdate">
        <div
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </section>

    <section className="home__model">
      <div className="flexContainer flexContainer--homeUpdate">
        <h3>{model.heading}</h3>
        <Features gridItems={model.blurbs} />
      </div>
    </section>

    <section className="home__team">
      <div className="flexContainer flexContainer--hometeam">
        <h3>{team.heading}</h3>
        <div className="home__teamWrapper">
          <div className="home__teamHeadshot">
            <PreviewCompatibleImage imageInfo={team} />
          </div>
          <p>{team.profile}</p>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const content = data.markdownRemark.html;

  return (
    <Layout>
      <HomePageTemplate
        content={content}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        version={frontmatter.version}
        model={frontmatter.model}
        team={frontmatter.team}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading

        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        version {
          heading
          recent
          snippet
        }

        model {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        team {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          profile
        }
      }
    }
  }
`;
