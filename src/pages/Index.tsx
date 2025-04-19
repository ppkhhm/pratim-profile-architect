
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronUp, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionContainer from "@/components/SectionContainer";
import Avatar from "@/components/Avatar";
import ContactForm from "@/components/ContactForm";
import SkillCategory from "@/components/SkillCategory";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Programming skills
  const programmingSkills = [
    "Java",
    "Python",
    "SQL",
    "C",
    "Object-Oriented Programming (OOP)",
    "Flask"
  ];

  // Data & Analytics skills
  const dataAnalyticsSkills = [
    "MySQL",
    "DBMS",
    "Data Analysis",
    "Data Modeling",
    "Statistical Analysis",
    "Data Management",
    "Data Science",
    "Data Processing",
    "Data Visualization",
    "Big Data"
  ];

  // ML & AI skills
  const mlAiSkills = [
    "Machine Learning",
    "NLP",
    "Scikit-Learn",
    "Mathematical Modeling",
    "Deep Learning",
    "Artificial Intelligence"
  ];

  // Tools & Libraries
  const toolsSkills = [
    "Microsoft Power BI",
    "DAX",
    "Matplotlib",
    "NumPy",
    "pandas",
    "Microsoft Excel",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe Audition"
  ];

  // Soft skills
  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Photography",
    "Videography",
    "Analytical Skills",
    "Financial Markets"
  ];

  const certifications = [
    {
      title: "ML Summer School 2024",
      issuer: "Amazon",
      date: "Jul 2024",
      link: "https://drive.google.com/file/d/1GAPnrMUqEVJDPaCbar6DtGoeMRpVUDQW/view"
    },
    {
      title: "Google Advanced Data Analytics",
      issuer: "Google",
      date: "Aug 2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9ENXEKQLWF7U"
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "Jul 2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NRUDF4FY2SSL"
    },
    {
      title: "Applied Data Science with Python - Level 2",
      issuer: "IBM",
      date: "Jun 2023",
      link: "https://www.credly.com/badges/21e82e1d-1344-4bda-bb1e-0a8525aa8d1d/linked_in_profile"
    },
    {
      title: "Big Data Foundations - Level 2",
      issuer: "IBM",
      date: "Jun 2023",
      link: "https://www.credly.com/badges/a583e16f-aa0b-481d-85c1-95d1910338e5/linked_in_profile"
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM",
      date: "Jun 2023",
      link: "https://www.credly.com/badges/a3159a9f-d5d2-461f-9f8c-84b7751a8476/linked_in_profile"
    },
    {
      title: "Edunet-Data Analytics",
      issuer: "IBM",
      date: "Jun 2023"
    },
    {
      title: "Financial Markets (with Honors)",
      issuer: "Yale University",
      date: "Mar 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/VHFH9W35SFYR"
    },
    {
      title: "Artificial Intelligence and the Future of Work",
      issuer: "Udemy",
      date: "Sep 2022",
      link: "ude.my/UC-c52b0202-d40d-46d3-9417-3061c2f91d7c"
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "Sep 2022",
      link: "https://coursera.org/verify/Z2LC63R5L2NX"
    },
    {
      title: "SQL Course 2022",
      issuer: "Udemy",
      date: "Sep 2022",
      link: "ude.my/UC-1ce0b0ac-e311-4d60-959b-c2039be20253"
    }
  ];

  const projects = [
    {
      title: "Multi-Domain AI-Powered Content Retrieval Platform",
      description: "A personalized, scalable recommendation system supporting 25+ domains with improved accuracy by 15%. Built using Python, TensorFlow, BERT, LSTM, and FAISS for efficient content retrieval across multiple domains.",
      skills: ["Python", "TensorFlow", "BERT", "NLP", "Machine Learning", "Deep Learning", "Flask"],
      link: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&h=200&auto=format&fit=crop"
    },
    {
      title: "Fraud Detection Model",
      description: "Developed a robust machine learning model for detecting fraudulent financial transactions using Python, Scikit-learn, and comprehensive data analysis techniques.",
      skills: ["Machine Learning", "Python", "Data Analysis", "Scikit-learn"],
      link: "#",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&h=200&auto=format&fit=crop"
    },
    {
      title: "Bengali Cloud Kitchen Data Analysis",
      description: "Comprehensive data analysis project for a Bengali cloud kitchen using SQL, Power BI, and DAX expressions to optimize operations and drive data-driven decisions.",
      skills: ["SQL", "Power BI", "DAX", "Data Analysis"],
      link: "https://github.com/rik511/Bengali-Cloud-Kitchen-Data-Analysis",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&h=200&auto=format&fit=crop"
    },
    {
      title: "Spam Email Detection",
      description: "Developed an ML-powered spam detection system using NLP and Flask, implementing a Passive Aggressive Classifier for real-time email classification.",
      skills: ["Python", "Flask", "Machine Learning", "NLP"],
      link: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=300&h=200&auto=format&fit=crop"
    },
    {
      title: "Superstore Data Analysis",
      description: "Comprehensive analysis of Superstore data using Python, pandas, and visualization libraries to derive actionable business insights.",
      skills: ["Python", "Data Analysis", "pandas", "Matplotlib"],
      link: "https://github.com/rik511/Case-study-Analysis-of-superstore",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section with Background Pattern */}
      <SectionContainer className="py-28 bg-dots-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <Avatar src="https://github.com/shadcn.png" className="w-32 h-32 mb-6" />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in">
              PRATIM HAIT
              <span className="text-primary ml-2 text-2xl">(He/Him)</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in">
              Computer Science Engineering Student
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Passionate about machine learning, data analysis, and solving complex problems with technology
            </p>
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start animate-in">
              <Button asChild variant="outline" className="gap-2">
                <a href="https://github.com/rik511" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://www.linkedin.com/in/pratim-hait-7969401a0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="mailto:rikhait511@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="default" className="gap-2">
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Howrah, West Bengal, India</span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* About Section */}
      <SectionContainer className="bg-gradient-subtle py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop" 
                alt="Coding" 
                className="rounded-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a fourth-year engineering student pursuing a Bachelor of Technology in Computer Science,
              I possess a profound interest in machine learning, data analysis, and data structures and algorithms.
              My robust problem-solving skills are complemented by a deep understanding of statistical analysis
              and data visualization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am unwavering in my commitment to upholding ethical and professional
              standards while continually enhancing my knowledge through online courses and industry conferences.
              In the dynamic realm of computer science, I aspire to pioneer innovative solutions and maintain
              exemplary quality standards.
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild className="gap-2">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="#contact">
                  <FileText className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer id="projects" className="py-24" pattern>
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card className="project-card h-full flex flex-col" key={project.title}>
              {project.image && (
                <div className="mb-4 rounded-md overflow-hidden h-40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
                {project.skills.length > 3 && (
                  <span className="skill-tag">+{project.skills.length - 3}</span>
                )}
              </div>
              {project.link && project.link !== "#" && (
                <Button 
                  asChild
                  variant="outline"
                  className="mt-auto w-full"
                >
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Skills Section */}
      <SectionContainer className="bg-gradient-subtle py-24">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <SkillCategory title="Programming" skills={programmingSkills} />
          <SkillCategory title="Data & Analytics" skills={dataAnalyticsSkills} />
          <SkillCategory title="Machine Learning & AI" skills={mlAiSkills} />
          <SkillCategory title="Tools & Libraries" skills={toolsSkills} type="tools" />
          <div className="md:col-span-2">
            <SkillCategory title="Soft Skills" skills={softSkills} type="soft" />
          </div>
        </div>
      </SectionContainer>

      {/* Certifications Section */}
      <SectionContainer className="py-24" pattern>
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={cert.title + index} className="cert-card">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <div className="bg-primary/20 text-primary text-xs rounded-full px-2 py-0.5">
                  {cert.date}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="mt-auto pt-4">
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer id="contact" className="bg-dots-pattern relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="section-title inline-block">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5" />
                  <a href="mailto:rikhait511@gmail.com" className="hover:text-primary transition-colors">rikhait511@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-primary w-5 h-5" />
                  <a href="https://www.linkedin.com/in/pratim-hait-7969401a0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-primary w-5 h-5" />
                  <a href="https://github.com/rik511" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary w-5 h-5" />
                  <span>Howrah, West Bengal, India</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-medium mb-2">Availability</h4>
                <p className="text-muted-foreground">Open to job opportunities and collaborations</p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-muted-foreground">
            © 2024 Pratim Hait. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/rik511" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pratim-hait-7969401a0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:rikhait511@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
