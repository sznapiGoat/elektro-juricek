import { Zap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex items-baseline">
                <span className="font-bold text-white text-lg leading-none">Elektro</span>
                <span className="font-black text-blue-400 text-lg leading-none ml-1">Juříček</span>
              </div>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Odborné elektroinstalace, revize a servis v Hranicích na Moravě a okolí. IČO: 07492740.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Navigace</h4>
            <ul className="space-y-3">
              {[
                { label: "Služby", href: "#sluzby" },
                { label: "Proč my", href: "#proc-my" },
                { label: "Projekty", href: "#projekty" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420606726086"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  +420 606 726 086
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elektrojuricek.cz"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  info@elektrojuricek.cz
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Pod Nemocnicí 2251<br />753 01 Hranice I-Město</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} Elektro Juříček. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-slate-700">
            Hranice na Moravě · IČO 07492740
          </p>
        </div>
      </div>
    </footer>
  );
}
