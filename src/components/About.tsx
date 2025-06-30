import React from "react";
import { Mail, Phone, MapPin, Code, Target, Heart, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="text-muted-foreground mt-4 text-center max-w-xl">
            Passionate IT student with a drive for innovation and continuous learning
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Who I Am</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Final year Information Technology student with a keen interest in building practical software solutions. 
                  I possess a solid foundation in programming, logical thinking, and software development principles.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Adaptable to new environments and motivated to contribute to team success. I'm seeking opportunities 
                  to apply and expand my skills in a challenging and growth-oriented environment, while making a 
                  positive impact through dedication, creativity, and continuous improvement.
                </p>
              </div>

              {/* Goals & Interests */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">My Goals</h4>
                    <p className="text-sm text-muted-foreground">Building innovative solutions that solve real-world problems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent rounded-lg flex-shrink-0 mt-1">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Passion</h4>
                    <p className="text-sm text-muted-foreground">Web development, AI, and creating user-friendly applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact info card */}
            <div className="flex justify-center md:flex md:justify-center">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 max-w-md w-full">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">Get In Touch</h4>
                  <p className="text-muted-foreground text-sm">Feel free to reach out for collaborations or opportunities</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">Email</p>
                      <p className="text-sm text-muted-foreground truncate">dineshmkcekrr@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-card-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 9344799465</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-card-foreground">GitHub</p>
                      <a href="https://github.com/Dineshkumar245" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Dineshkumar245</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-card-foreground">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/dineshkumar-k-8a248825a" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Dineshkumar K</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
