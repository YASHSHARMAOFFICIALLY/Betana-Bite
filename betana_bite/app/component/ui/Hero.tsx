"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onOrderSample?: () => void;
}

export default function Hero({ onOrderSample = () => {} }: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-950">
      {/* Optimized Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.png"
          alt="Betana Bites Heritage Snacks"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Premium Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-orange-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative pt-20  z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Premium Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/40 backdrop-blur-xl shadow-lg mb-8 group hover:border-orange-400/60 transition-all duration-300"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-orange-100 text-sm font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
              Rooted in Assam
            </span>
          </motion.div>

          {/* Premium Staggered Heading with Text Shadow */}
          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  
  className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-white drop-shadow-2xl"
>
  Betana Bites —<br />
  <span className="relative inline-block">
    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
      Heritage
    </span>
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400/60 to-transparent origin-left"
    />
  </span>
  <span className="md:inline"> in Every Bite</span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-gray-200 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light"
          >
            From pineapple peels and betel leaves to handcrafted premium snacks.{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-orange-400/20 to-transparent px-2 py-0.5 rounded">
              Small-batch, preservative-free.
            </span>
          </motion.p>

          {/* Premium Action Buttons with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOrderSample}
              className="group relative rounded-full px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg shadow-2xl shadow-orange-500/40 overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                Order Sample
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Animated Shine Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.button>

            <motion.a
              href="#shop"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-full px-10 py-5 border-2 border-white/40 text-white font-bold text-lg backdrop-blur-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-3"
            >
              Explore Flavours
              <span className="group-hover:rotate-90 transition-transform duration-300">✦</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Handcrafted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Zero Preservatives</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400">500+</div>
          <div className="text-sm text-gray-400 mt-1">Happy Customers</div>
        </div>
        <div className="w-full h-px bg-white/10" />
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400">15+</div>
          <div className="text-sm text-gray-400 mt-1">Unique Flavours</div>
        </div>
        <div className="w-full h-px bg-white/10" />
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400">4.9</div>
          <div className="text-sm text-gray-400 mt-1">Avg. Rating</div>
        </div>
      </motion.div>
    </section>
  );
}