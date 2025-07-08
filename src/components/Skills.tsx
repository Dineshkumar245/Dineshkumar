import { Code, Database, Palette, Users, Lightbulb, MessageCircle, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML/CSS", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "Java", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "MySQL", icon: Database }
  ];
  
  const softSkills = [
    { name: "Communication", icon: MessageCircle },
    { name: "Teamwork", icon: Users },
    { name: "Adaptability", icon: Zap },
    { name: "Creativity", icon: Lightbulb },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-accent/30 dark:from-background dark:to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:flex-1 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2 justify-center lg:justify-start">
              <Code className="h-6 w-6 text-primary" /> Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:flex-1 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2 justify-center lg:justify-start">
              <Users className="h-6 w-6 text-primary" /> Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
