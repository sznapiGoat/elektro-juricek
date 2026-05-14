"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, animate, useInView } from "motion/react";
import { Phone, ArrowRight, MapPin, ChevronDown } from "lucide-react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function MagneticCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setPos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  return (
    <motion.a
      ref={ref}
      href="tel:+420606726086"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: pos.x,
        y: pos.y,
        boxShadow: [
          "0 0 18px 3px rgba(59,130,246,0.35)",
          "0 0 36px 8px rgba(59,130,246,0.65)",
          "0 0 18px 3px rgba(59,130,246,0.35)",
        ],
      }}
      transition={{
        x: { type: "spring", stiffness: 180, damping: 16, mass: 0.6 },
        y: { type: "spring", stiffness: 180, damping: 16, mass: 0.6 },
        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.97 }}
      style={{ willChange: "transform" }}
      className="group relative flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-2xl transition-colors duration-200 select-none cursor-pointer"
    >
      <Phone className="w-5 h-5" />
      Zavolat elektrikáře
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </motion.a>
  );
}

const headingParts = [
  { text: "Elektro", highlight: false },
  { text: "Juříček", highlight: true },
];

const stats = [
  { target: 15, suffix: "+", label: "Roků zkušeností" },
  { target: 500, suffix: "+", label: "Dokončených zakázek" },
  { target: 24, suffix: "h", label: "Rychlý výjezd" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0f172a 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-sm font-medium mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Hranice na Moravě · IČO 07492740
        </motion.div>

        {/* Main heading */}
        <div className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {headingParts.map((part, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`text-6xl sm:text-8xl lg:text-[96px] font-black tracking-tight leading-none ${
                part.highlight ? "text-blue-400" : "text-white"
              }`}
            >
              {part.text}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-semibold text-slate-300 mb-3"
        >
          Spolehlivá práce, férové ceny.
        </motion.p>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Odborné elektroinstalace, revize a servis v Hranicích a okolí.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticCTA />
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-semibold text-base rounded-2xl transition-all duration-200 backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5 text-slate-400" />
            Kde nás najdete
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 pt-12 border-t border-white/[0.06]"
        >
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-xs sm:text-sm text-slate-500 text-center leading-tight">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
