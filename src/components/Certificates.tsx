import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "February 2025",
      image: "/lovable-uploads/c12761f7-c361-4602-9874-47410dbb5a76.png",
      description: "Foundational understanding of AWS Cloud services and infrastructure"
    },
    {
      id: 2,
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      date: "October 2024",
      score: "73%",
      image: "/lovable-uploads/8e4fa098-08f2-4526-afba-1e6d59f6afc5.png",
      description: "Elite certification in Industry 4.0 concepts and IoT implementation"
    },
    {
      id: 4,
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class (IBM)",
      date: "July 2024",
      image: "/lovable-uploads/24902e6f-0589-41c5-841d-cc4e2d44b0e0.png",
      description: "Database fundamentals and SQL query optimization"
    },
    {
      id: 5,
      title: "PHP & MySQL Development",
      issuer: "Stack Queue",
      date: "February 2024",
      image: "/lovable-uploads/3c8746a7-3d99-49b6-8f96-319e19e08f1a.png",
      description: "Credit-based training in web development technologies"
    },
    {
      id: 6,
      title: "Front End Development - CSS",
      issuer: "Great Learning",
      date: "July 2024",
      image: "/lovable-uploads/bd62c765-d805-48cf-b513-d5688da08e5c.png",
      description: "Advanced CSS techniques and responsive design principles"
    },
    {
      id: 7,
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "December 2024",
      image: "/lovable-uploads/3cf33ab9-9c5e-48ce-9be0-f58113270fdf.png",
      description: "Core JavaScript programming concepts and syntax"
    }
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-accent/30 dark:from-background dark:to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Certificates</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise in various technologies.
          </p>
        </div>
        
        {/* Certificate cards - 3 in a row with bigger size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 shadow-sm border border-border bg-card hover:shadow-lg hover:border-primary/50">
              <div className="aspect-[3/2] w-full overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-tight text-card-foreground line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium text-sm truncate">{cert.issuer}</span>
                    <span className="text-muted-foreground text-sm whitespace-nowrap ml-2">{cert.date}</span>
                  </div>
                  {cert.score && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Score: </span>
                      <span className="font-semibold text-primary">{cert.score}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
