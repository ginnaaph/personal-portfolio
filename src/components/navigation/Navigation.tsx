import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../ui/navigation-menu"
import { useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate();

    return (
      <div className="w-full text-md  text-white font-montserrat items-center justify-between py-2 bg-accent-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#home" className="ml-2 text-md uppercase" onClick={() => navigate("/")}> Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#explorations" className="text-md uppercase" onClick={() => navigate("/explorations")}>Explorations</NavigationMenuLink>
            </NavigationMenuItem>
            {import.meta.env.DEV && (
              <NavigationMenuItem>
                <NavigationMenuLink href="#admin" className="text-md uppercase" onClick={() => navigate("/explorations/admin")}>
                  Admin
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              <NavigationMenuLink href="#experiences" className="text-md uppercase " onClick={() => navigate("/experiences")}>Experiences</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className="text-md uppercase" onClick={() => navigate("/contact")}>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    )
}