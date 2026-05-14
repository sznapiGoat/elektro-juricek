"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { MapPin, Wrench, CheckCircle2 } from "lucide-react";

const perks = [
  "Výjezd do 50 km od Hranic na Moravě",
  "Plně vybavená mobilní dílna",
  "Materiál vždy ve voze — žádné čekání",
  "Práce na klíč, bez starostí",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Faint radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: van photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

            {/* Cap width so a 206 px source isn't stretched beyond recognition */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08] max-w-sm mx-auto lg:mx-0">
              {/* aspect-square matches the 206×206 source exactly — no crop, no stretch */}
              <div className="relative aspect-square bg-slate-900">
                <Image
                  src="/images/elektro1.jpg"
                  alt="Elektro Juříček – mobilní servisní vůz"
                  fill
                  sizes="(max-width: 1024px) 384px, 384px"
                  className="object-contain contrast-[1.03] brightness-[1.02]"
                  priority
                  unoptimized
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Bottom badge overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 w-fit">
                  <Wrench className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-white">Mobilní servisní dílna</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: glassmorphism card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Mobilní servis
            </motion.span>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Přijedu přímo{" "}
              <span className="text-blue-400">k&nbsp;vám</span>
            </h2>

            {/* Glassmorphism card */}
            <div className="relative p-7 rounded-2xl bg-white/[0.04] border border-white/[0.09] backdrop-blur-sm overflow-hidden mb-8">
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] to-transparent pointer-events-none rounded-2xl" />

              <div className="relative flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white mb-1.5">
                    Dojíždím za zákazníky do 50 km od Hranic.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Plně vybavená mobilní dílna — potřebný materiál a nářadí mám vždy u sebe.
                    Práci vyřídím na místě, bez zbytečných výjezdů.
                  </p>
                </div>
              </div>
            </div>

            {/* Perks list */}
            <ul className="space-y-3">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{perk}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
