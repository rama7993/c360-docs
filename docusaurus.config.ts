import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config: Config = {
  title: "Satisfic",
  tagline:
    "Partner Marketing Concierge Solution for OEMs, Distributors, and Partners",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/rama7993/c360-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/rama7993/c360-docs/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    metadata: [
      { name: "algolia-site-verification", content: "16A356319FCCF42D" },
    ],
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Satisfic",
      logo: {
        alt: "Satisfic Logo",
        src: "img/logo.svg",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "search", // Algolia search bar
          position: "right",
        },
      ],
    },
    sidebar: {
      hideable: true,
      sidebarCollapsed: false,
      autoCollapseCategories: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "C360 Platform",
              href: "https://satisfic.com/",
            },
            {
              label: "Features",
              to: "/docs/intro",
            },
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Marketing To Partners",
              href: "https://satisfic.com/",
            },
            {
              label: "Marketing Through Partners",
              href: "https://satisfic.com/",
            },
            {
              label: "Concierge Services",
              href: "https://satisfic.com/",
            },
            {
              label: "Channel Research",
              href: "https://satisfic.com/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "https://satisfic.com/",
            },
            {
              label: "Career",
              href: "https://satisfic.com/",
            },
            {
              label: "Contact",
              href: "https://satisfic.com/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Get Started",
              to: "/docs/intro",
            },
            {
              label: "Help Center",
              to: "/docs/intro",
            },
            {
              label: "Contact Support",
              href: "mailto:sales@satisfic.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Satisfic. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "9J52VS5PU4",
      apiKey: "809e9ff25d0a566ab473749a0be5dae2",
      indexName: "satisfic-docs",
      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",

      searchParameters: {},
      searchPagePath: false,
      insights: false,
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
