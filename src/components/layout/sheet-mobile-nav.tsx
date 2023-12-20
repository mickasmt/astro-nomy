import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { Icons } from "@/icons";
import type { MainNavItem, SidebarNavItem } from "@/types";

interface SheetMobileProps {
  mainNavItems?: MainNavItem[];
  sidebarNavItems?: SidebarNavItem[];
}

export function SheetMobileNav({
  mainNavItems,
  sidebarNavItems,
}: SheetMobileProps) {
  const [open, setOpen] = React.useState(false);

  const mergedMainNavItems = mainNavItems?.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.href === item.href && t.title === item.title)
  );

  // [
  //     ...marketingConfig.mainNav,
  //     ...docsConfig.mainNav,
  //   ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Icons.hamburger className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <a href="/" className="flex items-center">
          <Icons.logo className="mr-2 size-8" />
          <span className="font-bold">{siteConfig.name}</span>
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
          <div className="mt-2 mb-20">
            {mainNavItems?.length ? (
              <div className="flex flex-col space-y-3">
                {mergedMainNavItems?.map(
                  (item) =>
                    item.href && (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-muted-foreground"
                        onClick={() =>
                          item.href.startsWith("/#")
                            ? setOpen(false)
                            : undefined
                        }
                      >
                        {item.title}
                      </a>
                    )
                )}
              </div>
            ) : null}

            {sidebarNavItems?.length ? (
              <div className="flex flex-col space-y-2">
                {sidebarNavItems.map((item, index) => {
                  const activeItems = item?.items?.filter(
                    (subItem) => !subItem.disabled
                  );

                  if (!activeItems || activeItems.length === 0) return null;

                  return (
                    <div key={index} className="flex flex-col space-y-3 pt-6">
                      <h4 className="font-medium">{item.title}</h4>
                      {activeItems.map((subItem, idx) => (
                        <React.Fragment key={subItem.href + idx}>
                          {subItem.href ? (
                            <a
                              href={subItem.href}
                              target={subItem?.external ? "_blank" : undefined}
                              className="text-muted-foreground"
                            >
                              {subItem.title}
                            </a>
                          ) : (
                            subItem.title
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
