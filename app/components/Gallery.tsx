"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const projects = [
  {
    src: "/images/elektro1.jpg",
    title: "Elektroinstalace",
    category: "Realizace",
  },
  {
    src: "/images/elektro.2.jpg",
    title: "Elektroinstalace",
    category: "Realizace",
  },
  {
    src: "/images/elektro3.jpg",
    title: "Elektroinstalace",
    category: "Realizace",
  },
  {
    src: "/images/elektro4.jpg",
    title: "Elektroinstalace",
    category: "Realizace",
  },
];

const categoryColors: Record<string, string> = {
  Realizace: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Rozvodny: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Nabíječky aut": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Rekonstrukce: "bg-violet-500/20 text-violet-300 border-violet-500/30",
};

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
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-blue-500/30 transition-colors duration-300"
    >
      {/* Image or placeholder */}
      {!imgError ? (
        <Image
          src={project.src}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-slate-800/60 flex flex-col items-center justify-center gap-2">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: [
                "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "32px 32px",
            }}
          />
          <span className="relative text-4xl">⚡</span>
          <span className="relative text-xs text-slate-500 font-medium">{project.title}</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-4 h-4 text-white" />
      </div>

      {/* Info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span
          className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border mb-1.5 ${
            categoryColors[project.category] ?? "bg-white/10 text-white border-white/20"
          }`}
        >
          {project.category}
        </span>
        <p className="text-sm font-semibold text-white">{project.title}</p>
      </div>
    </motion.div>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={project.src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <div className="p-4 bg-slate-900/90 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">{project.category}</p>
            <p className="font-semibold text-white">{project.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projekty" className="relative py-24 sm:py-32 bg-[#0f172a]">
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
            Naše práce
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-5"
          >
            Realizované projekty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Ukázka z naší praxe — rozvodny, nabíječky elektromobilů, rekonstrukce instalací.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.src}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Note about adding images */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-slate-600 mt-8"
        >
          Přidejte fotografie do složky <code className="text-slate-500">public/images/</code> dle názvů v kódu.
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
