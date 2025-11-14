import React, { useState } from 'react';

const filmProjects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A thrilling chase through urban landscapes.",
    videoUrl: "https://www.youtube.com/embed/Scxs7L0hZFU", // Placeholder video
  },
];

const photoProjects = [
  { id: 1, src: "https://picsum.photos/seed/p1/800/600", alt: "Fashion Shoot" },
  { id: 2, src: "https://picsum.photos/seed/p2/600/800", alt: "Urban Exploration" },
  { id: 3, src: "https://picsum.photos/seed/p3/800/800", alt: "Product Photography" },
  // FIX: Added missing opening quote to the URL string.
  { id: 4, src: "https://picsum.photos/seed/p4/800/600", alt: "Nature Landscape" },
  { id: 5, src: "https://picsum.photos/seed/p5/600/800", alt: "Portrait" },
  { id: 6, src: "https://picsum.photos/seed/p6/800/600", alt: "Architectural Detail" },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('films');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const TabButton: React.FC<{ tabName: string; label: string }> = ({ tabName, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-6 py-2 text-lg font-semibold transition-all duration-300 relative ${activeTab === tabName ? 'text-white' : 'text-gray-500 hover:text-white'}`}
    >
      {label}
      {activeTab === tabName && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[#D4AF37]"></span>
      )}
    </button>
  );

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif-display font-semibold mb-12 text-center">Our Work</h2>
        <div className="flex justify-center mb-12 border-b border-gray-800">
          <TabButton tabName="films" label="Films" />
          <TabButton tabName="photos" label="Photography" />
        </div>

        <div>
          {activeTab === 'films' && (
            <div className="animate-fadeIn">
              {filmProjects.map((project) => (
                <div key={project.id} className="w-full max-w-4xl mx-auto">
                    <div className="aspect-w-16 aspect-h-9 bg-black">
                        <iframe 
                            src={project.videoUrl} 
                            title={project.title} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-serif-display">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 animate-fadeIn">
              {photoProjects.map((photo) => (
                <div key={photo.id} className="relative group overflow-hidden cursor-pointer" onClick={() => setModalImage(photo.src)}>
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {modalImage && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fadeIn"
            onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Enlarged view" className="max-w-[90vw] max-h-[90vh] object-contain" />
          <button className="absolute top-5 right-5 text-white text-4xl">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;