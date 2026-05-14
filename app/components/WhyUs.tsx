"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Clock, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "15+ let zkušeností",
    description:
      "Více než patnáct let praxe v oboru elektroinstalací. Každá zakázka je pro nás příležitostí odvést tu nejlepší práci.",
    highlight: "15+",
    highlightLabel: "Roků v oboru",
  },
  {
    icon: BadgeCheck,
    title: "Profesionální certifikace",
    description:
      "Vlastníme veškerá potřebná oprávnění pro provádění elektroinstalací a revizí. Práce v plném souladu s normami ČSN.",
    highlight: "ČSN",
    highlightLabel: "Dle norem",
  },
  {
    icon: Clock,
    title: "Rychlý výjezd",
    description:
      "Akutní poruchy řešíme přednostně. Kontaktujte nás a domluvíme termín co nejdříve — obvykle do 24 hodin.",
    highlight: "24h",
    highlightLabel: "Výjezd do",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proc-my" className="relative py-24 sm:py-32">
      {/* Faint blue tinted band */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Proč zvolit nás
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-5"
          >
            Důvody, proč nám zákazníci věří
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Spolehlivost, odbornost a férovost — to jsou hodnoty, které stojí za každou naší zakázkou.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                {/* Large highlight number/label */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-sm font-black text-blue-300 bg-blue-500/15 border border-blue-500/25 rounded-full">
                    {reason.highlight}
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 mt-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
