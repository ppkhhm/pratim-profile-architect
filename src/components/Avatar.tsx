
import React from 'react';
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Avatar = ({ 
  src = "https://github.com/shadcn.png", 
  alt = "Avatar",
  className 
}: AvatarProps) => {
  return (
    <div className={cn("avatar-container", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
