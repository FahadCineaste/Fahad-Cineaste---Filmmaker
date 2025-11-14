
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full h-auto overflow-hidden">
            <img 
              src="https://picsum.photos/seed/studio/800/900" 
              alt="Fadi Films Studio"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif-display font-semibold mb-6 border-l-4 border-[#D4AF37] pl-4">
              Our Vision
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              At Fadi Films, we believe every moment holds a story waiting to be told. Our passion is to capture the essence of these stories, transforming them into timeless cinematic experiences. We blend artistic vision with technical expertise to create visuals that are not only stunning but also deeply resonant.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              From intimate portraits to grand cinematic productions, our commitment is to excellence and authenticity. We collaborate closely with our clients to bring their vision to life, ensuring every frame is crafted with purpose and passion.
            </p>
            <a href="#contact" className="btn-golden inline-block bg-[#D4AF37] text-black font-semibold py-3 px-8 rounded-sm tracking-widest uppercase text-sm">
              Let's Create Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
