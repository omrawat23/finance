'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidth';
import { motion } from 'framer-motion';
import HoverDevCards from '@/components/HoverCard';
import { DragCards } from '@/components/DragCards';
import { RevealBento } from '@/components/RevealBento';
import TiltCard from '@/components/TiltCard';

export default function About() {
  const cards = [
    {
      id: 1,
      imageUrl: "/placeholder.svg?height=400&width=300",
      alt: "Card 1",
    },
    {
      id: 2,
      imageUrl: "/placeholder.svg?height=400&width=300",
      alt: "Card 2",
    },
    {
      id: 3,
      imageUrl: "/placeholder.svg?height=400&width=300",
      alt: "Card 3",
    },
    {
      id: 4,
      imageUrl: "/placeholder.svg?height=400&width=300",
      alt: "Card 4",
    },
  ]

  return (
    <MaxWidthWrapper maxWidth="2xl">
      <section className="relative z-10 py-16 px-4 space-y-16 mt-24">
        {/* Introduction Section */}
        <motion.div
          id="intro"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-800">Introduction</h2>
          <p className="text-lg text-neutral-dark/80 leading-relaxed">
            Welcome to our company! We are dedicated to providing cutting-edge financial solutions that empower businesses to achieve sustainable growth and success.
          </p>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          id="values"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-neutral-800">Our Values</h2>
          <HoverDevCards />
          {/* <ul className="list-disc list-inside text-lg text-neutral-dark/80 space-y-2">
            <li>Integrity: We uphold the highest standards of honesty and ethics.</li>
            <li>Innovation: We embrace creativity to deliver exceptional solutions.</li>
            <li>Collaboration: We believe in the power of teamwork and partnerships.</li>
          </ul> */}
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          id="team"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-neutral-800">Our Team</h2>
          <p className="text-lg text-neutral-dark/80 leading-relaxed">
            Our team consists of experienced professionals who are passionate about transforming financial insights into actionable strategies. Together, we strive to make a meaningful impact for our clients.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <TiltCard imageUrl={card.imageUrl} alt={card.alt} />
            </div>
          ))}
        </div>
        </motion.div>

      </section>
    </MaxWidthWrapper>
  );
}
