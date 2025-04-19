
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  pattern?: boolean;
}

const SectionContainer = ({ 
  children, 
  className, 
  id,
  pattern = false 
}: SectionContainerProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 px-4", 
        pattern && "bg-pattern",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
