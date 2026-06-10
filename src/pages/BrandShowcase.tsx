import { SERVICES, STAT_METRICS } from '@/constants';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import ContactForm from '@/components/ContactForm';
import CorporateInfo from '@/components/CorporateInfo';

export default function BrandShowcase() {
  return (
    <div className="space-y-20 pb-16">
      <HeroSection />
      <StatsSection metrics={STAT_METRICS} />
      <ServicesGrid services={SERVICES} />
      <ContactForm />
      <CorporateInfo />
    </div>
  );
}
