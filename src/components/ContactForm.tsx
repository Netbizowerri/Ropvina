import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Globe, Send } from 'lucide-react';
import { GRADIENT_TEXT } from '@/constants';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Real Estate & Land Brokerage');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmitContact = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName.trim() || !email.trim()) return;
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormSubmitting(true);

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, phone, service, message }),
        });

        if (!response.ok) throw new Error('Form submission failed');
      }

      setFormSubmitted(true);
      setTimeout(() => {
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFormSubmitted(false);
      }, 4000);
    } catch {
      setFormError('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="contact-form-section" className="space-y-12 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight">
          Elite Corporate <span className={GRADIENT_TEXT}>Governance & Compliance</span>
        </h2>
        <p className="text-slate-100 text-xl md:text-2xl leading-relaxed">
          ROPVINA runs on strict adherence to international standard project metrics. We hold certifications for road pavements and industrial material fabrication under full compliance schemas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-4 text-left">
          <div className="flex gap-4 items-start p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-slate-100">Full Corporate Indemnity</h4>
              <p className="text-slate-100 text-xl md:text-2xl max-w-md">Our heavy logistics and material supply pipelines are fully insured to protect client investments from disruption.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-slate-100">Value Engineering</h4>
              <p className="text-slate-100 text-xl md:text-2xl max-w-md">Our engineers customize infrastructural road-construction models to maximize structural lifespan while cutting budget wastes.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-slate-100">Sovereign Supply Networks</h4>
              <p className="text-slate-100 text-xl md:text-2xl max-w-md">We secure raw quarry ores and premium trade products directly via primary international ports, bypassing local middlemen markup rates.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl backdrop-blur-md space-y-6">
          <div className="space-y-1 text-left">
            <h3 className="font-display font-bold text-xl text-slate-100">
              Initiate <span className={GRADIENT_TEXT}>Corporate Consulting</span>
            </h3>
            <p className="text-slate-100 text-xl md:text-2xl">
              Please submit your project specifications. Our executive directors will trace back in under 12 business hours.
            </p>
          </div>

          <form onSubmit={handleSubmitContact} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider font-mono">Full Representative Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                  placeholder="e.g. Chief Aliko Bello"
                  required
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider font-mono">Corporate Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                  placeholder="e.g. a.bello@bello-energy.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider font-mono">Direct Contact Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                  placeholder="e.g. +234 803 123 4567"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider font-mono">Target Service Segment</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none cursor-pointer"
                >
                  <option>Real Estate & Land Brokerage</option>
                  <option>Road Construction Design</option>
                  <option>General Contracting Operations</option>
                  <option>Building Materials Sales</option>
                  <option>Global Import or Export Charter</option>
                  <option>Housing Estate Joint Venture</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider font-mono">Project Scope Details</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none resize-none"
                placeholder="Describe your site details, trade cargo quantities, or building volumes..."
              />
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center text-xs font-semibold"
              >
                Inquiry Logged! Our Directors will reach back to you in under 12 business hours. Thank you for choosing Ropvina.
              </motion.div>
            ) : (
              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-hover disabled:opacity-50 text-white font-semibold rounded-xl transition duration-300 cursor-pointer disabled:cursor-not-allowed text-sm font-display shadow-md shadow-brand-red/10"
              >
                <Send className="h-4 w-4" />
                {formSubmitting ? 'Sending...' : 'Dispatch Consulting Inquiry'}
              </button>
            )}

            {formError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-xs font-semibold"
              >
                {formError}
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
