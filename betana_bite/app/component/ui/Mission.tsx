"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 mb-8"
          >
            <span className="text-2xl">🌾</span>
            <span className="text-green-800 text-sm font-bold uppercase tracking-wider">Our Journey</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900">
            From <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                Nappam Village
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400/60 to-transparent origin-left"
              />
            </span>
            <br className="hidden md:block" />
            <span className="md:inline"> to Your Table</span>
          </h2>

          {/* Story Text with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              We started in <span className="font-semibold text-gray-900">Nappam village, near Tezpur</span>. Pineapple peels and betel leaves were being discarded — we saw opportunity.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              By partnering with fruit vendors and training local households, especially women, we craft snacks that are 
              <span className="font-semibold text-orange-600"> tasty, nutritious, and sustainable</span>. 
              Our production model is zero-waste and community-centric.
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          />
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <MissionCard
            icon="🌱"
            title="Sustainable Sourcing"
            desc="Raw materials come from local farms and vendors — reducing waste and supporting farmers."
            delay={0.2}
            bgGradient="from-green-50 via-emerald-50 to-teal-50"
            accentColor="green"
          />
          <MissionCard
            icon="🤝"
            title="Community Empowerment"
            desc="We engage households with incentive-based pay and skill training, prioritizing women's employment."
            delay={0.4}
            bgGradient="from-amber-50 via-orange-50 to-yellow-50"
            accentColor="amber"
          />
          <MissionCard
            icon="🍃"
            title="Healthy & Natural"
            desc="No preservatives — jaggery and spices give authentic flavour and nutrition."
            delay={0.6}
            bgGradient="from-orange-50 via-red-50 to-pink-50"
            accentColor="orange"
          />
        </div>

      
      </div>
    </section>
  );
}

interface MissionCardProps {
  icon: React.ReactNode; // or React.ElementType if passing a component
  title: string;
  desc: string;
  delay: number;
  bgGradient: string;
  accentColor: 'green' | 'amber' | 'orange' | 'blue' | 'purple'; // Add the colors you use
}
function MissionCard({ icon, title, desc, delay, bgGradient, accentColor }:MissionCardProps) {
  const accentColors = {
    green: {
      border: 'border-green-200',
      iconBg: 'from-green-400 to-emerald-500',
      iconShadow: 'shadow-green-300/50',
      hoverShadow: 'group-hover:shadow-green-400/50',
      ring: 'border-green-200/30',
      checkBg: 'from-green-500 to-emerald-500'
    },
    amber: {
      border: 'border-amber-200',
      iconBg: 'from-amber-400 to-orange-500',
      iconShadow: 'shadow-amber-300/50',
      hoverShadow: 'group-hover:shadow-amber-400/50',
      ring: 'border-amber-200/30',
      checkBg: 'from-amber-500 to-orange-500'
    },
    orange: {
      border: 'border-orange-200',
      iconBg: 'from-orange-400 to-red-500',
      iconShadow: 'shadow-orange-300/50',
      hoverShadow: 'group-hover:shadow-orange-400/50',
      ring: 'border-orange-200/30',
      checkBg: 'from-orange-500 to-red-500'
    },
    blue: {
      border: 'border-blue-200',
      iconBg: 'from-blue-400 to-indigo-500',
      iconShadow: 'shadow-blue-300/50',
      hoverShadow: 'group-hover:shadow-blue-400/50',
      ring: 'border-blue-200/30',
      checkBg: 'from-blue-500 to-indigo-500'
    },
    purple: {
      border: 'border-purple-200',
      iconBg: 'from-purple-400 to-fuchsia-500',
      iconShadow: 'shadow-purple-300/50',
      hoverShadow: 'group-hover:shadow-purple-400/50',
      ring: 'border-purple-200/30',
      checkBg: 'from-purple-500 to-fuchsia-500'
    }
  };

  const colors = accentColors[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      {/* Card */}
      <div className={`relative h-full p-8 md:p-10 bg-gradient-to-br ${bgGradient} rounded-3xl border ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-500`}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: [0, -8, 8, -8, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center shadow-xl ${colors.iconShadow} ${colors.hoverShadow} transition-all duration-500`}>
              <span className="text-4xl filter drop-shadow-lg">{icon}</span>
            </div>
            {/* Decorative Ring */}
            <div className={`absolute -inset-2 rounded-2xl border-2 ${colors.ring} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {desc}
            </p>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className={`absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-r ${colors.iconBg}`} />
            <div className={`absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b ${colors.iconBg}`} />
          </div>
        </div>
      </div>

      {/* Floating Check Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
        className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${colors.checkBg} rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

