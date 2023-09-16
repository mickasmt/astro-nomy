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
  disabled?: boolean;
  badge?: string;
};

const examples: MenuItem[] = [
  {
    title: "Blog",
    href: "/blog",
    description:
      "A Markdown/MDX blog built using Content Collections in Astro.",
  },
  {
    title: "Docs",
    href: "/docs/getting-started",
    description:
      "A Markdown/MDX documentation site built using Contents Collections in Astro.",
  },
  {
    title: "Ecommerce",
    href: "/examples/ecommerce",
    description:
      "Different pages of an ecommerce app fetching data from an API.",
    disabled: true,
    badge: "SOON",
  },
  {
    title: "Social Media",
    href: "/examples/social-media",
    description: "Different components & pages of an social media app.",
    disabled: true,
    badge: "SOON",
  },
  {
    title: "Tabs",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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

              <ListItem href="/#features" title="Features">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {examples.map((example) => (
                <ListItem
                  key={example.title}
                  title={example.title}
                  // disabled={example?.disabled}
                  // badge={example.badge}
                  href={example.href}
                >
                  {example.description}
                </ListItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:hover:bg-transparent disabled:text-muted-foreground",
          className
        )}
        // disabled={disabled}
        {...props}
      >
        <div className="text-sm font-medium leading-none">
          {title}
          {/* {badge ? <Badge variant="outline" className="ml-2 text-sm h-5" radius="sm">{badge}</Badge> : ""} */}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
