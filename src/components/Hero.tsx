
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6 animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              <span className="block animate-slideUp">Hi, I'm</span>
              <span className="block text-primary mt-2 animate-slideUp" style={{animationDelay: '0.2s'}}>Dineshkumar K</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-slideUp" style={{animationDelay: '0.4s'}}>
              Information Technology Student
            </h2>
            
            <p className="text-muted-foreground max-w-lg animate-slideUp" style={{animationDelay: '0.6s'}}>
              Passionate about creating innovative solutions through code. Specializing in web development, 
              machine learning, and AI applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-slideUp" style={{animationDelay: '0.8s'}}>
            <Button asChild className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="hover:bg-primary/5 transition-all duration-300 hover:border-primary/50">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end animate-fadeIn" style={{animationDelay: '1s'}}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-background hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/ec514c89-7392-440d-8027-d525a4820d72.png" 
                alt="Dineshkumar K" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
