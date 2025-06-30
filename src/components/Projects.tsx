import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const Projects = () => {
  // Categories for filtering projects
  const categories = ["All", "Web Development", "Machine Learning", "AI"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Project data with the four specific projects
  const projectsData = [
    {
      id: 1,
      title: "E-Ration Web Application",
      category: "Web Development",
      image: "/lovable-uploads/d690f72a-c6e1-4dac-8a7b-b04477355de6.png",
      description: "A digital ration management system ensuring transparent, fraud-free distribution with real-time tracking and user-friendly access for all stakeholders.",
      link: "https://github.com/Dineshkumar245/E-Ration-Web-Application",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      id: 2,
      title: "Brain Stroke Prediction",
      category: "Machine Learning",
      image: "/lovable-uploads/47d10e0c-5c31-4d5a-899d-2b4d3ab24d2d.png",
      description: "A stroke prediction system using machine learning and a responsive web interface to identify high-risk individuals through user health and lifestyle inputs.",
      link: "https://github.com/Dineshkumar245/Brain_Stroke_Prediction",
      tech: ["HTML", "CSS", "JavaScript", "Python", "ANN", "Naive Bayes", "Decision Tree"]
    },
    {
      id: 3,
      title: "AI Resume Builder Chatbot",
      category: "AI",
      image: "/lovable-uploads/8673eb65-5ce8-4b27-94bd-d4534747ba71.png",
      description: "A smart resume builder that extracts user data, analyzes content, and generates optimized, professional resumes through an interactive and user-friendly interface.",
      link: "https://github.com/Dineshkumar245/AI_Resume_Builder_Chatbot",
      tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL"]
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-accent/30 dark:from-background dark:to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            Here are some of the projects I've worked on, showcasing my skills in web development, machine learning, and AI.
          </p>
        </div>
        
        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary shadow-lg transform scale-105" 
                  : "border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Project cards - 3 in a row with bigger size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 shadow-sm border border-border bg-card hover:shadow-lg hover:border-primary/50">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">{project.title}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium whitespace-nowrap ml-3">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm bg-secondary px-2 py-1 rounded text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:underline transition-all duration-300 hover:gap-2 text-sm"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
