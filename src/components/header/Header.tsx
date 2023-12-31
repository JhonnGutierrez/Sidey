"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-20">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mr-2">
              <NavigationMenuLink href="/">
                <Image
                  src="/sidey.svg"
                  alt="Sidey logo"
                  width={34}
                  height={34}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Feed
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Community Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>Avocado</NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
