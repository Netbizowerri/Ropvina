import { motion } from 'motion/react';
import type { ServiceItem } from '@/constants';
import { GRADIENT_TEXT } from '@/constants';

interface ServicesGridProps {
  services: ServiceItem[];
}

function highlightTitle(title: string) {
  const parts = title.split(' & ');
  if (parts.length > 1) {
    return (
      <>
        {parts[0]} &{' '}
        <span className={GRADIENT_TEXT}>
          {parts[1]}
        </span>
      </>
    );
  }
  const lastSpace = title.lastIndexOf(' ');
  if (lastSpace === -1) return title;
  return (
    <>
      {title.slice(0, lastSpace)}{' '}
      <span className={GRADIENT_TEXT}>
        {title.slice(lastSpace + 1)}
      </span>
    </>
  );
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section id="services-grid" className="space-y-12 scroll-mt-6">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight">
          Comprehensive <span className={GRADIENT_TEXT}>Corporate Services</span>
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
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-brand-red py-0.5 px-2.5 bg-slate-950/90 border border-brand-red/30 rounded-full backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute -bottom-5 left-6 p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-brand-red shadow-lg z-10">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="p-6 pt-9 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-5">
                  <h3 className="font-display font-semibold text-xl text-slate-100">
                    {highlightTitle(service.title)}
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
  );
}
