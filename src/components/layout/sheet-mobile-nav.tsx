import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { Icons } from "@/icons";

export function SheetMobileNav() {
  const [open, setOpen] = React.useState(false);

  const mergedMainNav = [
    ...marketingConfig.mainNav,
    ...docsConfig.mainNav,
  ].filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.href === item.href && t.title === item.title)
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Icons.hamburger className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <a href="/" className="flex items-center">
          <Icons.logo className="mr-2 h-8 w-8" />
          <span className="font-bold">{siteConfig.name}</span>
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
          <div className="mt-2 mb-20">
            <div className="flex flex-col space-y-3">
              {mergedMainNav.map(
                (item) =>
                  item.href && (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground"
                      onClick={() => item.href.startsWith("/#") ? setOpen(false) : undefined}
                    >
                      {item.title}
                    </a>
                  )
              )}
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">{item.title}</h4>
                  {item?.items?.length &&
                    item.items.map((item, idx) => (
                      <React.Fragment key={item.href + idx}>
                        {!item.disabled &&
                          (item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
