// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenAPI/Swagger E-learning Course',
  tagline: 'API design and documentation tooling',
  url: 'https://xeeija.github.io',
  baseUrl: '/openapi-course/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-openapi.png',
  organizationName: 'xeeija', // Usually your GitHub org/user name.
  projectName: 'openapi-course', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/xeeija/openapi-wfeng/edit/main/',
          path: "course",
          routeBasePath: "course/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true
      },
      hideableSidebar: true,
      navbar: {
        title: 'OpenAPI/Swagger',
        logo: {
          alt: 'Logo',
          src: 'img/favicon-openapi.png',
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Course",
            position: 'left',
          },
          {
            href: 'https://github.com/xeeija/openapi-wfeng',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: "Copyright &copy; 2021 Xeeija. Built with Docusaurus."
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    }),

  themes: ['@docusaurus/theme-live-codeblock'],
  trailingSlash: false,
};

module.exports = config;
