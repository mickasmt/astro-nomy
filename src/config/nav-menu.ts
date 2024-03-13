import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "fake-img.jpg",
        },
        {
          title: "Changelog",
          href: "/changelog",
          description: "Replicate of Starlog template with Tailwind CSS.",
          image: "fake-img.jpg",
        },
        {
          title: "Waiting List",
          href: "waiting-list",
          description: "A waiting list page with form using Astro DB.",
          image: "fake-img.jpg",
          disabled: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "fake-img.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "fake-img.jpg",
        },
        {
          title: "Blog DB",
          href: "/#blog-db",
          description:
            "Blog built using Astro DB. With categories, views & likes.",
          image: "fake-img.jpg",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/products",
          disabled: true,
          description: "Ecommerce pages fetching data from an API.",
          image: "fake-img.jpg",
        },
        {
          title: "Anime List",
          href: "/#anime-list",
          description: "Fetch anime content from an graphql endpoint",
          image: "fake-img.jpg",
          disabled: true,
        },
        {
          title: "Authentification",
          href: "/#authentification",
          description: "Implement an authentification using Astro DB & Lucia",
          image: "fake-img.jpg",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "Pricing",
      href: "/pricing",
      description: "Pricing cards, FAQs and more.",
      image: "fake-img.jpg",
    },
    {
      title: "About",
      href: "/about",
      description: "Simple page",
      image: "fake-img.jpg",
    },
  ],
};
