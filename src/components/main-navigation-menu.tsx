import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";

type MenuItem = {
  title: string;
  href: string;
  description: string;
  launched?: boolean;
  disabled?: boolean;
  external?: boolean;
};

const infos: MenuItem[] = [
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
];

const examples: MenuItem[] = [
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
    description:
      "Login and register pages for authentification.",
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
];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Icons.logo className="h-8 w-8" />
                  <div className="mb-2 mt-3 text-lg font-medium">Astronomy</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Modern application with differents sections examples built
                    using shadcn/ui.
                  </p>
                </a>
              </li>

              {infos.map((info) => (
                <ListItem key={info.title} {...info} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {examples.map((example) => (
                <ListItem key={example.title} {...example} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href="/about" className={navigationMenuTriggerStyle()}>
            About
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        href={disabled ? undefined : href}
        target={target}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : ""
        )}
      >
        <div className="text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge variant="secondary" radius="sm" className="h-5 px-1.5 text-xs font-medium">
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge radius="sm" className="h-5 px-1.5 text-xs font-medium">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
