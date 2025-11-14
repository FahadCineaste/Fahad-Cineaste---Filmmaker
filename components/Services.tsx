
import React from 'react';

const FilmIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
);
const CameraIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
);
const DroneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"></path><path d="M5.64 5.64l1.41 1.41"></path><path d="M2 12h2"></path><path d="M5.64 18.36l1.41-1.41"></path><path d="M12 22v-2"></path><path d="M18.36 18.36l-1.41-1.41"></path><path d="M22 12h-2"></path><path d="M18.36 5.64l-1.41 1.41"></path><path d="M12 12h.01"></path><path d="M20.99 8.01c.01-.01.01-.01 0 0v0c-2-2.01-5-2-7 0h0c-2.01-2-5-2-7 0h0c-2 2-2 5 0 7h0c2 2 5 2 7 0h0c2 2 5 2 7 0h0c2-2 2-5 0-7h0Z"></path><path d="M12 12h.01"></path></svg>
);
const EditIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
);


const services = [
  {
    icon: <FilmIcon className="w-10 h-10 mb-4 text-[#D4AF37]"/>,
    title: 'Cinematography',
    description: 'High-end cinematic video production for feature films, commercials, and brand stories.',
  },
  {
    icon: <CameraIcon className="w-10 h-10 mb-4 text-[#D4AF37]"/>,
    title: 'Photography',
    description: 'Professional photography services including portraits, product, and event coverage.',
  },
  {
    icon: <EditIcon className="w-10 h-10 mb-4 text-[#D4AF37]"/>,
    title: 'Post-Production',
    description: 'Full suite of post-production services: editing, color grading, sound design, and VFX.',
  },
  {
    icon: <DroneIcon className="w-10 h-10 mb-4 text-[#D4AF37]"/>,
    title: 'Aerial Footage',
    description: 'Breathtaking 4K drone cinematography to give your project a stunning new perspective.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif-display font-semibold mb-4">Our Craft</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          We offer a complete range of production services to bring your ideas to life with cinematic quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] p-8 border border-gray-800/50 group hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3 font-serif-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
