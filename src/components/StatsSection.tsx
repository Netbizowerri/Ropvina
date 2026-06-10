import { motion } from 'motion/react';
import type { StatItem } from '@/constants';

interface StatsSectionProps {
  metrics: StatItem[];
}

export default function StatsSection({ metrics }: StatsSectionProps) {
  return (
    <section className="bg-slate-900/30 border border-slate-800/40 rounded-3xl p-8 backdrop-blur-md">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((stat) => {
          const IconComp = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left space-y-2 p-1 border-r last:border-0 border-slate-800/40"
            >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
