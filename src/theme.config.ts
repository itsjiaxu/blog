import { defineThemeConfig } from "./types";

export default defineThemeConfig({
  site: "https://localhost:4321",
  title: "MyBlog",
  description: "my personal blog",
  author: "Joshua",
  navbarItems: [
    { label: "Blog", href: "/posts/" },
    { label: "Projects", href: "/projects/" },
    { label: "Tags", href: "/tags/" },
    { label: "About", href: "/about/" },
    {
      label: "Other pages",
      children: [
        { label: "Landing page", href: "/" },
        { label: "Vinyl", href: "/vinyl" },
        { label: "404 page", href: "/404" },
      ],
    },
  ],
  footerItems: [
    {
      icon: "tabler--brand-github",
      href: "https://github.com/itsjiaxu/itsjiaxu.github.io",
      label: "Github",
    },
    {
      icon: "tabler--rss",
      href: "/feed.xml",
      label: "RSS feed",
    },
  ],

  // optional settings
  locale: "en",
  mode: "dark",
  modeToggle: true,
  colorScheme: "scheme-mono",
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: "tabler--brand-tailwind",
    astro: "tabler--brand-astro",
    documentation: "tabler--book",
  },
  shikiThemes: {
    light: "vitesse-light",
    dark: "vitesse-black",
  },
});
