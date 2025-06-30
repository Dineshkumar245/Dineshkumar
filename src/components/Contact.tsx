import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a mailto link with the form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open the user's email client
      window.location.href = `mailto:dineshmkcekrr@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Message prepared!",
        description: "Your email client has been opened with the message. Please send it from there.",
      });
      
      // Reset form after small delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      content: "dineshmkcekrr@gmail.com",
      link: "mailto:dineshmkcekrr@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      content: "+91 9344799465",
      link: "tel:+919344799465",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      content: "Karur, Tamil Nadu, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background dark:bg-gradient-to-br dark:from-background dark:to-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Form */}
          <div className="md:col-span-3 bg-card/90 dark:bg-secondary/20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-border dark:border-secondary/30">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="bg-background/60 dark:bg-background/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="bg-background/60 dark:bg-background/40"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-background/60 dark:bg-background/40"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-background/60 dark:bg-background/40"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-card/90 dark:bg-secondary/20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-border dark:border-secondary/30">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Contact Info</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-card-foreground font-medium">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:underline break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground break-words">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/70 dark:bg-accent/20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-border dark:border-accent/30">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Social Profiles</h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/Dineshkumar245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/30 dark:bg-secondary/50 hover:bg-secondary/50 dark:hover:bg-secondary/70 p-3 rounded-full text-secondary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/dineshkumar-k-8a248825a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/30 dark:bg-secondary/50 hover:bg-secondary/50 dark:hover:bg-secondary/70 p-3 rounded-full text-secondary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
