# ml5.js website 2.0

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

This repo contains ml5.js website 2.0 that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Preview Link](https://ml5-documentation-site-preview.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

## Documentation

**Site files**

- [src/pages](): routes for pages with URLs, mostly Markdown files and index pages
- [src/templates](): templates for different pages
- [src/components](): react components
- [src/img](): images that used in website structure
- [static/img](): images that used in page content

**Style files**

- [scss/abstract]()
- [scss/base]()
- [scss/components]()
- [scss/layout]()
- [scss/pages]()
- [scss/vendors]()
- [main.scss]()

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run start
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Machine Learning Model Template

- Title
- Description
- Tag
- Example(code)
- Documentation
- Github Link
- P5 sketch Link
- Credit
