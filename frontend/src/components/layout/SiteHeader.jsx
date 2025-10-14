import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Coaching", href: "#coaching" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export default function SiteHeader() {
  const navigate = useNavigate();
  const onContact = () => {
    // ensure on root then scroll
    navigate("/");
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 75);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border/60">
      <div className="sticky-header">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-emerald-600" />
            <span className="text-sm font-extrabold tracking-wide uppercase">ashish fitness</span>
          </div>
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((n) => (
                  <NavigationMenuItem key={n.href}>
                    <a className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" href={n.href}>{n.label}</a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="btn-transition rounded-full bg-emerald-600 text-white hover:bg-emerald-700" onClick={onContact}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
