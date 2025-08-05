import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I would like to connect with you!";
    window.open(`https://wa.me/917780570781?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] px-4 py-2 rounded-full shadow-xl hover:bg-[#128C7E] transition-all duration-300 flex items-center gap-2 group hover:shadow-2xl"
      aria-label="Contact on WhatsApp"
      style={{ transform: 'translateZ(0)' }}
    >
      <FaWhatsapp size={20} className="text-white filter drop-shadow-md" />
      <span className="text-white text-sm font-medium drop-shadow-md">Message</span>
      <FaArrowRight size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
    </button>
  );
};

export default WhatsAppButton;
