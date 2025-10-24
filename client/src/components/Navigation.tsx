import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <span className="text-2xl">🎓</span>
            <span>DEV-KIT</span>
          </a>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/">
            <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
              Home
            </a>
          </Link>
          <Link href="/roadmap">
            <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
              Roadmap
            </a>
          </Link>
          <Link href="/resources">
            <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
              Resources
            </a>
          </Link>
          <Link href="/challenges">
            <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
              Challenges
            </a>
          </Link>
          <Link href="/profile">
            <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
              Profile
            </a>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}

