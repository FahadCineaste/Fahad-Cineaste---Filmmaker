
import React from 'react';

const MailIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const PhoneIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif-display font-semibold mb-4">Start a Conversation</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
            Have a project in mind? We'd love to hear about it. Let's create something extraordinary together.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3"><MailIcon className="w-6 h-6 text-[#D4AF37]"/></div>
                <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <a href="mailto:hello@fadifilms.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors">hello@fadifilms.com</a>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37]/10 p-3"><PhoneIcon className="w-6 h-6 text-[#D4AF37]"/></div>
                <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-[#D4AF37] transition-colors">(123) 456-7890</a>
                </div>
            </div>
          </div>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-gray-700 focus:border-[#D4AF37] p-3 outline-none transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b-2 border-gray-700 focus:border-[#D4AF37] p-3 outline-none transition-colors" />
            <textarea placeholder="Tell us about your project..." rows={5} className="w-full bg-transparent border-b-2 border-gray-700 focus:border-[#D4AF37] p-3 outline-none transition-colors resize-none"></textarea>
            <button type="submit" className="btn-golden w-full bg-[#D4AF37] text-black font-bold py-3 px-8 tracking-widest uppercase text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
