import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>info@virajexports.com</span>
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#affiliations" className="text-foreground hover:text-primary transition-colors">
                Affiliations
              </a>
              <Button variant="default" className="hover-glow">
                Contact Us
              </Button>
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
                <a
                  href="#home"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a
                  href="#affiliations"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Affiliations
                </a>
                <div className="px-3 py-2">
                  <Button variant="default" className="w-full hover-glow">
                    Contact Us
                  </Button>
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