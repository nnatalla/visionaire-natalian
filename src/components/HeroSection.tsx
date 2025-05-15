
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <header className="text-center py-16 px-4">
      <div className="flex justify-center mb-6">
        <img 
          src="/placeholder.svg" 
          alt="Natalia Nitychoruk" 
          className="avatar"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#7F00FF] to-[#00F2FE] bg-clip-text text-transparent">
        Natalia Nitychoruk
      </h1>
      
      <div className="text-xl text-[#FF61A6] font-medium mt-2">
        AI | Automatyzacja | Data Science | Innowacje
      </div>
    </header>
  );
};

export default HeroSection;
