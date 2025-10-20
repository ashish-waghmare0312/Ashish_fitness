import React, { useState, useEffect } from "react";
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#hero" aria-label="Ashish Waghmare home" onClick={closeMobile}>
            <span>ashish waghmare</span>
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
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[45] md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[60] md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4 border-b border-neutral-200">
            <button
              type="button"
              onClick={closeMobile}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-heading" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a 
                    className="block px-4 py-3 rounded-lg text-heading font-semibold hover:bg-lime-50 transition-colors"
                    href={n.href} 
                    onClick={closeMobile}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-neutral-200">
            <a 
              className="block w-full px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-500 text-heading font-bold text-center transition-colors"
              href="#contact" 
              onClick={closeMobile}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
