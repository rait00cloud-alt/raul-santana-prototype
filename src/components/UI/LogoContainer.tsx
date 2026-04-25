import React from 'react';

const LogoContainer: React.FC = () => {
  // Array of logo filenames
  const logos = [
    { src: '/logos/Autoliv.png', alt: 'Autoliv' },
    { src: '/logos/Cummins-Preto.png', alt: 'Cummins' },
    { src: '/logos/Honda.png', alt: 'Honda' },
    { src: '/logos/Nissan_2020_logo.png', alt: 'Nissan' },
    { src: '/logos/Scania.png', alt: 'Scania' },
  ];

  return (
    <div className="py-8 bg-[#f5f5f5] overflow-hidden">
        
      <div className="relative flex animate-logo-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className="flex items-center justify-center px-8 flex-shrink-0">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoContainer;