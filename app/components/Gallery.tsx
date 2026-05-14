"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Phone } from "lucide-react";

/* ─────────────────────────────────────────────
   Data  (elektro.2.jpg removed — duplicate of elektro5)
───────────────────────────────────────────── */
const projects = [
  {
    src: "/images/elektro5.jpg",
    title: "Bytové rozvodnice",
    category: "Rozvaděče",
    description: "Kompletní zapojení jističů a proudových chráničů v moderním interiéru.",
  },
  {
    src: "/images/elektro4.jpg",
    title: "Silový přívod",
    category: "Rozvaděče",
    description: "Zapojení měděných přípojnic a kabelových přívodů do hlavního rozvaděče.",
  },
  {
    src: "/images/elektro6.jpg",
    title: "Datový rozvaděč",
    category: "Rozvaděče",
    description: "Strukturovaná kabeláž a osazení datového rozvaděče pro kancelářský objekt.",
  },
  {
    src: "/images/elektro7.jpg",
    title: "Revize a údržba",
    category: "Rozvaděče",
    description: "Odborné kontroly a servis elektrických zařízení dle platných norem ČSN.",
  },
  {
    src: "/images/elektro3.jpg",
    title: "Průmyslové rozvody",
    category: "Průmysl",
    description: "Realizace elektroinstalací v komerčních a průmyslových objektech.",
  },
  {
    src: "/images/elektro8.jpg",
    title: "Tepelná čerpadla",
    category: "Průmysl",
    description: "Elektrická přípojka a kompletní instalace tepelného čerpadla vzduch–voda.",
  },
  {
    src: "/images/elektro9.jpg",
    title: "Průmyslová rozvodna",
    category: "Rekonstrukce",
    description: "Modernizace starých hliníkových rozvodů a výměna průmyslových rozvaděčů.",
  },
  {
    src: "/images/elektro 10.jpg",
    title: "Rekonstrukce elektroměrů",
    category: "Rekonstrukce",
    description: "Výměna starých elektroměrů a pojistkových skříní za moderní prvky.",
  },
] as const;

type Category = "Vše" | "Rozvaděče" | "Průmysl" | "Rekonstrukce";

const TABS: Category[] = ["Vše", "Rozvaděče", "Průmysl", "Rekonstrukce"];

const categoryColor: Record<string, string> = {
  Rozvaděče: "bg-blue-500/25 text-blue-200 border-blue-400/30",
  Průmysl:   "bg-amber-500/25 text-amber-200 border-amber-400/30",
  Rekonstrukce: "bg-violet-500/25 text-violet-200 border-violet-400/30",
};

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
function Lightbox({
  index,
  filtered,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  filtered: typeof projects[number][];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const project = filtered[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Zavřít"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Předchozí"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Další"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <motion.div
        key={project.src}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="relative aspect-square bg-slate-900">
          <Image
            src={project.src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover transform-gpu [image-rendering:crisp-edges] md:[image-rendering:auto]"
            priority
            unoptimized
            quality={100}
          />
        </div>

        <div className="p-5 bg-slate-900/95 backdrop-blur-sm flex items-start justify-between gap-4">
          <div>
            <span
              className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border mb-2 ${
                categoryColor[project.category] ?? "bg-white/10 text-white border-white/20"
              }`}
            >
              {project.category}
            </span>
            <p className="font-bold text-white text-lg leading-tight">{project.title}</p>
            <p className="text-slate-400 text-sm mt-1">{project.description}</p>
          </div>
          <span className="text-xs text-slate-600 flex-shrink-0 mt-1 tabular-nums">
            {index + 1}&thinsp;/&thinsp;{filtered.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Grid card
───────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: typeof projects[number];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-black/40 border border-white/[0.07] hover:border-blue-500/30 transition-colors duration-300"
    >
      <Image
        src={project.src}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transform-gpu [image-rendering:crisp-edges] md:[image-rendering:auto] transition-transform duration-500 ease-out group-hover:scale-105"
        priority
        unoptimized
        quality={100}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out" />

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <ZoomIn className="w-4 h-4 text-white" />
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <span
          className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border mb-1.5 ${
            categoryColor[project.category] ?? "bg-white/10 text-white border-white/20"
          }`}
        >
          {project.category}
        </span>
        <p className="text-sm font-bold text-white leading-tight">{project.title}</p>
        <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{project.description}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("Vše");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeTab === "Vše"
    ? [...projects]
    : projects.filter((p) => p.category === activeTab);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]);
  const next  = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length)),
    [filtered.length]);

  return (
    <section id="projekty" className="relative py-24 sm:py-32 bg-[#0f172a]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Naše práce
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Realizované projekty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Rozvaděče, průmyslové instalace, rekonstrukce — ukázka z naší praxe.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {TABS.map((tab) => {
            const count = tab === "Vše" ? projects.length : projects.filter((p) => p.category === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`relative flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.07]"
                }`}
              >
                {tab}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full tabular-nums ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.src}
                project={project}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}

            {/* CTA card — fills the 9th cell when all 8 images are shown */}
            {activeTab === "Vše" && (
              <motion.a
                key="cta-card"
                href="#kontakt"
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: projects.length * 0.06 }}
                className="group aspect-square rounded-2xl border border-dashed border-blue-500/30 hover:border-blue-500/60 bg-blue-500/[0.03] hover:bg-blue-500/[0.07] flex flex-col items-center justify-center gap-4 text-center p-8 transition-all duration-300"
                aria-label="Kontaktujte nás pro nezávaznou nabídku"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-white mb-1.5">Vaše zakázka?</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Kontaktujte nás pro nezávaznou cenovou nabídku.
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                  Napsat zprávu →
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            filtered={filtered}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
