"use client";
import React from "react";

import { cn } from "@/src/lib/utils";
import { Accordion, AccordionContent, Icons, Stack } from "../..";

import { links } from "@/public/mocks/dashboard-navigation";

interface NavProps {
  children: React.ReactNode;
}


export function Nav({ children }: NavProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const LevelMenu = pathname?.split("/").slice(1);
    
  return (
    <Stack>
      <Stack
        className={cn(
          "bg-white transition-all duration-300 ease-in-out fixed top-[6.5rem] left-0 h-[calc(100%-8rem)] rounded-tr-xl rounded-br-xl z-20",
          isCollapsed ? "w-[52px]" : "w-[236px]"
        )}
      >
        <Stack
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          className={cn(
            isCollapsed && "rotate-180",
            "cursor-pointer transition-all duration-300 ease-in-out absolute top-0 mt-2 left-0 ml-3"
          )}
        >
          <Icons.arrowCircle className="md:min-w-8" />
        </Stack>
        <Accordion type="single" collapsible>
          {links
            .filter((v) => v.enabled)
            .map((link, index) => (
              <React.Fragment key={`dashboard-link-${index}`}>
                {isCollapsed ? (
                  <Link
                    href={link.href || "/dashboard"}
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathname ? "default" : "ghost",
                      }),
                      "flex py-0 h-12 w-12",
                      link.href &&
                        LevelMenu &&
                        LevelMenu?.length <= 2 &&
                        link.href
                        ? pathname === link.href && "bg-accent/80"
                        : LevelMenu && link.href?.includes(LevelMenu[1])
                          ? "bg-accent/80"
                          : "bg-transparent",
                      link?.hideDesktop && "md:hidden"
                    )}
                    onClick={() => {
                      isMobile && setIsOpen(false);
                    }}
                  >
                    <Image
                      src={link.icon}
                      alt="Icon"
                      className="w-6 h-6 min-w-6"
                      width={32}
                      height={32}
                    />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                ) : (
                  <AccordionItem value={link.title} className="border-none">
                    <Stack
                      {...(link.children
                        ? {
                            component: AccordionTrigger,
                          }
                        : {
                            component: Link,
                            href: link.href,
                            onClick: () => {
                              isMobile && setIsOpen(false);
                            },
                          })}
                      direction="row"
                      className={cn(
                        link.href &&
                          buttonVariants({
                            variant: pathname?.includes(link.href)
                              ? "secondary"
                              : "ghost",
                          }),
                        "bg-transparent",

                        link.href &&
                          LevelMenu &&
                          LevelMenu?.length <= 2 &&
                          link.href
                          ? pathname === link.href && "bg-accent/80"
                          : LevelMenu && link.href?.includes(LevelMenu[1])
                            ? "bg-accent/80"
                            : "bg-transparent",

                        link.children && "hover:no-underline",
                        "w-full justify-between text-foreground h-12 px-2 hover:text-foreground",
                        link?.hideDesktop && "md:hidden"
                      )}
                    >
                      <Stack direction="row" align="center" spacing="2xs">
                        <Image
                          src={link.icon}
                          alt="Icon"
                          className="w-6 h-6 min-w-6"
                          width={32}
                          height={32}
                        />
                        {link.title}

                        {link.label && (
                          <span className={cn("text-background ml-auto")}>
                            {link.label}
                          </span>
                        )}
                      </Stack>
                    </Stack>

                    {link.children && (
                      <Stack className="pb-0">
                        {link.children?.map((child, index) => (
                          <Link
                            key={index}
                            href={child.href}
                            className={cn(
                              buttonVariants({
                                variant: "ghost",
                              }),
                              typographyVariants({
                                variant: "overline",
                              }),
                              "justify-start h-9 hover:underline pl-10 hover:bg-accent/30",
                              pathname?.includes(child.href)
                                ? "text-accent-foreground"
                                : "text-muted-foreground hover:text-muted-foreground"
                            )}
                            onClick={() => {
                              isMobile && setIsOpen(false);
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </Stack>
                    )}
                  </AccordionItem>
                )}
              </React.Fragment>
            ))}
        </Accordion>
      </Stack>
      <Stack
        className={cn(
          "transition-all duration-300 ease-in-out",
          isCollapsed ? "pl-[52px]" : "pl-[236px]"
        )}
      >
        {children}
      </Stack>
    </Stack>
  );
}
