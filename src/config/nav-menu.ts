import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Features",
          href: "/#features",
          description: "Take a closer look at the project's features.",
        },
        {
          title: "Twitter (@miickasmt)",
          href: "https://twitter.com/miickasmt",
          description: "Follow me to get the latest updates and news.",
          external: true,
        },
        {
          title: "Source Code",
          href: "https://github.com/mickasmt/astro-nomy",
          description: "You want to star the repository ? Let's get started!",
          external: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX documentation site built using Content Collections.",
        },
        {
          title: "Authentification",
          href: "/login",
          description: "Login and register pages for authentification.",
          disabled: true,
        },
        {
          title: "Dashboard",
          href: "/#dashboard",
          description: "A dashboard panel after authentification.",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/#examples/ecommerce",
          description:
            "Different pages of an ecommerce app fetching data from an API.",
          disabled: true,
        },
        {
          title: "Social Media",
          href: "/#examples/social-media",
          description: "Different components & pages of an social media app.",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
