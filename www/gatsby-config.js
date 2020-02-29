require("dotenv").config();

const siteMetadata = {
  title: `Awesome Figma Tips`,
  name: `Awesome Figma Tips`,
  siteUrl: `https://trongnguyen.co`,
  description: `Small but awesome tips to work faster in Figma.`,
  hero: {
    heading: `Hi, I’m Trong, <br/>product designer.`,
    writingHeading: `Tips to <br/>fasten <br/>Figma <br/>workflow.`,
    maxWidth: 480,
  },
  social: [
    {
      url: `https://twitter.com/trongtnt92`,
    },
    {
      name: 'medium',
      url: `https://medium.com/@trongtnt92`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: false,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Awesome Figma Tips`,
      short_name: `Figma Tips`,
      start_url: `/`,
      background_color: `#090A0B`,
      display: `standalone`,
      icon: `src/assets/favicon.jpg`,
      include_favicon: false,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-55380266-4",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://medium.us16.list-manage.com/subscribe/post?u=bd56b6b313e273cdd466f5abc&amp;id=736a1779cd",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
