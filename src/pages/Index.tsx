
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const skills = [
    // Technical Skills
    "Java",
    "Python",
    "SQL",
    "MySQL",
    "DBMS",
    "Data Analysis",
    "Problem Solving",
    "Machine Learning",
    "Power BI",
    "DAX",
    "Data Modeling",
    "NLP",
    "Statistical Analysis",
    "Scikit-Learn",
    "Mathematical Modeling",
    "Matplotlib",
    "NumPy",
    "Data Management",
    "Data Science",
    "pandas",
    "Data Processing",
    "Data Visualization",
    "Microsoft Excel",
    "Deep Learning",
    "Big Data",
    "Flask",
    "Computer Science",
    "Artificial Intelligence",
    "C",
    "Financial Markets",
    // Tools
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe Audition",
    // Soft Skills
    "Teamwork",
    "Photography",
    "Videography"
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
      skills: ["Python", "TensorFlow", "BERT", "NLP", "Machine Learning", "Deep Learning"],
      link: "#"
    },
    {
      title: "Fraud Detection Model",
      description: "Developed a robust machine learning model for detecting fraudulent financial transactions using Python, Scikit-learn, and comprehensive data analysis techniques.",
      skills: ["Machine Learning", "Python", "Data Analysis", "Scikit-learn"],
      link: "#"
    },
    {
      title: "Bengali Cloud Kitchen Data Analysis",
      description: "Comprehensive data analysis project for a Bengali cloud kitchen using SQL, Power BI, and DAX expressions to optimize operations and drive data-driven decisions.",
      skills: ["SQL", "Power BI", "DAX", "Data Analysis"],
      link: "https://github.com/rik511/Bengali-Cloud-Kitchen-Data-Analysis"
    },
    {
      title: "Spam Email Detection",
      description: "Developed an ML-powered spam detection system using NLP and Flask, implementing a Passive Aggressive Classifier for real-time email classification.",
      skills: ["Python", "Flask", "Machine Learning", "NLP"],
      link: "#"
    },
    {
      title: "Superstore Data Analysis",
      description: "Comprehensive analysis of Superstore data using Python, pandas, and visualization libraries to derive actionable business insights.",
      skills: ["Python", "Data Analysis", "pandas", "Matplotlib"],
      link: "https://github.com/rik511/Case-study-Analysis-of-superstore"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">
            PRATIM HAIT
            <span className="text-primary ml-2">(He/Him)</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-in">
            Computer Science Engineering Student
          </h2>
          <div className="flex gap-4 mb-8 animate-in">
            <Button asChild variant="outline">
              <a href="https://github.com/rik511" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/pratim-hait-7969401a0/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:rikhait511@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a fourth-year engineering student pursuing a Bachelor of Technology in Computer Science,
            I possess a profound interest in machine learning, data analysis, and data structures and algorithms.
            My robust problem-solving skills are complemented by a deep understanding of statistical analysis
            and data visualization. I am unwavering in my commitment to upholding ethical and professional
            standards while continually enhancing my knowledge through online courses and industry conferences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card className="project-card" key={project.title}>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="skill-tag text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="p-6">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary mt-2 hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <Button asChild size="lg">
            <a href="mailto:rikhait511@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          © 2024 Pratim Hait. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
