import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Stack,
  typographyVariants,
  buttonVariants
} from "../..";
import { cn } from "@/src/lib/utils";

interface NavDashboardProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: string;
    href?: string;
    enabled: boolean;
    children?: {
      title: string;
      href: string;
    }[];
    hideDesktop?: boolean;
  }[];
  setIsOpen?: any;
  isMobile?: boolean;
}

export const NavDashboard: React.FC<NavDashboardProps> = ({
  isCollapsed,
  links,
  setIsOpen,
  isMobile,
}) => {
  const pathname = usePathname();
  // TODO: Create compound component for this
  const LevelMenu = pathname?.split("/").slice(1);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 "
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <Accordion type="single" collapsible>
          {links.map(
            (link, index) =>
              link.enabled && (
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
                        link?.hideDesktop && "md:hidden",
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
                          link?.hideDesktop && "md:hidden",
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
                        <Stack component={AccordionContent} className="pb-0">
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
                                  : "text-muted-foreground hover:text-muted-foreground",
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
              ),
          )}
        </Accordion>
      </nav>
    </div>
  );
};
