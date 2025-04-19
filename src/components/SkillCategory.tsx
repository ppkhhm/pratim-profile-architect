
import React from 'react';
import { 
  Code, Database, Brush, Brain, UserCheck, 
  Laptop, Monitor, Wrench, BarChart, Layers 
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  type?: 'technical' | 'tools' | 'soft';
}

const SkillCategory = ({ title, skills, type = 'technical' }: SkillCategoryProps) => {
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case 'programming':
        return <Code className="icon-skill" />;
      case 'data science':
        return <Database className="icon-skill" />;
      case 'design':
        return <Brush className="icon-skill" />;
      case 'machine learning':
        return <Brain className="icon-skill" />;
      case 'soft skills':
        return <UserCheck className="icon-skill" />;
      case 'tools':
        return <Wrench className="icon-skill" />;
      case 'analytics':
        return <BarChart className="icon-skill" />;
      case 'technologies':
        return <Laptop className="icon-skill" />;
      case 'software':
        return <Monitor className="icon-skill" />;
      default:
        return <Layers className="icon-skill" />;
    }
  };

  return (
    <div className="skill-category">
      <h3 className="skill-category-title flex items-center gap-2">
        {getIcon()}
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
