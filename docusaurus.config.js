// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haï~',
  tagline: 'Virtual reality tools and apps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hai-vr.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'temp-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hai-vr', // Usually your GitHub org/user name.
  projectName: 'temp-test', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Haï~',
        logo: {
          alt: 'My Site Logo',
          src: 'img/hai-avi.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Products',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resilienceSidebar',
            position: 'left',
            label: 'ResilienceVR',
          },
          {
            href: 'https://github.com/hai-vr/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Products',
                to: '/docs/products/intro',
              },
              {
                label: 'ResilienceVR',
                to: '/docs/resilience/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/vr_hai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vr_hai',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/???',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hai-vr/',
              },
              {
                label: 'hai-vr.dev',
                href: 'https://hai-vr.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Invitational Software. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['csharp'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
