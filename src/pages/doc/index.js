import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

export default class DocIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div className="container">
          <h1>Doc</h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              {data.file.childrenDocumentationJs.map(
                ({ name, examples, params }) => (
                  <div>
                    <h1>
                      <pre>
                        <code>{name}()</code>
                      </pre>
                    </h1>
                    {console.log(name)}

                    <h2>Example</h2>
                    {examples.map(({ highlighted }) => (
                      <pre className="language-html">
                        <code
                          className="language-html"
                          dangerouslySetInnerHTML={{
                            __html: highlighted
                          }}
                        />
                      </pre>
                    ))}

                    <h2>Params</h2>
                    {params.map(({ name, type, description }) => (
                      <div>
                        <h3>
                          {name}, {type.name}
                        </h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: description.childMarkdownRemark.html
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const docsQuery = graphql`
  query docsQuery {
    file {
      childrenDocumentationJs {
        name
        examples {
          highlighted
        }
        params {
          name
          type {
            type
            name
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
