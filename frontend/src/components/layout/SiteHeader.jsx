import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import "@/styles/marketing.css";
import { siteContent } from "@/mock/mock";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Coaching", href: "#coaching" },
  { label: "Pillars", href: "#pillars" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#hero" aria-label="Ashish Fitness home">
          <div className="site-header__mark" aria-hidden />
          <span>ashish fitness</span>
        </a>
        <button
          type="button"
          className="site-header__mobile-toggle md:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
        <nav className="site-header__nav">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((n) => (
                <NavigationMenuItem key={n.href}>
                  <a className="site-header__link" href={n.href}>{n.label}</a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="site-header__cta">
          <Button className="btn-transition rounded-full af-btn-primary" asChild>
            <a href={siteContent.brand.calendly} target="_blank" rel="noreferrer">Get In Touch</a>
          </Button>
        </div>
      </div>
      <nav className={`site-header__mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <ul>
          {navItems.map((n) => (
            <li key={n.href}>
              <a className="site-header__mobile-link" href={n.href} onClick={closeMobile}>{n.label}</a>
            </li>
          ))}
          <li>
            <a className="site-header__mobile-cta" href={siteContent.brand.calendly} target="_blank" rel="noreferrer" onClick={closeMobile}>
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
