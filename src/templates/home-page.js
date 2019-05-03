import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Layout from "../components/Layout";
import Features from "../components/Features";

export const HomePageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
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
        <div className="">
          <div className="">
            <div className="column is-12 has-text-centered">
              <Link className="Button btn" to="/start">
                Get started with ml5.js
              </Link>
            </div>
            <div className="column is-12">
              <div className="">
                <div className="">
                  <div className="">
                    <h1 className="home__pitchTitle">{mainpitch.title}</h1>
                  </div>
                  <div className="">
                    <p className="home__pitchDescription">
                      {mainpitch.description}
                    </p>
                  </div>
                </div>

                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="home__teamHeadshot">
                    <PreviewCompatibleImage imageInfo={team} />
                  </div>
                  <p>{team.profile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        subheading
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
        team {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          profile
        }
      }
    }
  }
`;
