import { ArrowUp, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-background dark:to-secondary/30 text-white dark:text-foreground py-12 border-t border-gray-800 dark:border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-white dark:text-primary">Dineshkumar K</h3>
            <p className="text-gray-300 dark:text-muted-foreground max-w-md">
              Student with passion for designing and developing interactive, efficient, and scalable applications.
            </p>
            
            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/Dineshkumar245" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white dark:text-primary hover:text-gray-300 dark:hover:text-primary/80"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dineshkumar-k-8a248825a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white dark:text-primary hover:text-gray-300 dark:hover:text-primary/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dineshkumar K. All rights reserved.
          </p>
          
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
