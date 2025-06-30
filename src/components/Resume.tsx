
import { Briefcase, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const workExperience = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Led the development of the company's flagship web application. Implemented responsive design principles and improved site performance by 40%.",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Creations",
      period: "2018 - 2021",
      description: "Developed and maintained websites for various clients. Collaborated with designers to implement visual elements and create seamless user experiences.",
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "WebSphere Agency",
      period: "2016 - 2018",
      description: "Assisted senior developers in building responsive websites and handled bug fixes and feature implementations.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in web technologies and user interface design. Completed thesis on optimizing web application performance.",
    },
    {
      id: 2,
      degree: "Bachelor's in Information Technology",
      institution: "State College",
      period: "2010 - 2014",
      description: "Graduated with honors. Coursework included programming, database management, and web development.",
    },
  ];

  return (
    <section id="resume" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Resume</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          
          {/* Resume Builder Project Showcase */}
          <div className="mt-8 mb-8 max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/50d2b9db-681f-4055-bbd8-752e599623e8.png" 
                alt="Resume Builder Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Resume Builder Project</h3>
                <p className="text-gray-600 text-sm">
                  An AI-powered resume builder that helps create professional resumes with smart suggestions and templates.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-gray-200 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                    <div className="flex flex-wrap justify-between mb-2">
                      <span className="text-primary font-medium">{job.company}</span>
                      <span className="text-gray-500 text-sm">{job.period}</span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="relative pl-8 border-l-2 border-gray-200 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <div className="flex flex-wrap justify-between mb-2">
                      <span className="text-primary font-medium">{item.institution}</span>
                      <span className="text-gray-500 text-sm">{item.period}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {/* Resume Download */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Download Resume</h3>
          </div>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            For a complete overview of my skills, experience, and education, 
            you can download my full resume below.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
