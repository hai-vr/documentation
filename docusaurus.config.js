// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haï~',
  tagline: 'Virtual reality tools and apps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.hai-vr.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hai-vr', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
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

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false
            // {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // }
        ,
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
      image: 'img/hai-social-card.jpg',
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
            type: 'docSidebar',
            sidebarId: 'otherSidebar',
            position: 'left',
            label: 'Help & Discord',
          },
          {
            label: 'Patreon rewards',
            to: '/docs/other/patreon',
          },
          {
            href: 'https://www.patreon.com/vr_hai',
            label: 'Patreon',
            position: 'right',
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
                to: '/docs/products',
              },
              {
                label: 'ResilienceVR',
                to: '/docs/resilience',
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
                label: 'pixivFANBOX',
                href: 'https://hai-vr.fanbox.cc/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vr_hai',
              },
              {
                label: 'Discord',
                to: '/docs/other/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
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
