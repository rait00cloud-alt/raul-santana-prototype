import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/Contato/FormContact";
import { Instagram } from "lucide-react";

const FooterComponent = () => {
  const { t } = useTranslation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <footer className="relative w-full bg-[#131313] text-white flex flex-col items-center z-[9999]">

      

        {/* Divider */}
        <div className="w-full border-t border-white/10 justify-center items-center" />

        {/* Bottom Section */}
        <div className="w-full max-w-6xl px-4 py-2 flex flex-col items-center  gap-2">
        <div className="w-full justify-between items-center flex flex-row px-8">
            <p className="text-md tracking-tight font-[BasicCommercialBold]">
            © {new Date().getFullYear()} 
          </p>
          <p className="text-md  font-[BasicCommercialBold] uppercase">
            Raul Santana
          </p>

        
</div>
          <p className="text-sm tracking-tight font-[BasicCommercialBold] uppercase px-8">
            Produced by Industrie Brasil
          </p>
        </div>

      </footer>

      
    </>
  );
};

export default FooterComponent;