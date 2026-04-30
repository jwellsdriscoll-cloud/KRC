import React from 'react';

interface HeroSectionProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

/**
 * Full-viewport hero image with red bars pinned to the top and bottom edges.
 * Drop any overlay content in as children.
 */
export function HeroSection({ src, alt, children }: HeroSectionProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="krc-red-bar absolute top-0 left-0 right-0 z-10" />
      <div className="krc-red-bar absolute bottom-0 left-0 right-0 z-10" />
      <img
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
      />
      {children}
    </div>
  );
}
