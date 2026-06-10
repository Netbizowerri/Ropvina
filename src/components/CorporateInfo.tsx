import { useState } from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';
import { COMPANY } from '@/constants';

export default function CorporateInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section className="border-t border-slate-800/60 pt-12 text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl md:text-2xl font-mono text-slate-100 leading-relaxed">
        <div className="space-y-3">
          <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5">
            <Phone className="h-5 w-5 text-brand-red shrink-0" />
            Direct Lines
          </h5>
          <div
            onClick={() => handleCopyText(COMPANY.phone, 'phone')}
            className="hover:text-slate-350 cursor-pointer transition-colors"
            title="Click to copy phone"
          >
            {COMPANY.phone}
            {copied === 'phone' && <span className="text-xs text-emerald-400 ml-2">(Copied)</span>}
          </div>
          <div
            onClick={() => handleCopyText(COMPANY.email, 'email')}
            className="hover:text-slate-350 cursor-pointer transition-colors"
            title="Click to copy email"
          >
            {COMPANY.email}
            {copied === 'email' && <span className="text-xs text-emerald-400 ml-2">(Copied)</span>}
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5">
            <MapPin className="h-5 w-5 text-brand-red shrink-0" />
            Corporate Address
          </h5>
          <p className="text-xl md:text-2xl">
            {COMPANY.address}<br />
            Lagos Port Terminal • Abuja Liaison Office
          </p>
        </div>

        <div className="space-y-3">
          <h5 className="font-display font-bold uppercase text-xl md:text-2xl text-slate-100 tracking-widest flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-brand-red shrink-0" />
            Incorporate Accreditation
          </h5>
          <p className="font-sans text-xl md:text-2xl">
            Corporate Affairs Commission Registered (Nigeria)<br />
            Registration Number: <strong className="font-mono text-emerald-400">{COMPANY.rcNumber}</strong><br />
            Standard Heavy Civil Road Construction & Procurement Mandate
          </p>
        </div>
      </div>
    </section>
  );
}
