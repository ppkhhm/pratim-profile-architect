
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
            <Card className="project-card">
              <h3 className="text-xl font-semibold mb-3">Multi-Domain AI-Powered Content Retrieval Platform</h3>
              <p className="text-muted-foreground mb-4">
                A personalized, scalable recommendation system supporting 25+ domains with improved accuracy by 15%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">BERT</span>
                <span className="skill-tag">NLP</span>
              </div>
            </Card>

            <Card className="project-card">
              <h3 className="text-xl font-semibold mb-3">Fraud Detection Model</h3>
              <p className="text-muted-foreground mb-4">
                Advanced machine learning model for detecting fraudulent financial transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Analysis</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "Machine Learning",
              "Data Analysis",
              "SQL",
              "Deep Learning",
              "NLP",
              "Power BI",
              "Java",
              "Problem Solving",
              "Big Data",
              "Flask",
              "Scikit-Learn"
            ].map((skill) => (
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
          <h2 className="section-title">Key Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
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
              }
            ].map((cert) => (
              <Card key={cert.title} className="p-6">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary mt-2 hover:underline"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
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
