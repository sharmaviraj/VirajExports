import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const handleScrollTo = (sectionId: string) => (e?: React.MouseEvent) => {
    if (location.pathname === "/") {
      if (e) e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91 9301129199</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>sharmaviraj3543@gmail.com</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-2 h-2 bg-success rounded-full"></span>
            Global Sourcing Solutions
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-foreground">Viraj</span>{" "}
                <span className="text-gradient">Exports</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/#about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link
                to="/#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={handleScrollTo("services")}
              >
                Services
              </Link>
              <Link to="/#affiliations" className="text-foreground hover:text-primary transition-colors">
                Affiliations
              </Link>
              <Link to="/contact">
                <Button variant="default" className="hover-glow">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
                <Link
                  to="/"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/#about"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/#services"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    handleScrollTo("services")(e);
                    toggleMenu();
                  }}
                >
                  Services
                </Link>
                <Link
                  to="/#affiliations"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Affiliations
                </Link>
                <div className="px-3 py-2">
                  <Link to="/contact" onClick={toggleMenu}>
                    <Button variant="default" className="w-full hover-glow">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;