import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "../assets/Logo.webp";

const routes = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100/80 dark:bg-gray-800/30 backdrop-blur-md border-b border-gray-300/30 dark:border-gray-700/30 p-3 px-6 md:px-32">
      <div className="mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="ml-2 font-bold text-xl flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-16">
            {routes.map((route) => (
              <NavigationMenuItem key={route.label}>
                <a
                  href={route.href}
                  className="text-lg font-semibold text-sky-custom dark:text-white hover:text-foreground transition"
                >
                  {route.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Contact Me Button */}
          <a href="#contact">
            <Button className="hidden md:inline bg-sky-custom hover:bg-sky-custom/90 text-white">
              Contact Me
            </Button>
          </a>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-6">
                {routes.map((route) => (
                  <a
                    key={route.label}
                    href={route.href}
                    className="text-lg font-semibold text-sky-custom dark:text-white hover:text-foreground transition"
                  >
                    {route.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Contact Me Button */}
              <Button className="mt-6 bg-sky-custom hover:bg-sky-custom/90 text-white w-full">
                Contact Me
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
