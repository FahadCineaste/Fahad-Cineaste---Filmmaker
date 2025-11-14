
import React from 'react';

const testimonials = [
  {
    quote: "Fadi Films didn't just capture our event; they captured its soul. Their professionalism and artistic eye are unparalleled. The final film exceeded all our expectations.",
    name: "John D.",
    company: "CEO, Innovate Inc.",
  },
  {
    quote: "The team is incredibly talented and a pleasure to work with. They brought a creative energy to our project that was truly inspiring. Highly recommended for any high-stakes production.",
    name: "Sarah L.",
    company: "Marketing Director, Lux Brands",
  },
    {
    quote: "From concept to final cut, the process was seamless. Their attention to detail in the photography was remarkable, resulting in a campaign that elevated our brand.",
    name: "Michael B.",
    company: "Founder, Ember Fashion",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif-display font-semibold mb-16 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#111] p-8 border-t-2 border-[#D4AF37]">
              <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-bold text-white text-xl font-serif-display">{testimonial.name}</p>
                <p className="text-[#D4AF37] text-sm tracking-wide">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
