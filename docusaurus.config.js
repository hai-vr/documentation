// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
export default {
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
        blog: {
          postsPerPage: 20,
          routeBasePath: 'updates',
          path: './updates',
          blogSidebarTitle: 'Updates',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          blogTitle: 'Updates',
          blogDescription: 'All updates',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            label: 'Updates',
            to: '/updates',
          },
          {
            type: 'docSidebar',
            sidebarId: 'changelogsSidebar',
            position: 'left',
            label: 'Changelogs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar',
            position: 'left',
            label: 'Research',
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
              {
                label: 'What\'s new?',
                to: '/updates',
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
  
  plugins: [
      [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/changelogs/prefabulous-avatar', to: '/docs/changelogs/prefabulous' },
          { from: '/docs/products/prefabulous-avatar', to: '/docs/products/prefabulous' },
          { from: '/docs/products/prefabulous-avatar/reference', to: '/docs/products/prefabulous/reference' },
          { from: '/docs/products/prefabulous-avatar/component-reference', to: '/docs/products/prefabulous/universal' },
          { from: '/docs/products/prefabulous-avatar/component-reference/blank-expressions-menu-and-parameters', to: '/docs/products/prefabulous/vrchat/blank-expressions-menu-and-parameters' },
          { from: '/docs/products/prefabulous-avatar/component-reference/blank-fx-animator', to: '/docs/products/prefabulous/vrchat/blank-fx-animator' },
          { from: '/docs/products/prefabulous-avatar/component-reference/blank-gesture-animator', to: '/docs/products/prefabulous/vrchat/blank-gesture-animator' },
          { from: '/docs/products/prefabulous-avatar/component-reference/change-avatar-scale', to: '/docs/products/prefabulous/universal/change-avatar-scale' },
          { from: '/docs/products/prefabulous-avatar/component-reference/edit-all-mesh-anchor-override', to: '/docs/products/prefabulous/universal/edit-all-mesh-anchor-override' },
          { from: '/docs/products/prefabulous-avatar/component-reference/edit-all-mesh-bounds', to: '/docs/products/prefabulous/universal/edit-all-mesh-bounds' },
          { from: '/docs/products/prefabulous-avatar/component-reference/import-expression-parameters', to: '/docs/products/prefabulous/vrchat/import-expression-parameters' },
          { from: '/docs/products/prefabulous-avatar/component-reference/replace-action-animator', to: '/docs/products/prefabulous/vrchat/replace-action-animator' },
          { from: '/docs/products/prefabulous-avatar/component-reference/replace-locomotion-animator', to: '/docs/products/prefabulous/vrchat/replace-locomotion-animator' },
          { from: '/docs/products/prefabulous-avatar/hai-components', to: '/docs/products/prefabulous/vrchat' },
          { from: '/docs/products/prefabulous-avatar/hai-components/assign-uv-tile', to: '/docs/products/prefabulous/universal/assign-uv-tile' },
          { from: '/docs/products/prefabulous-avatar/hai-components/convert-blendshape-conventions', to: '/docs/products/prefabulous/universal/convert-blendshape-conventions' },
          { from: '/docs/products/prefabulous-avatar/hai-components/delete-polygons', to: '/docs/products/prefabulous/universal/delete-polygons' },
          { from: '/docs/products/prefabulous-avatar/hai-components/haixt-face-tracking-extensions', to: '/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions' },
          { from: '/docs/products/prefabulous-avatar/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions', to: '/docs/products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions' },
          { from: '/docs/products/prefabulous-avatar/hai-components/lock-locomotion-menu-item', to: '/docs/products/prefabulous/vrchat/lock-locomotion-menu-item' },
          { from: '/docs/products/prefabulous-avatar/hai-components/mass-blendshape-sync', to: '/docs/products/prefabulous/vrchat/mass-blendshape-sync' },
          { from: '/docs/products/prefabulous-avatar/hai-components/recalculate-normals', to: '/docs/products/prefabulous/universal/recalculate-normals' },
          { from: '/docs/products/prefabulous-avatar/hai-components/replace-textures', to: '/docs/products/prefabulous/universal/replace-textures' },

          { from: '/docs/products/prefabulous/component-reference', to: '/docs/products/prefabulous/universal' },
          { from: '/docs/products/prefabulous/component-reference/blank-expressions-menu-and-parameters', to: '/docs/products/prefabulous/vrchat/blank-expressions-menu-and-parameters' },
          { from: '/docs/products/prefabulous/component-reference/blank-fx-animator', to: '/docs/products/prefabulous/vrchat/blank-fx-animator' },
          { from: '/docs/products/prefabulous/component-reference/blank-gesture-animator', to: '/docs/products/prefabulous/vrchat/blank-gesture-animator' },
          { from: '/docs/products/prefabulous/component-reference/change-avatar-scale', to: '/docs/products/prefabulous/universal/change-avatar-scale' },
          { from: '/docs/products/prefabulous/component-reference/edit-all-mesh-anchor-override', to: '/docs/products/prefabulous/universal/edit-all-mesh-anchor-override' },
          { from: '/docs/products/prefabulous/component-reference/edit-all-mesh-bounds', to: '/docs/products/prefabulous/universal/edit-all-mesh-bounds' },
          { from: '/docs/products/prefabulous/component-reference/import-expression-parameters', to: '/docs/products/prefabulous/vrchat/import-expression-parameters' },
          { from: '/docs/products/prefabulous/component-reference/replace-action-animator', to: '/docs/products/prefabulous/vrchat/replace-action-animator' },
          { from: '/docs/products/prefabulous/component-reference/replace-locomotion-animator', to: '/docs/products/prefabulous/vrchat/replace-locomotion-animator' },
          { from: '/docs/products/prefabulous/hai-components', to: '/docs/products/prefabulous/vrchat' },
          { from: '/docs/products/prefabulous/hai-components/assign-uv-tile', to: '/docs/products/prefabulous/universal/assign-uv-tile' },
          { from: '/docs/products/prefabulous/hai-components/convert-blendshape-conventions', to: '/docs/products/prefabulous/universal/convert-blendshape-conventions' },
          { from: '/docs/products/prefabulous/hai-components/delete-polygons', to: '/docs/products/prefabulous/universal/delete-polygons' },
          { from: '/docs/products/prefabulous/hai-components/haixt-face-tracking-extensions', to: '/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions' },
          { from: '/docs/products/prefabulous/hai-components/haixt-generate-blendshapes-for-face-tracking-extensions', to: '/docs/products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions' },
          { from: '/docs/products/prefabulous/hai-components/lock-locomotion-menu-item', to: '/docs/products/prefabulous/vrchat/lock-locomotion-menu-item' },
          { from: '/docs/products/prefabulous/hai-components/mass-blendshape-sync', to: '/docs/products/prefabulous/vrchat/mass-blendshape-sync' },
          { from: '/docs/products/prefabulous/hai-components/recalculate-normals', to: '/docs/products/prefabulous/universal/recalculate-normals' },
          { from: '/docs/products/prefabulous/hai-components/replace-textures', to: '/docs/products/prefabulous/universal/replace-textures' },
        ],
        // createRedirects(existingPath) {
        //   if (existingPath.includes('/prefabulous')) {
        //     return [
        //       existingPath.replace('/prefabulous', '/prefabulous-avatar'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ],
  ],
};
