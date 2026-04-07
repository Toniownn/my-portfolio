import { motion as Motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.webp";

const routes = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <Motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-5xl"
    >
      <div className="glass rounded-2xl px-4 md:px-5 py-2.5 shadow-[0_8px_32px_-12px_oklch(0_0_0/0.25)]">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            aria-label="Go to top"
            className="flex items-center shrink-0 pl-1"
          >
            <img src={logo} alt="Carl Anthony Dayoc logo" className="h-7 w-auto" />
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-1">
              {routes.map((route) => (
                <NavigationMenuItem key={route.label}>
                  <a
                    href={route.href}
                    className="group relative rounded-xl px-3.5 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    <span className="relative z-10">{route.label}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-foreground/0 group-hover:bg-foreground/[0.06] transition-colors" />
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-xl hover:bg-foreground/[0.06]"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <a href="#contact" className="hidden md:inline-flex">
              <button
                type="button"
                className="inline-flex items-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Contact
              </button>
            </a>

            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl text-foreground hover:bg-foreground/[0.06] transition-colors"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-surface border-l border-hairline p-8"
              >
                <nav className="flex flex-col gap-6 mt-12">
                  {routes.map((route) => (
                    <a
                      key={route.label}
                      href={route.href}
                      className="text-lg font-medium text-foreground hover:text-brand transition-colors"
                    >
                      {route.label}
                    </a>
                  ))}
                </nav>

                <a href="#contact" className="block mt-10">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    Contact
                  </button>
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </Motion.header>
  );
}
