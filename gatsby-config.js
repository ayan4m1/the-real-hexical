require('dotenv/config');

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    title: 'The Real Hexical',
    author: 'Someone',
    description: 'Truth about ItsHexical.',
    siteUrl: 'https://therealhexical.site/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Real Hexical',
        /* eslint-disable camelcase */
        short_name: 'The Real Hexical',
        start_url: '/',
        background_color: '#995c30',
        theme_color: '#995c30',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp'
  ]
};
