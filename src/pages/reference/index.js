import React from "react";

import Layout from "../../components/Layout";
import ModelList from "../../components/ModelList";

export default class ReferenceIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <article>

        </article>
        <div>
          <h2>Reference</h2>
        </div>
        <div className="flexContainer">
          <aside className="Sidebar">
            <ModelList />
          </aside>
          <article className="">
            <div className="container">
              <div className="content">
                <p>test</p>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}
