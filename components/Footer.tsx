
import React from 'react';

const InstagramIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const YoutubeIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>);
const VimeoIcon: React.FC<{className?: string}> = ({className}) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42c-1.22-1.8-4.2-2.14-6.32-1.03-2.11 1.1-3.1 3.5-3.1 3.5s-1.39-2.28-3.4-2.28c-2.02 0-3.52 2.1-3.52 4.19 0 2.09 1.5 6.09 4.82 9.08 3.32-2.99 2.82-7.88 2.82-7.88s1.6 4.88 4.3 5.98c2.7 1.1 5.1-1.3 5.9-4.18 1.01-3.47-1.42-7.27-4-8.48z"></path></svg>);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800/50">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-gray-500 mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Fadi Films. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><InstagramIcon className="w-6 h-6"/></a>
          <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><YoutubeIcon className="w-6 h-6"/></a>
          <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><VimeoIcon className="w-6 h-6"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
