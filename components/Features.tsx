"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, HandshakeIcon, Presentation, LineChart, BarChart3, Buildings, Search, ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './MaxWidth';

const IconComponent = ({ name }: { name: string }) => {
  const icons = {
    Calculator: <Calculator className="w-6 h-6 text-electric-blue" />,
    HandshakeIcon: <HandshakeIcon className="w-6 h-6 text-electric-blue" />,
    PresentationChart: <Presentation className="w-6 h-6 text-electric-blue" />,
    LineChart: <LineChart className="w-6 h-6 text-electric-blue" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-electric-blue" />,
    Search: <Search className="w-6 h-6 text-electric-blue" />,
  };

  return icons[name as keyof typeof icons] || null;
};

const features = [
  {
    iconName: 'Calculator',
    title: 'Financial Modeling',
    description: 'We develop detailed financial models using MS Excel and specialized tools for various financial purposes.',
    benefits: ['Income statements & balance sheets', 'Cash flow projections', 'Key ratio analysis']
  },
  {
    iconName: 'HandshakeIcon',
    title: 'M&A Deal Support',
    description: 'End-to-end M&A and fundraising support with thorough business assessment and value driver identification.',
    benefits: ['Investor connection', 'Deal negotiation', 'Financial due diligence']
  },
  {
    iconName: 'PresentationChart',
    title: 'Pitch Presentations',
    description: 'Strategic pitch presentations showcasing credentials and M&A transaction strategies.',
    benefits: ['Experience highlight', 'Transaction timelines', 'Deal qualification']
  },
  {
    iconName: 'LineChart',
    title: 'Business Valuation',
    description: 'Comprehensive valuation models using DCF, Comparable Company Analysis, and SOTP methodologies.',
    benefits: ['Cash flow projection', 'Industry comparables', 'Multiple analysis']
  },
  {
    iconName: 'BarChart3',
    title: 'Equity Research',
    description: 'Detailed equity research reports with coverage initiation and periodic updates.',
    benefits: ['Financial modeling', 'Industry analysis', 'Investment recommendations']
  },
  {
    iconName: 'Search',
    title: 'Business Research',
    description: 'Customized global company research focusing on key metrics and market positioning.',
    benefits: ['Personnel insights', 'Revenue analysis', 'Competitor tracking']
  }
];

export function Features2() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-black/70">Comprehensive financial solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-electric-blue/10 hover:border-electric-blue/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-electric-blue/10 rounded-lg">
                  <IconComponent name={feature.iconName} />
                </div>
                <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
              </div>

              <p className="text-black/70 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-black/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </MaxWidthWrapper>
    </section>
  );
}