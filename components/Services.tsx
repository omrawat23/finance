'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, ChartBar, Shield, TrendingUp, LineChart, Building2 } from 'lucide-react';
import MaxWidthWrapper from './MaxWidth';

const services = [
  {
    title: 'Market Analysis',
    description: 'In-depth analysis of market trends and potential opportunities',
    icon: ChartBar,
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies',
    icon: Shield,
  },
  {
    title: 'Investment Strategy',
    description: 'Customized investment solutions for optimal returns',
    icon: TrendingUp,
  },
  {
    title: 'Performance Metrics',
    description: 'Detailed tracking and analysis of financial performance',
    icon: LineChart,
  },
  {
    title: 'Corporate Finance',
    description: 'Strategic financial planning and corporate restructuring',
    icon: Building2,
  },
  {
    title: 'Compliance',
    description: 'Ensuring adherence to regulatory requirements',
    icon: BadgeCheck,
  },
];

export function Services() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">Our Services</h2>
          <p className="text-neutral-dark/60">Comprehensive financial solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-electric-blue/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark">{service.title}</h3>
              </div>
              <p className="text-neutral-dark/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
