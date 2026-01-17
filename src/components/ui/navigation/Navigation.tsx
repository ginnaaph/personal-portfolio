import { useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

import Button from "@/components/ui/button"


import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type NavLink = {
  label: string
  to: string
  devOnly?: boolean
}

type NavGroup = {
  label: string
  items: NavLink[]
  activePrefix: string // used to highlight the dropdown trigger
}

const TOP_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
]

const EXPLORATIONS_GROUP: NavGroup = {
  label: "Explorations",
  activePrefix: "/explorations",
  items: [
    { label: "All Explorations", to: "/explorations" },
    { label: "Programming", to: "/explorations/programming" },
    { label: "Baking", to: "/explorations/baking" },
    { label: "Art", to: "/explorations/art" },
    { label: "Admin", to: "/explorations/admin", devOnly: true },
  ],
}

const ABOUT_GROUP: NavGroup = {
  label: "About",
  activePrefix: "/about",
  items: [
    { label: "About Me", to: "/about-me" }, // keep your current route for now
    { label: "Work Experience", to: "/experiences" }, // move later to /about/experience if you want
  ],
}

function isDevOnlyVisible(item: NavLink) {
  const isDev = import.meta.env.DEV
  return item.devOnly ? isDev : true
}

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export const Navigation = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const topLinks = useMemo(() => TOP_LINKS.filter(isDevOnlyVisible), [])
  const explorationItems = useMemo(() => EXPLORATIONS_GROUP.items.filter(isDevOnlyVisible), [])
  const aboutItems = useMemo(() => ABOUT_GROUP.items.filter(isDevOnlyVisible), [])

  const isTopActive = (to: string) => pathname === to
  const isGroupActive = (prefix: string) => pathname === prefix || pathname.startsWith(prefix + "/")

  return (
    <header className="w-full bg-accent-1 text-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2">
        <Link to="/" className="text-md uppercase tracking-wide">
          Gina Pham
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Top links */}
              {topLinks
                .filter((l) => l.label === "Home")
                .map((item) => {
                  const active = isTopActive(item.to)
                  return (
                    <NavigationMenuItem key={item.to}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.to}
                          className={cx(
                            "px-3 py-2 text-sm uppercase transition hover:text-accent/90",
                            active && "font-semibold underline underline-offset-8"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}

              {/* Explorations dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cx(
                    "px-3 py-2 text-sm uppercase transition hover:text-accent/90 bg-transparent",
                    isGroupActive(EXPLORATIONS_GROUP.activePrefix) && "font-semibold underline underline-offset-8"
                  )}
                >
                  {EXPLORATIONS_GROUP.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-2">
                    {explorationItems.map((item) => (
                      <NavigationMenuLink key={item.to} asChild>
                        <Link
                          to={item.to}
                          className={cx(
                            "block rounded-md px-3 py-2 text-sm text-accent-1 transition hover:bg-accent-2/15",
                            pathname === item.to && "bg-accent-2/20 "
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cx(
                    "px-3 py-2 text-sm uppercase transition hover:text-accent90 bg-transparent",
                    isGroupActive(ABOUT_GROUP.activePrefix) || pathname === "/about-me" || pathname === "/experiences"
                      ? "font-semibold underline underline-offset-8"
                      : ""
                  )}
                >
                  {ABOUT_GROUP.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-2">
                    {aboutItems.map((item) => (
                      <NavigationMenuLink key={item.to} asChild>
                        <Link
                          to={item.to}
                          className={cx(
                            "block rounded-md px-3 py-2 text-md text-main transition hover:bg-accent-2/15",
                            pathname === item.to && "bg-accent-2/20"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact (top link) */}
              {topLinks
                .filter((l) => l.label === "Contact")
                .map((item) => {
                  const active = isTopActive(item.to)
                  return (
                    <NavigationMenuItem key={item.to}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.to}
                          className={cx(
                            "px-3 py-2 text-md uppercase transition hover:text-accent90",
                            active && "font-semibold underline underline-offset-8"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                aria-expanded={open}
                className="bg-transparent text-white hover:bg-accent-2/10 hover:text-white transition"
                onClick={() => setOpen(true)}
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-6">
                {/* Home / Contact */}
                <div className="flex flex-col gap-1">
                  {TOP_LINKS.map((item) => {
                    if (!isDevOnlyVisible(item)) return null
                    const active = pathname === item.to
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={cx(
                          "rounded-md px-3 py-2 text-sm uppercase transition text-main hover:bg-accent-2/15",
                          active && "bg-accent-2/20 font-medium"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>

                {/* Explorations group */}
                <div>
                  <div className="px-3 text-xs uppercase tracking-wide text-main/70">Explorations</div>
                  <div className="mt-2 flex flex-col gap-1">
                    {explorationItems.map((item) => {
                      const active = pathname === item.to
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={cx(
                            "rounded-md px-3 py-2 text-sm transition text-main hover:bg-accent-2/15",
                            active && "bg-accent-2/20 font-medium"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* About group */}
                <div>
                  <div className="px-3 text-xs uppercase tracking-wide text-main/70">About</div>
                  <div className="mt-2 flex flex-col gap-1">
                    {aboutItems.map((item) => {
                      const active = pathname === item.to
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={cx(
                            "rounded-md px-3 py-2 text-sm transition text-main hover:bg-accent-2/15",
                            active && "bg-accent-2/20 font-medium"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
