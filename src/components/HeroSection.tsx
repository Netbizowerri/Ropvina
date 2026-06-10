import { motion } from 'motion/react';
import { ArrowRight, Mail, Award } from 'lucide-react';
import { GRADIENT_TEXT } from '@/constants';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 text-center max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-radial-at-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-xs text-brand-red font-semibold uppercase tracking-wider mx-auto"
        >
          <Award className="h-3.5 w-3.5 text-brand-red animate-pulse" />
          Incorporated Civil & Trade Enterprise • RC 146908
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-100 leading-[1.1] tracking-tight"
        >
          Building Strong Foundations, <br />
          <span className={`text-glow ${GRADIENT_TEXT}`}>
            Pioneering Growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-100 text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto"
        >
          ROPVINA NIGERIA LIMITED is a premier heavy contracting, real estate development,
          and global cargo import-export partner. We design high-value land holdings, install civil roadways,
          and supply industrial building materials that build nations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <button
            onClick={() => {
              document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-red-hover active:scale-95 text-white font-semibold rounded-xl transition duration-353 shadow-lg shadow-brand-red/30 font-display cursor-pointer text-sm"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-850 hover:bg-slate-800 hover:border-slate-700 border border-slate-800 text-slate-200 font-semibold rounded-xl transition duration-300 font-display cursor-pointer hover:text-white text-sm"
          >
            Contact us
            <Mail className="h-4 w-4 text-brand-red" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
