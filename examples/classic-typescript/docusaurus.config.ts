import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'راهنمای فنی ایزی پینگ',
  tagline: 'Powering your gaming network',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ezping.ir/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'daneshh', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        direction: 'rtl',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ایزی پینگ',
      logo: {
        alt: 'ایزی پینگ',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://ezping.ir',
          label: 'EZPing.ir',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'لینک ها',
          items: [
            {
              label: 'وبسایت ایزی پینگ',
              to: 'https://ezping.ir',
            },
            {
              label: 'راهنمای فنی',
              to: '/',
            },
            {
              label: 'وضعیت سرور ها',
              to: 'https://status.ezping.ir',
            },
          ],
        },
        {
          title: 'فضای مجازی',
          items: [
            {
              label: 'تلگرام',
              href: 'https://t.me/ezping',
            },
            {
              label: 'دیسکورد',
              href: 'https://discord.com/channels/471455431969996802/1285359158866214993',
            },
          ],
        },
        {
          title: 'ارتباط با ما',
          items: [
            {
              label: 'تلگرام',
              to: 'https://t.me/ezping_support',
            },
          ],
        },
      ],
      copyright: `کپی رایت © ${new Date().getFullYear()} ایزی پینگ. ساخته شده با داکیوساروس!`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
