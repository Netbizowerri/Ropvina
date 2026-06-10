import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import BrandShowcase from './pages/BrandShowcase';
import RopvinaLogo from './components/RopvinaLogo';
import { COMPANY } from '@/constants';

export default function App() {
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleMobileContactClick = useCallback(() => {
    setMobileContactOpen(false);
    scrollToContact();
  }, [scrollToContact]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-100 flex flex-col font-sans selection:bg-brand-red/30 selection:text-brand-red">

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[150px] opacity-70" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[180px] opacity-60" />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-[140px] opacity-50" />
      </div>

      <header className="relative z-20 border-b border-slate-800/50 bg-[#0A0F1E]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <RopvinaLogo />
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 hover:text-brand-red transition duration-200"
          >
            <Phone className="h-4 w-4 text-brand-red" />
            <span>{COMPANY.phone}</span>
          </a>
          <a
            href="#contact-form-section"
            className="flex items-center gap-2 hover:text-brand-red transition duration-200"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
          >
            <Mail className="h-4 w-4 text-brand-red" />
            <span>{COMPANY.email}</span>
          </a>
        </div>

        <button
          onClick={() => setMobileContactOpen((prev) => !prev)}
          className="md:hidden p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-750 text-brand-red cursor-pointer"
        >
          {mobileContactOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </header>

      <AnimatePresence>
        {mobileContactOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden w-full border-b border-slate-800/80 bg-[#0A0F1E] relative z-25 flex flex-col p-5 space-y-3.5 text-xs font-mono"
          >
            <div className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Direct Corporate Lines</div>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-slate-350 hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-red shrink-0" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href="#contact-form-section"
              className="flex items-center gap-3 text-slate-350 hover:text-white"
              onClick={handleMobileContactClick}
            >
              <Mail className="h-4 w-4 text-brand-red shrink-0" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="flex items-start gap-3 text-slate-400">
              <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
              <span>{COMPANY.locations}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full overflow-x-hidden relative z-10">
        <BrandShowcase />
      </main>

      <footer className="relative z-10 border-t border-slate-900/60 bg-[#070b16] py-6 px-6 text-center text-xs text-slate-550 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>{COMPANY.rcNumber} • Strategic Development & Trust Logistics</p>
        </div>
      </footer>
    </div>
  );
}