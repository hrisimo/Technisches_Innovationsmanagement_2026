/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Wrench, 
  ShieldCheck, 
  Calendar, 
  HardHat,
  Truck,
  Construction,
  Download,
  Menu,
  X,
  ArrowRight,
  Info,
  Layers,
  Globe,
  Award,
  Clock,
  BarChart3,
  Activity,
  ArrowLeft,
  Settings,
  AlertTriangle,
  Presentation,
  QrCode,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

// --- Components ---

const Logo = ({ size = "md", light = false }: { size?: "sm" | "md" | "lg", light?: boolean }) => {
  const iconSize = size === "sm" ? 18 : size === "md" ? 24 : 32;
  const containerSize = size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-14 h-14";
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-3xl";

  return (
    <div className="flex items-center gap-3">
      <div className={`${containerSize} bg-cat-yellow rounded-lg flex items-center justify-center shadow-lg shadow-cat-yellow/20`}>
        <Construction size={iconSize} className="text-cat-black" />
      </div>
      <div className={`font-display font-extrabold ${light ? 'text-white' : 'text-cat-black'} ${textSize} tracking-tight`}>
        Re<span className="text-cat-yellow">Used</span>Machines<span className={`${light ? 'text-cat-mid' : 'text-cat-mid'} font-normal`}>.at</span>
      </div>
    </div>
  );
};

