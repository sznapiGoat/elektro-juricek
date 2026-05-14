"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, ShieldCheck, Wrench, Lightbulb, Lock } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Elektroinstalace",
    description:
      "Kompletní elektroinstalace bytů, rodinných domů i firemních prostor. Nové rozvody, rekonstrukce i rozšíření stávající instalace.",
    tags: ["Byty", "Domy", "Firmy"],
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Revize elektrozařízení",
    description:
      "Odborné revize el. instalací, spotřebičů a hromosvodů. Platná revizní zpráva — rychle a spolehlivě.",
    tags: ["Instalace", "Spotřebiče", "Hromosvody"],
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    icon: Wrench,
    title: "Servis a údržba",
    description:
      "Opravy a údržba elektrozařízení, poruchová služba. Rychlý výjezd, odborná diagnostika a profesionální oprava.",
    tags: ["Opravy", "Diagnostika", "Výjezd"],
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20 hover:border-amber-500/50",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    icon: Lightbulb,
    title: "Osvětlení & Podlahové topení",
    description:
      "Montáž interiérového i exteriérového osvětlení. Instalace elektrického podlahového topení do koupelny, obývacího pokoje i celého domu.",
    tags: ["Osvětlení", "Topení", "Montáž"],
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/20 hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/15",
    iconColor: "text-yellow-400",
  },
  {
    icon: Lock,
    title: "Zabezpečení & Chytrá domácnost",
    description:
      "Instalace zabezpečovacích systémů, kamerových systémů a prvků chytré domácnosti. Ovládejte domov z telefonu.",
    tags: ["Alarm", "Kamery", "Smart Home"],
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20 hover:border-violet-500/50",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`relative group flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} bg-white/[0.02] backdrop-blur-sm transition-colors duration-300`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-6 h-6 ${service.iconColor}`} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-white/5 border border-white/8 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="sluzby" className="relative py-24 sm:py-32 bg-[#0f172a]">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Co nabízíme
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-5"
          >
            Naše služby
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Od jednoduchých oprav po komplexní elektroinstalace — vždy s důrazem na bezpečnost a kvalitu.
          </motion.p>
        </div>

        {/* Grid: 2 cols on sm, 3 on lg, last card centred on its row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
