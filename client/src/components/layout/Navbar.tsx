import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/Al-Rayyan_Logo1_1772937656876.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Activities", href: "#activities" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border border-border/50">
              <img src={logoImg} alt="Al Rayyan Academy Logo" className="w-full h-full object-cover" />
            </div>
            <span className={`font-serif text-xl md:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-primary md:text-white drop-shadow-sm'}`}>
              Al Rayyan
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-secondary transition-colors ${
                  isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#programs"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-foreground/80 hover:bg-muted/50 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4 pb-2">
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-secondary text-secondary-foreground py-3 rounded-md font-semibold"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}