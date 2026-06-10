import {
  Building2, Globe, FileText, Milestone, Home, Hammer, Users,
} from 'lucide-react';
import type { ComponentType } from 'react';

export const COMPANY = {
  name: 'Ropvina Nigeria Limited',
  rcNumber: 'RC 146908',
  phone: '+234 803 333 4444',
  email: 'aworopoghni281@gmail.com',
  address: 'Suite B12, Trans-Amadi Business Complex, Port Harcourt, Rivers State',
  locations: 'Port Harcourt • Abuja • Lagos',
} as const;

export const GRADIENT_TEXT = 'gradient-text';

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  badge: string;
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate & Land Brokerage',
    desc: 'Sale, purchase, and premium leasing of land, high-rise buildings, and strategic commercial properties across Nigeria.',
    icon: Building2,
    badge: 'Premier Asset Class',
    image: 'https://i.ibb.co/jvGCr2qC/Ropvina-2.jpg',
  },
  {
    id: 'global-trade',
    title: 'Global Trade & Logistics',
    desc: 'Full-cycle import and export services handling heavy equipment, industrial inventory, and specialized general goods.',
    icon: Globe,
    badge: 'Enterprise Cargo',
    image: 'https://i.ibb.co/Nnssgpnk/Ropvina-1.jpg',
  },
  {
    id: 'contracting',
    title: 'General Contracting & Procurement',
    desc: 'Executing specialized corporate procurement tenders, technical consulting, and comprehensive project execution frameworks.',
    icon: FileText,
    badge: 'Government Certified',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'civil-construction',
    title: 'Heavy Civil & Road Construction',
    desc: 'Pioneering asphalt paving, bridge frameworks, urban highways, drainage layouts, and heavy engineering infrastructure.',
    icon: Milestone,
    badge: 'Industrial Grade',
    image: 'https://i.ibb.co/x81XQL2C/Ropvina.jpg',
  },
  {
    id: 'estate-dev',
    title: 'Premium Estate Development',
    desc: 'Building secure master-planned residential communities, gated business plazas, and affordable luxury estates.',
    icon: Home,
    badge: 'Eco-Designed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'materials',
    title: 'Building Materials Supply',
    desc: 'Production, quality validation, and supply-chain logistics for blocks, aggregates, cement compounds, and structural steel.',
    icon: Hammer,
    badge: 'Direct Manufacturer',
    image: 'https://i.ibb.co/vC5fP3th/Ropvina-3.jpg',
  },
];

export const STAT_METRICS: StatItem[] = [
  { id: 'projects', label: 'Infrastructure Projects Completed', value: '42+', icon: Milestone },
  { id: 'acreage', label: 'Acreage Managed & Developed', value: '1,200+', icon: Home },
  { id: 'shipments', label: 'Global Trade Shipments Cleared', value: '550+', icon: Globe },
  { id: 'clients', label: 'Corporate Clients Served', value: '180+', icon: Users },
];

