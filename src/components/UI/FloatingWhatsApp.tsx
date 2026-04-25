"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511943860734"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366]/70 backdrop-blur-sm border border-white/30 rounded-full hover:bg-[#25D366] hover:scale-110 transition-all shadow-lg hover:shadow-xl"
      aria-label="Contato via WhatsApp"
    >
      <img
        src="/logos/whatsapp.png"
        alt="WhatsApp"
        className="w-6 h-6 invert"
      />
    </a>
  );
}
