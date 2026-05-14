"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
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
            Spojte se s námi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-5"
          >
            Kontakt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Zavolejte nám nebo napište — ozveme se co nejdříve a domluvíme termín.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {/* Phone — primary CTA */}
            <motion.a
              href="tel:+420606726086"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:bg-blue-400 transition-colors duration-200">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Telefon</p>
                <p className="text-2xl font-black text-white tracking-tight">+420 606 726 086</p>
                <p className="text-sm text-blue-400 mt-0.5">Klepněte pro zavolání</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@elektrojuricek.cz"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-slate-300 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">E-mail</p>
                <p className="text-xl font-bold text-white">info@elektrojuricek.cz</p>
                <p className="text-sm text-slate-500 mt-0.5">Odpovídáme do 24 hodin</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Adresa</p>
                <p className="text-lg font-bold text-white leading-snug">
                  Pod Nemocnicí 2251<br />753 01 Hranice I-Město
                </p>
              </div>
            </motion.div>

            {/* IČO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Identifikační číslo</p>
                <p className="text-lg font-bold text-white">IČO: 07492740</p>
              </div>
            </motion.div>
          </div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-white/[0.08] h-[420px] lg:h-full min-h-[420px]"
          >
            <iframe
              title="Elektro Juříček – mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.9!2d17.7181!3d49.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713fa6c65b3b7cf%3A0x1!2sPod%20Nemocnic%C3%AD%202251%2C%20753%2001%20Hranice%20I-M%C4%9Bsto!5e0!3m2!1scs!2scz!4v1715000000000!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Potřebujete elektrikáře?</h3>
            <p className="text-slate-400 text-sm">Zavolejte nám — poradíme a domluvíme termín výjezdu.</p>
          </div>
          <a
            href="tel:+420606726086"
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-2xl transition-colors duration-200 shadow-lg shadow-blue-500/30 text-base"
          >
            <Phone className="w-5 h-5" />
            Zavolat: 606 726 086
          </a>
        </motion.div>
      </div>
    </section>
  );
}
