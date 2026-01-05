"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { 
      icon: "🍍", 
      subtitle: "SUSTAINABLE", 
      title: "Waste to Wealth",
      description: "Transforming agricultural by-products into premium snacks"
    },
    { 
      icon: "👩‍🌾", 
      subtitle: "COMMUNITY", 
      title: "Women-Led Income",
      description: "Empowering local artisans and creating opportunities"
    },
    { 
      icon: "🌱", 
      subtitle: "NATURAL", 
      title: "No Preservatives",
      description: "Pure ingredients, crafted with traditional methods"
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-amber-50 via-orange-50/30 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-800 text-sm font-bold uppercase tracking-wider">Our Values</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Purpose</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every bite tells a story of sustainability, community, and tradition
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg shadow-orange-100/50 border border-orange-100/50 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-300/50 group-hover:shadow-2xl group-hover:shadow-orange-400/50 transition-all duration-500">
                      <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 rounded-2xl border-2 border-orange-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-orange-300 to-transparent" />
                      <span className="text-xs font-bold text-orange-600 tracking-[0.2em] uppercase">
                        {feature.subtitle}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-orange-300 to-transparent" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Bottom Accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full origin-center"
                  />
                </div>
              </div>

              {/* Floating Badge (appears on hover) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5kg+</div>
              <div className="text-orange-100 text-sm uppercase tracking-wider">Waste Transformed Daily</div>
            </div>
            <div className="border-l border-r border-orange-400/30">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-orange-100 text-sm uppercase tracking-wider">Women Artisans Employed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-orange-100 text-sm uppercase tracking-wider">Natural Ingredients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}