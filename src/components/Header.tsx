
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#home", text: "Home", id: "home" },
    { href: "#about", text: "About", id: "about" },
    { href: "#skills", text: "Skills", id: "skills" },
    { href: "#projects", text: "Projects", id: "projects" },
    { href: "#certificates", text: "Certificates", id: "certificates" },
    { href: "#contact", text: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl md:text-2xl text-primary">
            <a href="#home">Dineshkumar K</a>
          </div>
          
          {isMobile ? (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={toggleMobileMenu} 
                className="text-foreground p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <nav>
                <ul className="flex gap-6">
                  {navLinks.map((link) => (
                    <li key={link.href} className="relative">
                      <a 
                        href={link.href} 
                        className={`text-foreground hover:text-primary transition-colors duration-300 ${
                          activeSection === link.id ? "text-primary" : ""
                        }`}
                      >
                        {link.text}
                      </a>
                      {activeSection === link.id && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <ThemeToggle />
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 animate-fade-in">
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href} className="relative">
                    <a 
                      href={link.href} 
                      className={`text-foreground hover:text-primary transition-colors duration-300 block py-2 ${
                        activeSection === link.id ? "text-primary" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                      {activeSection === link.id && (
                        <div className="absolute bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
