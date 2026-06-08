/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Globe, 
  FileText, 
  Milestone, 
  Home, 
  Hammer, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Send
} from 'lucide-react';
export default function BrandShowcase() {
  const [copied, setCopied] = useState<string | null>(null);
  
  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Real Estate Procurement');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      title: 'Real Estate & Land Brokerage',
      desc: 'Sale, purchase, and premium leasing of land, high-rise buildings, and strategic commercial properties across Nigeria.',
      icon: Building2,
      badge: 'Premier Asset Class',
      image: 'https://i.ibb.co/jvGCr2qC/Ropvina-2.jpg',
    },
    {
      title: 'Global Trade & Logistics',
      desc: 'Full-cycle import and export services handling heavy equipment, industrial inventory, and specialized general goods.',
      icon: Globe,
      badge: 'Enterprise Cargo',
      image: 'https://i.ibb.co/Nnssgpnk/Ropvina-1.jpg',
    },
    {
      title: 'General Contracting & Procurement',
      desc: 'Executing specialized corporate procurement tenders, technical consulting, and comprehensive project execution frameworks.',
      icon: FileText,
      badge: 'Government Certified',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Heavy Civil & Road Construction',
      desc: 'Pioneering asphalt paving, bridge frameworks, urban highways, drainage layouts, and heavy engineering infrastructure.',
      icon: Milestone,
      badge: 'Industrial Grade',
      image: 'https://i.ibb.co/x81XQL2C/Ropvina.jpg',
    },
    {
      title: 'Premium Estate Development',
      desc: 'Building secure master-planned residential communities, gated business plazas, and affordable luxury estates.',
      icon: Home,
      badge: 'Eco-Designed',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Building Materials Supply',
      desc: 'Production, quality validation, and supply-chain logistics for blocks, aggregates, cement compounds, and structural steel.',
      icon: Hammer,
      badge: 'Direct Manufacturer',
      image: 'https://i.ibb.co/vC5fP3th/Ropvina-3.jpg',
    },
  ];

  const statMetrics = [
    { label: 'Infrastructure Projects Completed', value: '42+', icon: Milestone },
    { label: 'Acreage Managed & Developed', value: '1,200+', icon: Home },
    { label: 'Global Trade Shipments Cleared', value: '550+', icon: Globe },
    { label: 'Corporate Clients Served', value: '180+', icon: Users },
  ];

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmitContact = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || formSubmitting) return;

    setFormSubmitting(true);

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* SECTION 1: Centered High-End Interactive Hero Banner */}
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
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-amber-500">
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
                const element = document.getElementById('services-grid');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-red-hover active:transform active:scale-95 text-white font-semibold rounded-xl transition duration-353 shadow-lg shadow-brand-red/30 font-display cursor-pointer text-sm"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact-form-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-850 hover:bg-slate-800 hover:border-slate-700 border border-slate-800 text-slate-200 font-semibold rounded-xl transition duration-300 font-display cursor-pointer hover:text-white text-sm"
            >
              Contact us
              <Mail className="h-4 w-4 text-brand-red" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Key Operational Statistics */}
      <section className="bg-slate-900/30 border border-slate-800/40 rounded-3xl p-8 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statMetrics.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <div key={i} className="text-center md:text-left space-y-2 p-1 border-r last:border-0 border-slate-800/40">
                <div className="inline-flex p-2 rounded-xl bg-brand-red/10 text-brand-red mb-1">
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="font-mono text-3xl md:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    {stat.value}
                  </span>
                </h3>
                <p className="text-slate-100 text-xl md:text-2xl uppercase font-mono tracking-wider sm:leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Six Premium Services with modern glassmorphism cards and visuals */}
      <section id="services-grid" className="space-y-12 scroll-mt-6">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-amber-500">Corporate Services</span>
          </h2>
          <p className="text-slate-100 text-xl md:text-2xl leading-relaxed">
            Delivering high-fidelity results backed by rigid quality parameters, certified engineering logistics, 
            and deep-seated regulatory trust throughout West African trade networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Service Image Header */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Badge floating on the upper right corner */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-brand-red py-0.5 px-2.5 bg-slate-950/90 border border-brand-red/30 rounded-full backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Icon Badge overlapping the bottom boundary of the image */}
                  <div className="absolute -bottom-5 left-6 p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-brand-red shadow-lg z-10">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content body (with view specs link fully removed) */}
                <div className="p-6 pt-9 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-xl text-slate-100">
                      {service.title}
                    </h3>
                    <p className="text-slate-100 text-xl md:text-2xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Split Layout - Value Proposition & Credentials & Contact Form */}
      <section id="contact-form-section" className="space-y-12 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Elite Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-amber-500">Governance & Compliance</span>
          </h2>
          <p className="text-slate-100 text-xl md:text-2xl leading-relaxed">
            ROPVINA runs on strict adherence to international standard project metrics. We hold certifications for road pavements and industrial material fabrication under full compliance schemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Premium Credentials & Value Statement */}
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

          {/* Right Side: Elite Consulting Inbound Form */}
          <div className="lg:col-span-6 bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl backdrop-blur-md space-y-6">
          <div className="space-y-1 text-left">
            <h3 className="font-display font-bold text-xl text-slate-100">
              Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-amber-500">Corporate Consulting</span>
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-semibold rounded-xl transition duration-300 cursor-pointer text-sm font-display shadow-md shadow-brand-red/10"
              >
                <Send className="h-4 w-4" />
                Dispatch Consulting Inquiry
              </button>
            )}
          </form>
        </div>
      </div>
    </section>

      {/* Corporate Contact Footer Information Grid */}
      <section className="border-t border-slate-800/60 pt-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl md:text-2xl font-mono text-slate-100 leading-relaxed">
          <div className="space-y-3">
            <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5">
              <Phone className="h-5 w-5 text-brand-red shrink-0" />
              Direct Lines
            </h5>
            <div 
              onClick={() => handleCopyText('+234 803 333 4444', 'phone')}
              className="hover:text-slate-350 cursor-pointer transition-colors"
              title="Click to copy phone"
            >
              +234 803 333 4444
              {copied === 'phone' && <span className="text-xs text-emerald-400 ml-2">(Copied)</span>}
            </div>
            <div 
              onClick={() => handleCopyText('aworopoghni281@gmail.com', 'email')}
              className="hover:text-slate-350 cursor-pointer transition-colors"
              title="Click to copy email"
            >
              aworopoghni281@gmail.com
              {copied === 'email' && <span className="text-xs text-emerald-400 ml-2">(Copied)</span>}
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5">
              <MapPin className="h-5 w-5 text-brand-red shrink-0" />
              Corporate Address
            </h5>
            <p className="text-xl md:text-2xl">
              Suite B12, Trans-Amadi Business Complex,<br />
              Port Harcourt, Rivers State.<br />
              Lagos Port Terminal • Abuja Liaison Office
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5 flex-row">
              <Building2 className="h-4 w-4 text-brand-red shrink-0" />
              Incorporate Accreditation
            </h5>
            <p className="font-sans text-xl md:text-2xl">
              Corporate Affairs Commission Registered (Nigeria)<br />
              Registration Number: <strong className="font-mono text-emerald-400">RC 146908</strong><br />
              Standard Heavy Civil Road Construction & Procurement Mandate
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