const Navbar = ({ onViewChange, currentView }: { onViewChange: (view: string) => void, currentView: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cat-black border-b-3 border-cat-yellow sticky top-0 z-50 px-6 md:px-10 h-16 flex items-center justify-between">
      <div className="cursor-pointer group" onClick={() => onViewChange('home')}>
        <Logo light />
      </div>

      <div className="hidden lg:flex items-center gap-1">
        {[
          { id: 'home', label: 'Home' },
          { id: 'catalog', label: 'Maschinen finden' },
          { id: 'pay-per-use', label: 'Pay-per-Use' },
          { id: 'presentation', label: 'Präsentation' },
          { id: 'testing', label: 'User Testing' },
          { id: 'docs', label: 'Dokumentation' },
          { id: 'cert', label: 'Zertifizierung' }
        ].map((item) => (
          <button 
            key={item.id} 
            onClick={() => onViewChange(item.id)}
            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${currentView === item.id ? 'bg-cat-yellow text-cat-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-cat-yellow text-cat-black px-5 py-2 rounded font-semibold text-sm hover:bg-yellow-400 transition-colors">
          Partner werden
        </button>
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-cat-black border-b border-cat-yellow p-6 flex flex-col gap-4 lg:hidden"
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'catalog', label: 'Maschinen finden' },
              { id: 'pay-per-use', label: 'Pay-per-Use' },
              { id: 'presentation', label: 'Präsentation' },
              { id: 'testing', label: 'User Testing' },
              { id: 'docs', label: 'Dokumentation' },
              { id: 'cert', label: 'Zertifizierung' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => { onViewChange(item.id); setIsOpen(false); }}
                className="text-left text-gray-300 hover:text-cat-yellow font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-cat-yellow text-cat-black w-full py-3 rounded font-bold mt-2">Partner werden</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-cat-black text-white px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1fr_420px] gap-12 items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1579349429063-95629f16049a?auto=format&fit=crop&q=80&w=1920" 
          alt="Construction Machinery Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cat-black via-cat-black/80 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="inline-block bg-cat-yellow/10 border border-cat-yellow/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-cat-yellow">
            Ihr Mehrwert: Maximale Leistung bei minimalem Risiko
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <Award size={14} className="text-cat-yellow" />
            Zertifiziert
          </div>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-xl">
          Gebraucht kaufen. <br />
          <span className="text-cat-yellow">Neuwertig leisten.</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
          ReUsedMachines.at steht für die perfekte Symbiose aus Wirtschaftlichkeit und Sicherheit. Wir verwandeln gebrauchte Baumaschinen in zertifizierte Hochleistungswerkzeuge – mit vollem digitalen Durchblick.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-cat-yellow text-cat-black px-8 py-4 rounded font-bold text-base hover:bg-yellow-400 transition-all flex items-center gap-2 group">
            Maschinen finden
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-1.5 border-white/30 px-8 py-4 rounded font-medium text-base hover:bg-white/10 transition-colors">
            Unser Versprechen
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-cat-dark border-1.5 border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
          <Search size={20} className="text-cat-yellow" />
          Schnellsuche
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Maschinenart</label>
            <select className="w-full bg-cat-black border border-white/15 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cat-yellow appearance-none">
              <option>Alle Kategorien</option>
              <option>Bagger</option>
              <option>Radlader</option>
              <option>Planierraupe</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Modell / Marke</label>
            <input 
              type="text" 
              placeholder="z. B. CAT 336" 
              className="w-full bg-cat-black border border-white/15 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-cat-yellow"
            />
          </div>
          <button className="w-full bg-cat-yellow text-cat-black py-4 rounded-lg font-bold mt-4 hover:bg-yellow-400 transition-colors shadow-lg shadow-cat-yellow/10">
            Verfügbarkeit prüfen
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const BrandValues = () => {
  const values = [
    { letter: 'R', title: 'Reliability', desc: 'Zuverlässigkeit durch herstellerzertifizierte Refurbishment-Prozesse.' },
    { letter: 'E', title: 'Efficiency', desc: 'Maximale Kosteneffizienz durch Pay-per-Use und flexible Mietmodelle.' },
    { letter: 'U', title: 'Used but New', desc: 'Gebrauchte Hardware, die in Leistung und Optik einer Neumaschine entspricht.' },
    { letter: 'S', title: 'Sustainability', desc: 'Ressourcenschonung durch professionelle Lebenszyklus-Verlängerung.' },
    { letter: 'E', title: 'Expertise', desc: 'Gebündeltes Fachwissen zertifizierter Caterpillar-Servicepartner.' },
    { letter: 'D', title: 'Documentation', desc: 'Absolute Transparenz durch den lückenlosen digitalen Maschinenpass.' },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">Wofür steht Re<span className="text-cat-yellow">Used</span>Machines?</h2>
          <p className="text-cat-mid mt-4 max-w-2xl mx-auto">Unser Name ist unser Versprechen. Jede Maschine in unserem Netzwerk folgt dem REUSED-Standard.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-cat-border rounded-2xl hover:border-cat-yellow transition-all hover:shadow-lg"
            >
              <div className="text-5xl font-display font-black text-cat-gray group-hover:text-cat-yellow/20 transition-colors mb-4">{val.letter}</div>
              <h4 className="font-display text-xl font-bold mb-2">{val.title}</h4>
              <p className="text-sm text-cat-mid leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Maschinen verfügbar', value: '350+' },
    { label: 'Länder', value: '12' },
    { label: 'mit Maschinenpass', value: '100%' },
    { label: 'Lieferzeit (DE/AT)', value: '48h' },
  ];

  return (
    <div className="bg-cat-yellow py-6 px-6 md:px-10 flex flex-wrap justify-center gap-12 md:gap-24">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-2xl font-extrabold text-cat-black">{stat.value}</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-cat-black/60 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const PillarCard = ({ badge, title, desc, items, cta, colorClass }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border-1.5 border-cat-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all"
    >
      <div className="p-6 border-b border-cat-border">
        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 ${colorClass}`}>
          {badge}
        </span>
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="text-sm text-cat-mid mt-2 leading-relaxed">{desc}</p>
      </div>
      <ul className="flex-1 px-6 py-2">
        {items.map((item: string) => (
          <li key={item} className="py-3 border-b border-cat-border last:border-none flex items-center justify-between text-sm font-medium text-cat-dark group cursor-pointer hover:text-cat-black">
            {item}
            <ChevronRight size={16} className="text-cat-mid group-hover:translate-x-1 transition-transform" />
          </li>
        ))}
      </ul>
      <div className="p-6 bg-cat-gray border-t border-cat-border">
        <button className="w-full py-3 border-1.5 border-cat-black rounded-lg font-bold text-sm hover:bg-cat-black hover:text-white transition-all">
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

const MachinePass = ({ onClick }: { onClick: () => void }) => {
  const passItems = [
    { label: 'Durchgeführte Wartungsarbeiten', hasPdf: true },
    { label: 'Durchgeführte Reparaturen', hasPdf: true },
    { label: 'Letzte Prüfberichte', hasPdf: true },
    { label: 'Maschinenname & Nummer', hasPdf: false },
    { label: 'Abbildung der Maschine', hasPdf: false, isImage: true },
    { label: 'Garantie & Restbestimmung', hasPdf: true },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-cat-gray">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight leading-tight">
            Digitaler Maschinenpass <br /> für jedes Gerät
          </h2>
          <p className="mt-6 text-cat-mid text-lg leading-relaxed max-w-xl">
            Jede refurbishte Maschine erhält einen vollständigen digitalen Pass mit Reparaturhistorie, Ersatzteilliste, Wartungsprotokoll und Garantiedaten – transparent und auf Knopfdruck abrufbar.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              'Vollständige Reparaturhistorie',
              'Prüfbericht & letzte Inspektion',
              'Ersatzteilliste & Stücklisten',
              'Wartungsplan & -protokolle',
              'Garantiebedingungen & Laufzeit',
              'Foto der Maschine + PDF'
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-3 text-sm font-medium">
                <div className="w-6 h-6 rounded-full bg-cat-yellow flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-cat-black" />
                </div>
                {feat}
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ rotate: 2, scale: 0.95 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          onClick={onClick}
          className="bg-white border-1.5 border-cat-border rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
        >
          <div className="bg-cat-black p-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-cat-yellow rounded-lg flex items-center justify-center">
              <Wrench size={20} className="text-cat-black" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-sm">Maschinenpass</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">CAT 336 · Kettenbagger · #AT-2209</div>
            </div>
          </div>
          <div className="divide-y divide-cat-border">
            {passItems.map((item) => (
              <div key={item.label} className="px-6 py-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cat-yellow" />
                  <span className="text-sm font-medium text-cat-dark">{item.label}</span>
                </div>
                <div className="flex gap-2">
                  {item.hasPdf && (
                    <button className="text-[10px] font-bold bg-cat-gray border border-cat-border px-3 py-1 rounded hover:bg-cat-yellow hover:border-cat-yellow transition-colors flex items-center gap-1">
                      <Download size={10} /> PDF
                    </button>
                  )}
                  {item.isImage && (
                    <button className="text-[10px] font-bold bg-cat-gray border border-cat-border px-3 py-1 rounded hover:bg-cat-yellow hover:border-cat-yellow transition-colors flex items-center gap-1">
                      FOTO
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="px-6 py-5 bg-yellow-50 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold">Maschinenpreis</div>
                <div className="text-lg font-bold text-cat-black">€ 84.900,–</div>
              </div>
              <button className="bg-cat-black text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-cat-dark transition-colors">
                Buchen
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MachinePassDetail = ({ onBack }: { onBack: () => void }) => {
  const maintenanceHistory = [
    { date: '12.02.2026', type: 'Große Inspektion', status: 'Abgeschlossen', partner: 'Zeppelin Baumaschinen GmbH' },
    { date: '05.11.2025', type: 'Hydrauliköl-Wechsel', status: 'Abgeschlossen', partner: 'CAT Service AT' },
    { date: '20.08.2025', type: 'Ketten-Service', status: 'Abgeschlossen', partner: 'Zeppelin Baumaschinen GmbH' },
    { date: '15.05.2025', type: 'Motor-Refurbishment', status: 'Zertifiziert', partner: 'CAT Certified Rebuild Center' },
  ];

  const components = [
    { name: 'Motor (C9.3B)', health: 98, status: 'Optimal' },
    { name: 'Hydrauliksystem', health: 95, status: 'Optimal' },
    { name: 'Laufwerk / Ketten', health: 88, status: 'Gut' },
    { name: 'Elektronik / Telematik', health: 100, status: 'Neu' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto py-12 px-6 md:px-10"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-cat-mid hover:text-cat-black font-bold text-sm mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Zurück zur Übersicht
      </button>

      <div className="grid lg:grid-cols-[1fr_380px] gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="font-display text-4xl font-extrabold tracking-tight">Caterpillar 336 Next Gen</h1>
            <span className="bg-cat-yellow text-cat-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Refurbished Gold</span>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-cat-border p-5 rounded-xl">
              <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold mb-1">Betriebsstunden</div>
              <div className="text-2xl font-display font-bold">4.250 h</div>
              <div className="text-xs text-green-600 font-medium mt-1">Refurbished bei 4.100 h</div>
            </div>
            <div className="bg-white border border-cat-border p-5 rounded-xl">
              <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold mb-1">Baujahr</div>
              <div className="text-2xl font-display font-bold">2021</div>
              <div className="text-xs text-cat-mid font-medium mt-1">Modelljahr 2022</div>
            </div>
            <div className="bg-white border border-cat-border p-5 rounded-xl">
              <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold mb-1">Standort</div>
              <div className="text-2xl font-display font-bold">Wien, AT</div>
              <div className="text-xs text-cat-mid font-medium mt-1">Sofort verfügbar</div>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <Activity size={20} className="text-cat-yellow" /> Live-Telematik & Status
          </h3>
          <div className="bg-cat-black text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Live</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Aktueller Standort</div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <Globe size={14} className="text-cat-yellow" /> 48.2082° N, 16.3738° E
                </div>
                <div className="text-[10px] text-gray-600 mt-1">Wien, Österreich</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Kraftstoffstand</div>
                <div className="text-sm font-bold">78% (420 L)</div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-cat-yellow h-full w-[78%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">AdBlue</div>
                <div className="text-sm font-bold">92%</div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-blue-400 h-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Nächster Service</div>
                <div className="text-sm font-bold text-cat-yellow">In 45 Betriebsstunden</div>
                <div className="text-[10px] text-gray-600 mt-1">Geplant: 15.04.2026</div>
              </div>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <Wrench size={20} className="text-cat-yellow" /> Komponenten-Zustand
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {components.map((comp) => (
              <div key={comp.name} className="bg-white border border-cat-border p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm">{comp.name}</span>
                  <span className="text-xs font-bold text-green-600">{comp.status}</span>
                </div>
                <div className="w-full bg-cat-gray h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${comp.health}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-cat-yellow h-full"
                  />
                </div>
                <div className="text-[10px] text-cat-mid mt-2 font-bold uppercase tracking-widest">{comp.health}% Performance</div>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <FileText size={20} className="text-cat-yellow" /> Wartungshistorie
          </h3>
          <div className="bg-white border border-cat-border rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-cat-gray border-b border-cat-border">
                <tr>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-cat-mid">Datum</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-cat-mid">Typ</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-cat-mid">Partner</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest text-cat-mid">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cat-border">
                {maintenanceHistory.map((log, i) => (
                  <tr key={i} className="hover:bg-cat-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{log.date}</td>
                    <td className="px-6 py-4 font-bold">{log.type}</td>
                    <td className="px-6 py-4 text-cat-mid">{log.partner}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-cat-black text-white p-8 rounded-2xl shadow-xl">
            <h4 className="font-display text-lg font-bold mb-6">Maschinenpass Export</h4>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Laden Sie die vollständige Dokumentation als zertifiziertes PDF-Paket herunter.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-cat-yellow text-cat-black py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all">
                <Download size={16} /> Komplett-Paket (.zip)
              </button>
              <button className="w-full border border-white/20 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <FileText size={16} /> Prüfbericht (PDF)
              </button>
            </div>
          </div>

          <div className="bg-white border border-cat-border p-8 rounded-2xl">
            <h4 className="font-display text-lg font-bold mb-4">Interesse?</h4>
            <p className="text-sm text-cat-mid mb-6 leading-relaxed">
              Diese Maschine ist aktuell im Lager Wien verfügbar und kann besichtigt werden.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-cat-black text-white py-3 rounded-lg font-bold text-sm hover:bg-cat-dark transition-all">
                Besichtigung anfragen
              </button>
              <button className="w-full bg-cat-gray text-cat-black py-3 rounded-lg font-bold text-sm hover:bg-cat-border transition-all">
                Finanzierung berechnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PayPerUseDashboard = ({ onBack }: { onBack: () => void }) => {
  const [hours, setHours] = useState(120);
  const ratePerHour = 45;
  const baseRate = 1200;
  
  const totalCost = baseRate + (hours * ratePerHour);

  const usageData = [
    { day: 'Mo', hours: 6.5, health: 98 },
    { day: 'Di', hours: 8.2, health: 97 },
    { day: 'Mi', hours: 7.8, health: 97 },
    { day: 'Do', hours: 10.5, health: 96 },
    { day: 'Fr', hours: 9.0, health: 96 },
    { day: 'Sa', hours: 4.2, health: 95 },
    { day: 'So', hours: 0.5, health: 95 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto py-12 px-6 md:px-10"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-cat-mid hover:text-cat-black mb-4 transition-colors"
          >
            <ArrowLeft size={16} /> Zurück zur Übersicht
          </button>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Pay-per-Use Dashboard</h1>
          <p className="text-cat-mid mt-2">Echtzeit-Kostenkontrolle und Nutzungsanalyse Ihrer Flotte.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">System Online</span>
          </div>
          <button className="p-2 bg-white border border-cat-border rounded-lg hover:bg-cat-gray transition-colors">
            <Settings size={20} className="text-cat-mid" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white border border-cat-border rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-xl font-bold">Kosten-Kalkulator</h3>
            <span className="text-xs font-bold text-cat-mid uppercase tracking-widest">Aktueller Monat</span>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold">Geschätzte Betriebsstunden</label>
                <span className="text-cat-yellow font-display font-bold text-xl">{hours} h</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-2 bg-cat-gray rounded-lg appearance-none cursor-pointer accent-cat-yellow"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-cat-mid uppercase tracking-widest">
                <span>0 h</span>
                <span>250 h</span>
                <span>500 h</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-cat-border">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold mb-1">Grundgebühr</div>
                <div className="text-xl font-bold">€ {baseRate.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-cat-mid font-bold mb-1">Stundensatz</div>
                <div className="text-xl font-bold">€ {ratePerHour} / h</div>
              </div>
              <div className="bg-cat-yellow/10 p-4 rounded-lg">
                <div className="text-[10px] uppercase tracking-widest text-cat-black font-bold mb-1">Gesamtkosten (Est.)</div>
                <div className="text-2xl font-display font-extrabold text-cat-black">€ {totalCost.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cat-black text-white rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold mb-6">Aktiver Vertrag</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Maschine</span>
                <span className="font-bold">CAT 336 Next Gen</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Vertrags-ID</span>
                <span className="font-bold">#PPU-2026-088</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Laufzeit</span>
                <span className="font-bold">12 Monate</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-cat-yellow text-cat-black py-4 rounded-lg font-bold text-sm mt-8 hover:bg-yellow-400 transition-all">
            Vertragsdetails ansehen
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-cat-border rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-lg font-bold">Nutzungs-Trend (7 Tage)</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cat-yellow rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cat-mid">Stunden</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFCD11" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFCD11" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#999' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 800, marginBottom: '4px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#FFCD11" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-cat-border rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold mb-6">Maschinen-Zustand</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-cat-mid">Gesundheits-Index</span>
                  <span className="text-xs font-bold text-emerald-600">95%</span>
                </div>
                <div className="w-full h-1.5 bg-cat-gray rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '95%' }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-cat-gray/30 rounded-xl">
                  <div className="text-[10px] font-bold text-cat-mid uppercase mb-1">Hydraulik</div>
                  <div className="text-sm font-bold text-emerald-600">Optimal</div>
                </div>
                <div className="p-3 bg-cat-gray/30 rounded-xl">
                  <div className="text-[10px] font-bold text-cat-mid uppercase mb-1">Motor</div>
                  <div className="text-sm font-bold text-emerald-600">Gut</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <AlertTriangle size={18} className="text-amber-500" />
                <div className="text-xs font-medium text-amber-800">Nächster Service in 45h fällig.</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-cat-border rounded-2xl p-8">
            <h3 className="font-display text-lg font-bold mb-6">Letzte Aktivitäten</h3>
            <div className="space-y-4">
              {[
                { label: 'Einsatzende Baustelle A1', time: 'Vor 2 Stunden', value: '+6.5 h' },
                { label: 'Tagesbericht generiert', time: 'Gestern, 18:00', value: 'PDF' },
                { label: 'Wartungs-Alert: Hydraulik', time: '18.03.2026', value: 'Info' },
              ].map((act, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-cat-border last:border-none">
                  <div>
                    <div className="text-sm font-bold">{act.label}</div>
                    <div className="text-xs text-cat-mid">{act.time}</div>
                  </div>
                  <span className="text-xs font-bold bg-cat-gray px-2 py-1 rounded">{act.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PresentationSlides = ({ onBack }: { onBack: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Der Weg zur Innovation",
      subtitle: "Prozess & Vision",
      content: (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-cat-yellow/10 border border-cat-yellow/20 p-6 rounded-2xl">
              <h4 className="font-display font-bold text-cat-yellow mb-2 uppercase tracking-widest text-xs">Die Vision</h4>
              <p className="text-gray-300 leading-relaxed">
                ReUsedMachines.at als das "Back Market" für Baumaschinen. Wir transformieren den intransparenten Gebrauchtmarkt in ein zertifiziertes, digitales Ökosystem.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-white mb-2 uppercase tracking-widest text-xs">Kern-Annahmen</h4>
              {[
                "Digitaler Maschinenpass als Single Source of Truth",
                "Standardisierung von 'Refurbished' (CAT Gold Standard)",
                "Pay-per-Use Modelle zur Liquiditätsschonung",
                "Zirkuläre Wertschöpfung (Circular Economy)",
                "Dezentrales Partner-Netzwerk zertifizierter Werkstätten"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-cat-yellow rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <div className="aspect-video bg-cat-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Innovation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-cat-yellow font-display text-4xl font-black mb-2">85%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">CO2-Ersparnis vs. Neuproduktion</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Iteration & Finalisierung",
      subtitle: "Entwicklungsschritte zum Prototyp",
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Branding & Vision", desc: "Festlegung der CAT-Identität (Yellow/Black) und der Kern-Value-Proposition." },
            { step: "02", title: "Funktionale Tiefe", desc: "Implementierung des interaktiven PPU-Kalkulators und der Live-Telematik." },
            { step: "03", title: "Kundenmehrwert", desc: "Ausarbeitung des REUSED-Akronyms und der detaillierten Persona-Journeys." }
          ].map((item) => (
            <div key={item.step} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cat-yellow transition-colors group">
              <div className="text-4xl font-display font-black text-white/10 group-hover:text-cat-yellow/20 transition-colors mb-4">{item.step}</div>
              <h4 className="font-display text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <div className="md:col-span-3 mt-8 p-6 bg-cat-yellow text-cat-black rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-display font-bold">Finaler Entwurf</h4>
              <p className="text-sm font-medium opacity-80">Vollständig funktionaler React-Prototyp mit Echtzeit-Simulation.</p>
            </div>
            <CheckCircle2 size={32} />
          </div>
        </div>
      )
    },
    {
      title: "Live-Demo & Kontakt",
      subtitle: "Scannen oder Klicken zum Testen",
      content: (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-white p-6 rounded-3xl shadow-2xl mb-8">
            <QrCode size={200} className="text-cat-black" />
          </div>
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Nutzen Sie den folgenden Link, um den interaktiven Prototyp direkt im Browser zu testen:
            </p>
            <a 
              href="https://aistudio.google.com/apps/30567357-0f0b-43da-bcef-c31cd0ab717e?showPreview=true&showAssistant=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cat-yellow text-cat-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all group"
            >
              Prototyp öffnen
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-cat-black text-white flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full py-12 px-6 md:px-10 flex flex-col">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <div className="text-cat-yellow text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
              Slide {currentSlide + 1} / {slides.length}
            </div>
            <h1 className="font-display text-5xl font-black tracking-tight mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-500 font-medium">{slides[currentSlide].subtitle}</p>
          </div>
          <button 
            onClick={onBack}
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-12 bg-cat-yellow' : 'w-4 bg-white/10'}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button 
              disabled={currentSlide === 0}
              onClick={() => setCurrentSlide(s => s - 1)}
              className="px-6 py-3 border border-white/10 rounded-xl font-bold disabled:opacity-30 hover:bg-white/5 transition-all"
            >
              Zurück
            </button>
            <button 
              onClick={() => currentSlide === slides.length - 1 ? onBack() : setCurrentSlide(s => s + 1)}
              className="px-8 py-3 bg-cat-yellow text-cat-black rounded-xl font-bold hover:bg-yellow-400 transition-all"
            >
              {currentSlide === slides.length - 1 ? "Präsentation beenden" : "Nächste Slide"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserTestingKit = ({ onBack }: { onBack: () => void }) => {
  const handleDownload = (type: 'questionnaire' | 'protocol' | 'onepager') => {
    let content = '';
    let filename = '';

    switch (type) {
      case 'questionnaire':
        filename = 'Fragebogen_1.md';
        content = `# Fragebogen: Nutzertest ReUsedMachines.at (Laien-Test)

## 1. Einleitung & Erster Eindruck
* Name der Testperson: __________________________
* Datum: __________________________
* Haben Sie beruflich mit Baumaschinen zu tun? [ ] Ja [ ] Nein
* Erster Eindruck der Homepage (Design & Klarheit):
  [ ] Sehr gut [ ] Gut [ ] Neutral [ ] Eher verwirrend

---

## 2. Bedienbarkeit & Navigation (Die 5 Test-Aufgaben)
*Bitte führen Sie die Aufgaben durch und bewerten Sie, wie leicht die Funktion zu FINDEN war (1 = sofort gefunden, 5 = gar nicht gefunden).*

### Aufgabe 1: Den "Zustand" einer Maschine prüfen
*Suchen Sie Informationen darüber, wie 'gesund' ein Bagger (z.B. CAT 336) aktuell ist.*
* Findbarkeit: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
* Kommentar: ________________________________________________________

### Aufgabe 2: Kosten berechnen
*Finden Sie heraus, was die Maschine kostet, wenn man sie nur für ein paar Stunden mietet (Kalkulator).*
* Findbarkeit: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
* Kommentar: ________________________________________________________

### Aufgabe 3: Die Bedeutung von "REUSED" verstehen
*Suchen Sie die Erklärung für die Buchstaben im Namen 'REUSED'.*
* Findbarkeit: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
* Kommentar: ________________________________________________________

### Aufgabe 4: Hilfe & Werkstätten finden
*Wo würden Sie suchen, wenn Sie Hilfe bei einer Panne oder einen Partner vor Ort brauchen?*
* Findbarkeit: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
* Kommentar: ________________________________________________________

### Aufgabe 5: Umwelt & Zertifikate
*Finden Sie Informationen zu Umweltschutz (CO2) oder offiziellen Prüf-Zertifikaten.*
* Findbarkeit: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
* Kommentar: ________________________________________________________

---

## 3. Abschlussfragen
1. Welche Funktion war am einfachsten zu finden? __________________________
2. Welche Funktion haben Sie fast übersehen oder lange gesucht? __________________________
3. Verstehen Sie nach 5 Minuten auf der Seite, was ReUsedMachines.at genau anbietet?
   [ ] Ja, absolut [ ] Teilweise [ ] Nein, zu kompliziert
4. Was würden Sie auf der Startseite ändern, damit man sich schneller zurechtfindet?
   __________________________________________________________________________

---
*Vielen Dank für Ihre Hilfe beim Testen!*`;
        break;
      case 'protocol':
        filename = 'Testprotokoll_Vorlage.md';
        content = `# Testprotokoll: User Interview ReUsedMachines.at

## 1. Basisdaten
* Teilnehmer-ID: __________________________
* Kontext des Interviews (Ort, Situation): __________________________
* Datum & Uhrzeit: __________________________

## 2. Beobachtungsprotokoll
*Aufgaben-Durchführung: Wo gab es Probleme?*
* **Aufgabe 1 (Zustand):** [ ] Klicks: ____ | [ ] Zögern | [ ] Fehlversuch
* **Aufgabe 2 (Kosten):** [ ] Klicks: ____ | [ ] Zögern | [ ] Fehlversuch
* **Aufgabe 3 (REUSED):** [ ] Klicks: ____ | [ ] Zögern | [ ] Fehlversuch
* **Aufgabe 4 (Hilfe):** [ ] Klicks: ____ | [ ] Zögern | [ ] Fehlversuch
* **Aufgabe 5 (Umwelt):** [ ] Klicks: ____ | [ ] Zögern | [ ] Fehlversuch

## 3. Qualitative Erkenntnisse
* **Key-Quotes (Wörtliche Aussagen):**
  1. "________________________________________________________"
  2. "________________________________________________________"
  3. "________________________________________________________"

* **Stimmungsbarometer (Emotionaler Verlauf):**
  [ ] Frustriert [ ] Skeptisch [ ] Neutral [ ] Interessiert [ ] Begeistert

## 4. Analyse kritischer Fehler
* **Kritische Fehler:** Wo bricht der Nutzer den Prozess ab?
  __________________________________________________________________________
  __________________________________________________________________________`;
        break;
      case 'onepager':
        filename = 'Testergebnisse_Onepager.md';
        content = `# One-Pager: Konsolidierte Testergebnisse

## 1. Management Summary
* **Kernaussage der Testreihe:**
  __________________________________________________________________________
  __________________________________________________________________________

## 2. Hypothesen-Check
* **Validierung:** Welche Annahmen wurden bestätigt?
  - [ ] ________________________________________________________
  - [ ] ________________________________________________________
* **Pivot/Iterate:** Welche Annahmen wurden widerlegt?
  - [ ] ________________________________________________________
  - [ ] ________________________________________________________

## 3. Handlungsempfehlungen
* **Top 3 Next Steps (Konkrete Design-Anpassungen):**
  1. ________________________________________________________
  2. ________________________________________________________
  3. ________________________________________________________

## 4. Strategischer Ausblick
* **Impact:** Wie verändert das Feedback unser Geschäftsmodell?
  __________________________________________________________________________
  __________________________________________________________________________`;
        break;
    }

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sections: { title: string, icon: React.ReactNode, type: 'questionnaire' | 'protocol' | 'onepager', content: string[] }[] = [
    {
      title: "1. Der Gruppen-Fragebogen",
      type: 'questionnaire',
      icon: <FileText className="text-cat-yellow" />,
      content: [
        "Demografie: Rolle in der Branche & Fuhrparkgröße",
        "Aufgaben-Check: Erfolg & Schwierigkeit der 5 Test-Aufgaben",
        "Vertrauens-Check: Akzeptanz von 'Refurbished' vs. Neu",
        "Zahlungsbereitschaft: Feedback zum Pay-per-Use Modell",
        "Nachhaltigkeit: Relevanz der CO2-Ersparnis (Skala 1-10)"
      ]
    },
    {
      title: "2. Das Testprotokoll (Vorlage)",
      type: 'protocol',
      icon: <Activity className="text-cat-yellow" />,
      content: [
        "Teilnehmer-ID & Kontext des Interviews",
        "Beobachtungsprotokoll: Klicks, Zögern, Fehlversuche",
        "Key-Quotes: Wörtliche Aussagen der Testpersonen",
        "Stimmungsbarometer: Emotionaler Verlauf der Journey",
        "Kritische Fehler: Wo bricht der Nutzer den Prozess ab?"
      ]
    },
    {
      title: "3. Der One-Pager (Ergebnisse)",
      type: 'onepager',
      icon: <Award className="text-cat-yellow" />,
      content: [
        "Management Summary: Kernaussage der Testreihe",
        "Validierung: Welche Annahmen wurden bestätigt?",
        "Pivot/Iterate: Welche Annahmen wurden widerlegt?",
        "Top 3 Next Steps: Konkrete Design-Anpassungen",
        "Impact: Wie verändert das Feedback unser Geschäftsmodell?"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-10">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold text-cat-mid hover:text-cat-black mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Zurück
      </button>
      
      <div className="mb-12">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">User Testing Kit</h1>
        <p className="text-cat-mid mt-2">Ressourcen für die Durchführung und Auswertung der Nutzerinterviews.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {sections.map((section, i) => (
          <div key={i} className="bg-white border border-cat-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-cat-black rounded-xl flex items-center justify-center mb-6">
              {section.icon}
            </div>
            <h3 className="font-display text-xl font-bold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.content.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-cat-mid leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-cat-yellow rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleDownload(section.type)}
              className="w-full mt-8 py-3 border border-cat-black rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-cat-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Download size={14} /> Vorlage herunterladen
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-cat-black text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-bold mb-2">Bereit für die Interviews?</h3>
          <p className="text-gray-500 text-sm">
            Jeder Student führt ein 20-30 minütiges Interview. Nutzen Sie den digitalen Prototypen als Grundlage für das "Think Aloud" Protokoll.
          </p>
        </div>
        <button 
          onClick={() => handleDownload('questionnaire')}
          className="bg-cat-yellow text-cat-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all whitespace-nowrap flex items-center gap-2"
        >
          <Download size={18} /> Fragebogen herunterladen
        </button>
      </div>
    </div>
  );
};

const DocumentationSection = () => {
  const docs = [
    { icon: <FileText size={20} />, title: 'Zielvorgaben & Dokumentationspflicht', desc: 'Leitfaden für Prüfberichte, Reparatur- und Wartungsarbeiten' },
    { icon: <Layers size={20} />, title: 'Maschinen-ID & Identifikation', desc: 'Eindeutige ID jeder Maschine, rückverfolgbar und exportierbar' },
    { icon: <Globe size={20} />, title: 'Normen & ISO-Konformität', desc: 'ISO-Normen und EU-Konformitätsnachweise je Maschinentyp' },
    { icon: <Truck size={20} />, title: 'Ersatzteile – Datenbankabfrage', desc: 'Kompatible Ersatzteile für Österreich, Deutschland und weitere Länder' },
    { icon: <ShieldCheck size={20} />, title: 'Händlerprogramme', desc: 'Dokumentierte Programme für zertifizierte Partner und Werkstätten' },
    { icon: <Search size={20} />, title: 'Kleine Maschinen (bis 3,5 t)', desc: 'Spezieller Bereich für kompakte Baumaschinen und Anbaugeräte' },
  ];

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight">Dokumentationspflicht abrufen</h2>
          <p className="text-cat-mid mt-2">Gesetzlich vorgeschriebene Nachweise, Normen und Händlerprogramme zentral verfügbar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div key={doc.title} className="bg-white border-1.5 border-cat-border p-6 rounded-xl flex gap-5 hover:border-cat-yellow transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-cat-yellow rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {doc.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-cat-dark">{doc.title}</h4>
                <p className="text-xs text-cat-mid mt-1 leading-relaxed">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white border-t border-cat-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Become a Caterpillar Partner</h2>
            <p className="text-cat-mid mt-2">Händler, Werkstätten und Großkunden profitieren von exklusiven Programmen und Zertifizierungen.</p>
          </div>
          <a href="#" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Mehr erfahren →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cat-gray border-1.5 border-cat-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-cat-yellow" />
              <h3 className="font-display text-xl font-bold">Schulungen & Zertifizierungen</h3>
            </div>
            <p className="text-sm text-cat-mid leading-relaxed mb-8">
              Offizielle Caterpillar-Schulungen für Werkstätten, Techniker und Händlerbetriebe in Österreich und Deutschland.
            </p>
            <div className="space-y-3">
              {['Zertifizierte Werkstatt werden', 'Techniker-Schulungen buchen', 'Dealer-Zertifikat abrufen'].map(item => (
                <div key={item} className="bg-white border border-cat-border px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between hover:border-cat-yellow cursor-pointer transition-colors">
                  {item}
                  <ChevronRight size={16} className="text-cat-mid" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cat-gray border-1.5 border-cat-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={24} className="text-cat-yellow" />
              <h3 className="font-display text-xl font-bold">Loyalty-Programm für Stammkunden</h3>
            </div>
            <p className="text-sm text-cat-mid leading-relaxed mb-8">
              Attraktive Konditionen, Rückvergütungen und Prioritätszugang zu neuen Maschinen für registrierte Stammpartner.
            </p>
            <div className="space-y-3">
              {['Loyalty-Vorteile ansehen', 'Als Stammkunde registrieren', 'Punktestand einsehen'].map(item => (
                <div key={item} className="bg-white border border-cat-border px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between hover:border-cat-yellow cursor-pointer transition-colors">
                  {item}
                  <ChevronRight size={16} className="text-cat-mid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cat-black text-gray-500 py-12 px-6 md:px-10 border-t-3 border-cat-yellow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo size="sm" light />
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-white transition-colors">AGB</a>
          <a href="#" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-700">
          © 2026 ReUsedMachines.at
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState('home');

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero />
            <StatsBar />
            <BrandValues />
            
            <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight">Unsere Angebote</h2>
                  <p className="text-cat-mid mt-2">Kaufen, mieten oder leasen – flexibel nach Ihrem Bedarf.</p>
                </div>
                <a href="#" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Alle Angebote →</a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PillarCard 
                  badge="Refurbished"
                  title="Caterpillar Katalog"
                  desc="Generalüberholte CAT-Maschinen mit Preis, Digitaldaten und Garantie."
                  items={[
                    'Produktliste & Preise',
                    'Digitalen Pass abrufen',
                    'Gewährleistung prüfen',
                    'Großhändler-Bereich',
                    'Zertifizierte Dealer',
                    'Privatkunden-Bereich'
                  ]}
                  cta="Zum Refurbished-Katalog"
                  colorClass="bg-cat-yellow text-cat-black"
                />
                <PillarCard 
                  badge="Kaufen & Mieten"
                  title="Produktkatalog"
                  desc="Neue und gebrauchte Maschinen – Pay-per-use, Flat-rate oder Kauf."
                  items={[
                    'Preisliste & Angebote',
                    'Gewährleistungsabstimmung',
                    'Pay-per-use Modell',
                    'Mieten – Flat-rate',
                    'Kaufen auf Raten',
                    'Produkte im Angebot'
                  ]}
                  cta="Angebote ansehen"
                  colorClass="bg-blue-100 text-blue-800"
                />
                <PillarCard 
                  badge="Mietgeräte"
                  title="Pay-per-use & Miete"
                  desc="Verfügbare Mietgeräte mit Mietpreisen, Bedingungen und Vertragsabschluss."
                  items={[
                    'Verfügbare Mietgeräte',
                    'Mietpreise & Konditionen',
                    'Mietbedingungen & -vertrag',
                    'Online buchen',
                    'Bezahlen / Abbrechen'
                  ]}
                  cta="Mietgeräte ansehen"
                  colorClass="bg-orange-100 text-orange-800"
                />
              </div>
            </section>

            <MachinePass onClick={() => setView('machine-pass')} />
            <DocumentationSection />
            <PartnerSection />

            <section className="bg-cat-black py-20 px-6 md:px-10">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-white">Zertifizierung & Normen</h2>
                  <p className="text-gray-500 mt-2">Transparenz über Prüfstandards und Qualitätsnachweise.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <FileText size={24} />, title: 'ISO-Normenkonformität', desc: 'Alle Maschinen werden nach relevanten ISO-Standards geprüft und dokumentiert. Nachweise auf Knopfdruck verfügbar.' },
                    { icon: <HardHat size={24} />, title: 'Werkstatt-Zertifizierung', desc: 'Nur zertifizierte CAT-Partnerwerkstätten dürfen Refurbishing-Arbeiten durchführen und Pässe ausstellen.' },
                    { icon: <Info size={24} />, title: 'Händlerprogramme', desc: 'Dokumentierte Händlerprogramme für Groß- und Privatkunden mit klaren Konditionen und Prüfpflichten.' }
                  ].map((item) => (
                    <div key={item.title} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                      <div className="w-12 h-12 bg-cat-yellow rounded-xl flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h4 className="font-display text-lg font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'machine-pass':
        return <MachinePassDetail onBack={() => setView('home')} />;
      case 'pay-per-use':
        return <PayPerUseDashboard onBack={() => setView('home')} />;
      case 'presentation':
        return <PresentationSlides onBack={() => setView('home')} />;
      case 'testing':
        return <UserTestingKit onBack={() => setView('home')} />;
      default:
        return <div className="py-20 text-center font-bold">Coming Soon: {view}</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onViewChange={setView} currentView={view} />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}
