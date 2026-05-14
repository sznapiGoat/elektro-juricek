"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const projects = [
  {
    src: "/images/elektro.2.jpg",
    title: "Bytová rozvodna",
    category: "Rozvaděče",
    description: "Kompletní osazení bytové rozvodny – jističe, chrániče, svorkovnice.",
  },
  {
    src: "/images/elektro3.jpg",
    title: "Průmyslová instalace",
    category: "Průmysl",
    description: "Montáž frekvenčního měniče a průmyslového rozvaděče na stavbě.",
  },
  {
    src: "/images/elektro4.jpg",
    title: "Silový přívod – přípojnice",
    category: "Rozvaděče",
    description: "Zapojení měděných přípojnic a kabelových přívodů do hlavního rozvaděče.",
  },
  {
    src: "/images/elektro5.jpg",
    title: "Hlavní rozvaděč RD",
    category: "Rozvaděče",
    description: "Nový hlavní rozvaděč rodinného domu – Eaton, kompletní elektroinstalace.",
  },
  {
    src: "/images/elektro6.jpg",
    title: "Datový rozvaděč",
    category: "Datové sítě",
    description: "Strukturovaná kabeláž a osazení datového rozvaděče pro kancelářský objekt.",
  },
  {
    src: "/images/elektro7.jpg",
    title: "Silový přívod – detail",
    category: "Rozvaděče",
    description: "Detail zapojení silových přívodů a přípojnicového systému.",
  },
  {
    src: "/images/elektro8.jpg",
    title: "Tepelné čerpadlo",
    category: "Tepelná čerpadla",
    description: "Elektrická přípojka a instalace tepelného čerpadla vzduch–voda.",
  },
  {
    src: "/images/elektro9.jpg",
    title: "Průmyslová rozvodna",
    category: "Průmysl",
    description: "Rekonstrukce starší průmyslové rozvodny – nové prvky, bezpečný provoz.",
  },
  {
    src: "/images/elektro 10.jpg",
    title: "Rekonstrukce elektroměrů",
    category: "Rekonstrukce",
    description: "Stav před rekonstrukcí – výměna starých elektroměrů a pojistkových skříní.",
  },
];

const categoryColor: Record<string, string> = {
  Rozvaděče: "bg-blue-500/25 text-blue-200 border-blue-400/30",
  Průmysl: "bg-amber-500/25 text-amber-200 border-amber-400/30",
  "Datové sítě": "bg-emerald-500/25 text-emerald-200 border-emerald-400/30",
  "Tepelná čerpadla": "bg-cyan-500/25 text-cyan-200 border-cyan-400/30",
  Rekonstrukce: "bg-violet-500/25 text-violet-200 border-violet-400/30",
};

/* ── Lightbox ── */
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const project = projects[index];

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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Zavřít"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Předchozí"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Další"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Image card */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="relative aspect-video bg-slate-900">
          <Image
            src={project.src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
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
          <span className="text-xs text-slate-600 flex-shrink-0 mt-1">
            {index + 1} / {projects.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Grid card ── */
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[number];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-black/40 border border-white/[0.07] hover:border-blue-500/30 transition-colors duration-300"
    >
      <Image
        src={project.src}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out" />

      {/* Zoom icon top-right */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-250">
        <ZoomIn className="w-4 h-4 text-white" />
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
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

/* ── Section ── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + projects.length) % projects.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % projects.length)), []);

  return (
    <section id="projekty" className="relative py-24 sm:py-32 bg-[#0f172a]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
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
            Rozvaděče, průmyslové instalace, datové sítě, tepelná čerpadla — ukázka z naší praxe.
          </motion.p>
        </div>

        {/* 3-column uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.src}
              project={project}
              index={i}
              onClick={() => openAt(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
