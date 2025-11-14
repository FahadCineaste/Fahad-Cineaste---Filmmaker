
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://picsum.photos/seed/hero/1920/1080"
      >
        {/* Using a placeholder video */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-a-fast-shot-of-a-train-passing-in-the-mountains-4927-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="relative z-20 px-4 text-white animate-fadeIn">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-display font-bold mb-4 text-glow">
          Weaving Stories, Frame by Frame
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-light text-gray-300 mb-8">
          Crafting compelling visual narratives through the art of cinematography and photography.
        </p>
        <a
          href="#portfolio"
          className="btn-golden inline-block bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold py-3 px-8 rounded-sm tracking-widest uppercase text-sm"
        >
          View Our Work
        </a>
      </div>
      <div className="absolute bottom-10 z-20 text-white animate-bounce">
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
