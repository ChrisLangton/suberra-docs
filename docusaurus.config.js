// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Suberra",
  tagline: "Accept Crypto Payments from Anywhere for Anything.",
  url: "https://suberra.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "suberra", // Usually your GitHub org/user name.
  projectName: "suberra-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routerBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/suberra/suberra-docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Suberra",
        logo: {
          alt: "Suberra",
          src: "img/suberra_logo.png",
          srcDark: "img/suberra_logo_dark.png",
          target: "_self",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          // {
          //   label: 'Guides',
          //   position: 'left',
          //   to: '/guides',
          //   activeBasePath: '/guides'
          // },
          {
            href: "https://github.com/suberra",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/SuberraProtocol",
            className: "navbar-item-twitter",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/suberraprotocol",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/suberra/suberra-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Suberra. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
