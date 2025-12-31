import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

import Button from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type NavItem = {
  label: string
  to: string
  devOnly?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Explorations", to: "/explorations" },
  { label: "Admin", to: "/explorations/admin", devOnly: true },
  { label: "Experiences", to: "/experiences" },
  { label: "About Me", to: "/about-me" },
  { label: "Contact", to: "/contact" },
]

function getVisibleItems() {
  const isDev = import.meta.env.DEV
  return NAV_ITEMS.filter((item) => (item.devOnly ? isDev : true))
}

export const Navigation = () => {
  const location = useLocation()
  const items = getVisibleItems()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-accent-2 text-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-2">
        <Link to="/" className="text-md uppercase  tracking-wide">
         Gina Pham 
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {items.map((item) => {
                const isActive = location.pathname === item.to
                return (
                  <NavigationMenuItem key={item.to}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.to}
                        className={[
                          "px-3 py-2 text-md uppercase transition",
                          "hover:text-white/90",
                          isActive ? "text-white underline underline-offset-8" : "",
                        ].join(" ")}
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
                <Menu className="text-white size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-2">
                {items.map((item) => {
                  const isActive = location.pathname === item.to
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={[
                          "px-3 text-md uppercase transition text-main",
                          "hover:text-accent-2/90  py-2",
                          isActive ? "text-accent-2 bg-accent-2/50 underline underline-offset-8" : "",
                        ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
