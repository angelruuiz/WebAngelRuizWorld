'use client';

import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun, Waves, Moon, MapPin, Car, PartyPopper, Umbrella, Sparkles,
  ChevronLeft, ChevronRight, Clock, Mountain, AlertTriangle,
  Wallet, CheckSquare, Siren, CalendarDays, Plus, Trash2,
  MoonStar, SunMedium, Navigation, Phone, Hospital,
  Home as HomeIcon, Star, Sunrise, Sunset, Droplets,
  FileText, ChevronDown, RotateCcw, ArrowRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const DAYS = [
  {
    date: '2026-07-27', dow: 'LUN', full: 'Lunes',
    title: 'Llegada y aclimatación', type: 'chill',
    beach: 'Playa del Zapillo o Nueva Almería — a 15 min andando del centro, chiringuitos en el paseo.',
    plan: 'Check-in en el apartamento, compra rápida en el súper y, por la noche, tapeo suave por las Cuatro Calles (Plaza Masnou, Calle San Pedro) para situaros. Tapa gratis con cada consumición.',
    party: null,
    tip: 'Sin fiesta fuerte hoy — guardad pilas para el miércoles.',
    mapQuery: 'Playa del Zapillo, Almería',
  },
  {
    date: '2026-07-28', dow: 'MAR', full: 'Martes',
    title: 'Cabo de Gata: Mónsul y Genoveses', type: 'beach',
    beach: 'Playa de Mónsul y Playa de los Genoveses, dentro del Parque Natural. Aguas turquesas y paisaje volcánico — de las mejores playas de España.',
    plan: 'Salida temprano en coche (el parking se llena rápido y el acceso está controlado en verano). Comida en San José. Vuelta a Almería al atardecer.',
    party: null,
    tip: 'Llevad nevera, sombrilla y agua — apenas hay chiringuitos en la zona.',
    mapQuery: 'Playa de los Genoveses, Cabo de Gata',
  },
  {
    date: '2026-07-29', dow: 'MIÉ', full: 'Miércoles',
    title: 'Fiesta #1 · Tanteo en las Cuatro Calles', type: 'party',
    beach: 'Mañana de playa tranquila (Zapillo o Aguadulce) para recargar antes de la noche.',
    plan: 'Tapeo-copeo por Plaza Masnou / Calle San Pedro antes de entrar en discoteca. Noche para tantear el ambiente sin pasaros — mañana toca descanso.',
    party: [
      { name: 'La Clásica', loc: 'Poeta Villaespesa, 4', desc: 'Clásico de la noche almeriense, decoración elegante, abierta hasta las 7 a. m. Entrada gratis antes de la 1 a. m.' },
      { name: 'Classical Club Almería', loc: 'Centro', desc: 'Música actual y comercial, ambiente animado durante todo el verano.' },
      { name: 'Premium Black', loc: 'Marqués de Comillas, 12', desc: 'Más pequeño, público variado — buen plan B si La Clásica está a tope.' },
    ],
    tip: 'Noche de tanteo, no de excesos: mañana recuperáis para el finde fuerte.',
    mapQuery: 'Plaza Masnou, Almería',
  },
  {
    date: '2026-07-30', dow: 'JUE', full: 'Jueves',
    title: 'Recuperación total', type: 'chill',
    beach: 'Playa suave, siesta e hidratación.',
    plan: 'Turismo ligero: Alcazaba de Almería (vistas espectaculares) y/o Oasys MiniHollywood. Cena tranquila y a dormir pronto — el finde viene fuerte.',
    party: null,
    tip: 'Día para llegar a tope al viernes y sábado.',
    mapQuery: 'Alcazaba de Almería',
  },
  {
    date: '2026-07-31', dow: 'VIE', full: 'Viernes',
    title: 'Fiesta #2 · Aguadulce', type: 'party',
    beach: 'Playa de Aguadulce por la mañana y tardeo en el paseo marítimo (palmeras, ambiente animado todo el día).',
    plan: 'Tarde de sol y copas en los chiringuitos de Aguadulce antes de que caiga la noche.',
    party: [
      { name: 'Antídoto Club', loc: 'Aguadulce', desc: 'Sesiones electrónicas / underground, suele sonar los jueves — comprobad su Instagram por si hay evento este viernes.' },
      { name: 'Bribón del Puerto', loc: 'Aguadulce, frente al puerto', desc: 'Ambiente desenfadado, buen plan B si el anterior no cuadra esa noche.' },
      { name: 'La Clásica / Classical Club', loc: 'Almería capital', desc: 'Vuelta segura al centro, a 10 min en coche, si preferís lo de siempre.' },
    ],
    tip: 'Confirmad el cartel de la semana en Instagram antes de salir de casa.',
    mapQuery: 'Playa de Aguadulce, Almería',
  },
  {
    date: '2026-08-01', dow: 'SÁB', full: 'Sábado',
    title: 'Fiesta #3 · Mojácar, la noche grande', type: 'party',
    beach: 'Día entero en Mojácar (El Cantal / Puerto Rey) — beach clubs abiertos desde mediodía hasta el amanecer sin cambiar de sitio.',
    plan: 'Comida y tardeo en el propio beach club dejando que la tarde se convierta en noche de forma natural. La zona con más ambiente joven de toda la provincia — la mejor apuesta para ligar.',
    party: [
      { name: 'Mandala Beach Mojácar', loc: 'Paseo del Mediterráneo, playa El Cantal', desc: 'El más grande y conocido del litoral almeriense: copas de día, discoteca con DJs hasta las 6 a. m.' },
      { name: 'Azúcar Mojácar', loc: 'Mojácar Playa', desc: 'Público joven, música latina y comercial, ideal para bailar sin formalidades.' },
      { name: 'Moma Mojácar', loc: 'Paseo marítimo', desc: 'Música electrónica, buena opción para cerrar la noche si os movéis de sitio.' },
    ],
    tip: 'Con coche es fácil moverse entre los 3 locales — nombrad un conductor o volved en VTC si bebéis.',
    mapQuery: 'Mandala Beach Mojácar',
  },
  {
    date: '2026-08-02', dow: 'DOM', full: 'Domingo',
    title: 'Recuperación + Roquetas de Mar', type: 'chill',
    beach: 'Playa relax por la mañana.',
    plan: 'Tarde en Roquetas de Mar: paseo marítimo, puerto deportivo, comida tranquila con vistas al mar.',
    party: null,
    tip: 'Sin fiesta — el cuerpo lo necesita tras Mojácar.',
    mapQuery: 'Roquetas de Mar, paseo marítimo',
  },
  {
    date: '2026-08-03', dow: 'LUN', full: 'Lunes',
    title: 'Vuelta a casa', type: 'chill',
    beach: 'Playa corta de despedida por la mañana.',
    plan: 'Recogida del apartamento, última comida en Almería capital y vuelta.',
    party: null,
    tip: 'Buen viaje de vuelta — ¡nos vemos en la próxima!',
    mapQuery: 'Almería centro',
  },
];

const THEME = {
  chill: { accent: '#12897B', accentSoft: '#DCEFEC', icon: Waves, label: 'Día tranquilo' },
  beach: { accent: '#E8A93B', accentSoft: '#FBEBD2', icon: Umbrella, label: 'Día de playa' },
  party: { accent: '#FF6B4A', accentSoft: '#FFE2D9', icon: PartyPopper, label: 'Noche de fiesta' },
};



const DEFAULT_CHECKLIST_DATA = [
  { cat: '👕 Ropa', items: ['Bañador', 'Ropa de fiesta', 'Camisetas', 'Pantalones cortos', 'Ropa interior (7 uds)', 'Pijama'] },
  { cat: '🏖️ Playa', items: ['Toalla de playa', 'Protector solar SPF50', 'Gafas de sol', 'Chanclas', 'After-sun', 'Gorra / sombrero'] },
  { cat: '📄 Docs', items: ['DNI', 'Tarjeta sanitaria', 'Tarjetas de crédito', 'Efectivo (100-150€)'] },
  { cat: '🎉 Fiesta', items: ['Zapatos de salir', 'Perfume / colonia', 'Gel / gomina', 'Cinturón'] },
  { cat: '🔌 Tech', items: ['Cargador móvil', 'Power bank', 'Auriculares', 'Cable USB-C'] },
  { cat: '💊 Salud', items: ['Medicamentos personales', 'Ibuprofeno / paracetamol', 'Protector labial', 'Repelente mosquitos'] },
];

const WEATHER_DATA = [
  { date: '2026-07-27', high: 32, low: 22, code: 0, sunrise: '07:12', sunset: '21:28', water: 24 },
  { date: '2026-07-28', high: 33, low: 23, code: 0, sunrise: '07:13', sunset: '21:27', water: 24 },
  { date: '2026-07-29', high: 31, low: 22, code: 1, sunrise: '07:14', sunset: '21:26', water: 24 },
  { date: '2026-07-30', high: 33, low: 23, code: 0, sunrise: '07:14', sunset: '21:25', water: 25 },
  { date: '2026-07-31', high: 34, low: 24, code: 0, sunrise: '07:15', sunset: '21:24', water: 25 },
  { date: '2026-08-01', high: 33, low: 23, code: 0, sunrise: '07:16', sunset: '21:23', water: 25 },
  { date: '2026-08-02', high: 32, low: 22, code: 2, sunrise: '07:17', sunset: '21:22', water: 25 },
  { date: '2026-08-03', high: 31, low: 22, code: 0, sunrise: '07:17', sunset: '21:21', water: 24 },
];

const WMO_ICON = { 0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️' };

function buildDefaultChecklist() {
  return DEFAULT_CHECKLIST_DATA.flatMap((g) =>
    g.items.map((label) => ({ label, cat: g.cat, done: false }))
  );
}

/* ═══════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════ */

function useLocalStorage(key, init) {
  const [val, setVal] = useState(init);
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setVal(JSON.parse(raw));
    } catch { /* first time */ }
    loaded.current = true;
  }, [key]);

  const set = useCallback((updater) => {
    setVal((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* quota */ }
      return next;
    });
  }, [key]);

  return [val, set];
}

/* ═══════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════ */

function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function mapsUrl(q) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}



/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════ */

const fadeSlide = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

const listItemVariant = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 24, transition: { duration: 0.2 } },
};

/* ═══════════════════════════════════════════════════════════
   COUNTDOWN COMPONENT
   ═══════════════════════════════════════════════════════════ */

function CountdownTimer({ targetDate, accent }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = targetDate - now;
  if (diff <= 0) return null;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { label: 'DÍAS', value: d },
    { label: 'HORAS', value: h },
    { label: 'MIN', value: m },
    { label: 'SEG', value: s },
  ];

  return (
    <motion.div
      className="neu"
      style={{ borderRadius: 24, padding: 22, marginBottom: 16, textAlign: 'center' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <p className="display-font" style={{ fontSize: 12, letterSpacing: 3, color: accent, fontWeight: 700, marginBottom: 14 }}>
        ⏳ CUENTA ATRÁS
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {units.map((u) => (
          <div key={u.label} style={{ textAlign: 'center' }}>
            <div
              className="neu-inset countdown-digit display-font countdown-box"
              style={{
                width: 58, height: 58, borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 800, color: 'var(--text)',
              }}
            >
              <motion.span
                key={u.value}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {String(u.value).padStart(2, '0')}
              </motion.span>
            </div>
            <p style={{ fontSize: 9, fontWeight: 700, color: 'var(--muted)', marginTop: 6, letterSpacing: 1.5 }}>
              {u.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function AlmeriaPage() {
  /* ── Mounting guard ─────────────────────────────────── */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* ── Core state ─────────────────────────────────────── */
  const todayISO = useMemo(() => toISODate(new Date()), []);
  const [darkMode, setDarkMode] = useLocalStorage('almeria-dark', false);
  const [tab, setTab] = useState('hoy');

  const defaultIndex = useMemo(() => {
    const idx = DAYS.findIndex((d) => d.date === todayISO);
    if (idx !== -1) return idx;
    const first = new Date(DAYS[0].date + 'T00:00:00');
    const now = new Date(todayISO + 'T00:00:00');
    if (now < first) return 0;
    return DAYS.length - 1;
  }, [todayISO]);

  const [selected, setSelected] = useState(defaultIndex);
  const day = DAYS[selected];
  const theme = THEME[day.type];
  const Icon = theme.icon;
  const isToday = day.date === todayISO;
  const weather = WEATHER_DATA.find((w) => w.date === day.date);

  const daysUntilTrip = useMemo(() => {
    const first = new Date(DAYS[0].date + 'T00:00:00');
    const now = new Date(todayISO + 'T00:00:00');
    return Math.round((first - now) / 86400000);
  }, [todayISO]);

  const tripProgress = useMemo(() => {
    const first = new Date(DAYS[0].date + 'T00:00:00');
    const last = new Date(DAYS[DAYS.length - 1].date + 'T00:00:00');
    const now = new Date(todayISO + 'T00:00:00');
    if (now < first) return 0;
    if (now > last) return 100;
    return Math.round(((now - first) / (last - first)) * 100);
  }, [todayISO]);

  /* ── Palette ────────────────────────────────────────── */
  const palette = darkMode
    ? { bg: '#26262B', shadowDark: '#1B1B1F', shadowLight: '#313138', text: '#EDEAE3', muted: '#9C9689', body: '#D8D3C8' }
    : { bg: '#E7E1D6', shadowDark: '#c7c0b2', shadowLight: '#ffffff', text: '#26313F', muted: '#8A8272', body: '#3A3A3A' };

  const themeVars = {
    '--bg': palette.bg, '--shadow-dark': palette.shadowDark, '--shadow-light': palette.shadowLight,
    '--text': palette.text, '--muted': palette.muted, '--body': palette.body,
  };



  /* ── Checklist state ────────────────────────────────── */
  const [checklist, setChecklist] = useLocalStorage('almeria-checklist-2026', buildDefaultChecklist());
  const [newItem, setNewItem] = useState('');
  const [openCats, setOpenCats] = useState({});

  const checklistCategories = useMemo(() => {
    const cats = [...new Set(checklist.map((i) => i.cat))];
    return cats.map((cat) => {
      const items = checklist.filter((i) => i.cat === cat);
      const done = items.filter((i) => i.done).length;
      return { cat, items, done, total: items.length };
    });
  }, [checklist]);

  const totalDone = checklist.filter((i) => i.done).length;
  const totalItems = checklist.length;
  const checklistPct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  const toggleCat = (cat) => setOpenCats((prev) => ({ ...prev, [cat]: !prev[cat] }));

  const toggleItem = (label, cat) => {
    setChecklist((prev) => prev.map((i) =>
      i.label === label && i.cat === cat ? { ...i, done: !i.done } : i
    ));
  };

  const addCheckItem = () => {
    if (!newItem.trim()) return;
    setChecklist((prev) => [...prev, { label: newItem.trim(), cat: '📦 Otros', done: false }]);
    setNewItem('');
  };

  const removeCheckItem = (label, cat) => {
    setChecklist((prev) => prev.filter((i) => !(i.label === label && i.cat === cat)));
  };

  const resetChecklist = () => setChecklist(buildDefaultChecklist());

  /* ── Notes state ────────────────────────────────────── */
  const [notes, setNotes] = useLocalStorage('almeria-notes-2026', []);
  const [newNote, setNewNote] = useState('');
  const [diary, setDiary] = useLocalStorage('almeria-diary-2026', {});

  const addNote = () => {
    if (!newNote.trim()) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} · ${now.getDate()} ${now.toLocaleDateString('es-ES', { month: 'short' })}`;
    setNotes((prev) => [{ id: Date.now(), text: newNote.trim(), time }, ...prev]);
    setNewNote('');
  };

  const removeNote = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));

  const setDayRating = (date, stars) => {
    setDiary((prev) => ({ ...prev, [date]: { ...prev[date], stars } }));
  };

  const setDayMemory = (date, memory) => {
    setDiary((prev) => ({ ...prev, [date]: { ...prev[date], memory } }));
  };

  /* ── Swipe handling ─────────────────────────────────── */
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0 && selected < DAYS.length - 1) setSelected((s) => s + 1);
      if (diff < 0 && selected > 0) setSelected((s) => s - 1);
    }
    touchStartX.current = null;
  };

  /* ── Day selector scroll ref ────────────────────────── */
  const daySelectorRef = useRef(null);
  useEffect(() => {
    if (daySelectorRef.current) {
      const btn = daySelectorRef.current.children[selected];
      if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selected]);

  /* ── Tabs ────────────────────────────────────────────── */
  const TABS = [
    { id: 'hoy', label: 'Hoy', icon: CalendarDays },
    { id: 'checklist', label: 'Maleta', icon: CheckSquare },
    { id: 'notas', label: 'Notas', icon: FileText },
    { id: 'sos', label: 'SOS', icon: Siren },
  ];

  /* ── Loading screen ─────────────────────────────────── */
  if (!mounted) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', minHeight: '100dvh', background: '#E7E1D6',
        flexDirection: 'column', gap: 16,
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <Sun size={36} color="#E8A93B" />
        </motion.div>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#8A8272', fontWeight: 600, letterSpacing: 1 }}>
          CARGANDO...
        </p>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════ */

  return (
    <div className="almeria-app" style={{ ...themeVars, background: 'var(--bg)' }}>
      <div className="flex justify-center px-4 py-8" style={{ minHeight: '100vh', minHeight: '100dvh' }}>
        <div className="w-full" style={{ maxWidth: 430, paddingBottom: 100 }}>

          {/* ── Header ────────────────────────────────── */}
          <div className="flex items-center justify-between mb-6 px-1">
            <div>
              <p className="display-font" style={{ fontSize: 12, letterSpacing: 2.5, color: 'var(--muted)', fontWeight: 600 }}>
                ALMERÍA · VERANO 2026
              </p>
              <h1 className="display-font" style={{ fontSize: 26, color: 'var(--text)', fontWeight: 800, lineHeight: 1.1 }}>
                Plan del viaje
              </h1>
              {tripProgress > 0 && tripProgress < 100 && (
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div className="neu-inset" style={{ flex: 1, height: 6, borderRadius: 3 }}>
                    <div className="progress-fill" style={{ width: `${tripProgress}%`, height: '100%', background: theme.accent, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: theme.accent }}>{tripProgress}%</span>
                </div>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode((v) => !v)}
              className="neu-pill touch-feedback"
              style={{ width: 46, height: 46, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Cambiar tema"
            >
              {darkMode ? <SunMedium size={20} color={theme.accent} /> : <MoonStar size={20} color={theme.accent} />}
            </motion.button>
          </div>

          {/* ── Tab Content ───────────────────────────── */}
          <AnimatePresence mode="wait">

            {/* ═══════ TAB: HOY ═══════ */}
            {tab === 'hoy' && (
              <motion.div key="hoy" {...fadeSlide}>

                {/* Countdown */}
                {daysUntilTrip > 0 && (
                  <CountdownTimer targetDate={new Date(DAYS[0].date + 'T00:00:00')} accent={theme.accent} />
                )}

                {/* Days until trip info (close range) */}
                {daysUntilTrip > 0 && daysUntilTrip <= 3 && (
                  <div className="neu-inset flex items-center gap-3 mb-5" style={{ borderRadius: 18, padding: '12px 16px' }}>
                    <Sparkles size={18} color={theme.accent} className="animate-pulse-soft" />
                    <p style={{ fontSize: 13, color: 'var(--body)' }}>
                      ¡Solo <strong style={{ color: 'var(--text)' }}>{daysUntilTrip}</strong> {daysUntilTrip === 1 ? 'día' : 'días'} para Almería! 🏖️
                    </p>
                  </div>
                )}

                {/* Day selector strip */}
                <div ref={daySelectorRef} className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1">
                  {DAYS.map((d, i) => {
                    const dTheme = THEME[d.type];
                    const active = i === selected;
                    const isRealToday = d.date === todayISO;
                    return (
                      <motion.button
                        key={d.date}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setSelected(i)}
                        className="neu-pill touch-feedback"
                        style={{
                          minWidth: 58, borderRadius: 16, padding: '10px 0',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                          border: active ? `2px solid ${dTheme.accent}` : '2px solid transparent',
                          boxShadow: active ? 'inset 3px 3px 6px var(--shadow-dark), inset -3px -3px 6px var(--shadow-light)' : undefined,
                        }}
                      >
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)' }}>{d.dow}</span>
                        <span className="display-font" style={{ fontSize: 15, fontWeight: 800, color: active ? dTheme.accent : 'var(--text)' }}>
                          {new Date(d.date + 'T12:00:00').getDate()}
                        </span>
                        {isRealToday && (
                          <motion.span
                            layoutId="today-dot"
                            style={{ width: 5, height: 5, borderRadius: 999, background: dTheme.accent }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Day card */}
                <div
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={day.date}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="neu" style={{ borderRadius: 28, padding: 22, marginBottom: 16 }}>
                        {/* Day header */}
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div style={{
                              width: 40, height: 40, borderRadius: 14,
                              background: theme.accentSoft,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <Icon size={20} color={theme.accent} />
                            </div>
                            <div>
                              <p style={{ fontSize: 11, fontWeight: 700, color: theme.accent, letterSpacing: 1 }}>
                                {theme.label.toUpperCase()}
                              </p>
                              <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                                {day.full} · {new Date(day.date + 'T12:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
                              </p>
                            </div>
                          </div>
                          {isToday && (
                            <motion.span
                              className="display-font animate-pulse-soft"
                              style={{
                                fontSize: 10, fontWeight: 700, color: '#fff',
                                background: theme.accent, padding: '4px 10px', borderRadius: 999,
                              }}
                            >
                              HOY
                            </motion.span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="display-font" style={{ fontSize: 21, fontWeight: 700, color: 'var(--text)', margin: '10px 0 16px' }}>
                          {day.title}
                        </h2>

                        {/* Weather strip */}
                        {weather && (
                          <div className="neu-inset" style={{
                            borderRadius: 18, padding: 14, marginBottom: 12,
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          }}>
                            <div className="flex items-center gap-3">
                              <span style={{ fontSize: 28 }}>{WMO_ICON[weather.code] || '☀️'}</span>
                              <div>
                                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', letterSpacing: 1 }}>TIEMPO</p>
                                <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>
                                  {weather.high}° <span style={{ color: 'var(--muted)', fontWeight: 500 }}>/ {weather.low}°</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex" style={{ gap: 14 }}>
                              <div style={{ textAlign: 'center' }}>
                                <Sunrise size={14} color={theme.accent} />
                                <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{weather.sunrise}</p>
                              </div>
                              <div style={{ textAlign: 'center' }}>
                                <Sunset size={14} color={theme.accent} />
                                <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{weather.sunset}</p>
                              </div>
                              <div style={{ textAlign: 'center' }}>
                                <Droplets size={14} color="#3B82F6" />
                                <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{weather.water}°</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Beach */}
                        <div className="neu-inset flex gap-3" style={{ borderRadius: 18, padding: 14, marginBottom: 12 }}>
                          <Sun size={18} color={theme.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', marginBottom: 3 }}>PLAYA / DÍA</p>
                            <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.5 }}>{day.beach}</p>
                          </div>
                        </div>

                        {/* Plan */}
                        <div className="neu-inset flex gap-3" style={{ borderRadius: 18, padding: 14, marginBottom: 12 }}>
                          <MapPin size={18} color={theme.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', marginBottom: 3 }}>PLAN</p>
                            <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.5 }}>{day.plan}</p>
                          </div>
                        </div>

                        {/* Navigation button */}
                        <motion.a
                          whileTap={{ scale: 0.97 }}
                          href={mapsUrl(day.mapQuery)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neu-pill flex items-center justify-center gap-2 touch-feedback"
                          style={{
                            borderRadius: 14, padding: '10px 0',
                            marginBottom: day.party ? 16 : 4,
                            textDecoration: 'none', color: theme.accent,
                            fontSize: 13, fontWeight: 700, display: 'flex',
                          }}
                        >
                          <Navigation size={15} /> Cómo llegar
                        </motion.a>

                        {/* Party venues */}
                        {day.party && (
                          <div>
                            <div className="flex items-center gap-2 mb-2" style={{ paddingLeft: 2 }}>
                              <Moon size={16} color={theme.accent} />
                              <p style={{ fontSize: 11, fontWeight: 700, color: theme.accent, letterSpacing: 1 }}>
                                DÓNDE IR ESTA NOCHE
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              {day.party.map((club, ci) => (
                                <motion.div
                                  key={club.name}
                                  className="neu-sm"
                                  style={{ borderRadius: 16, padding: '12px 14px' }}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: ci * 0.08 }}
                                >
                                  <div className="flex items-center justify-between">
                                    <p className="display-font" style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text)' }}>
                                      {club.name}
                                    </p>
                                    <span style={{ fontSize: 10.5, color: 'var(--muted)', fontWeight: 600 }}>{club.loc}</span>
                                  </div>
                                  <p style={{ fontSize: 12.5, color: 'var(--body)', lineHeight: 1.4, marginTop: 3 }}>
                                    {club.desc}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tip */}
                      <div className="flex items-start gap-2 px-2 mb-6">
                        <Sparkles size={15} color="var(--muted)" style={{ marginTop: 2, flexShrink: 0 }} />
                        <p style={{ fontSize: 12.5, color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.4 }}>
                          {day.tip}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* El Playazo bonus section - Solo para el martes (Cabo de Gata) */}
                {day.date === '2026-07-28' && (
                  <motion.div
                    className="neu"
                    style={{ borderRadius: 24, padding: 18, marginBottom: 16 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div style={{
                        width: 36, height: 36, borderRadius: 12,
                        background: THEME.beach.accentSoft,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Mountain size={18} color={THEME.beach.accent} />
                      </div>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 700, color: THEME.beach.accent, letterSpacing: 1 }}>
                          PARA SALTAR AL AGUA
                        </p>
                        <p className="display-font" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>
                          El Playazo de Rodalquilar
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.5, marginBottom: 10 }}>
                      Cala junto a Rodalquilar, dentro del Parque Natural. Su duna fosilizada forma plataformas rocosas desde las que se salta a un agua turquesa muy fotogénica — uno de los sitios más conocidos de la zona. No está vigilado ni señalizado, la seguridad depende de vosotros.
                    </p>
                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href={mapsUrl('El Playazo, Rodalquilar')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-pill flex items-center justify-center gap-2 touch-feedback"
                      style={{
                        borderRadius: 14, padding: '9px 0', marginBottom: 10,
                        textDecoration: 'none', color: THEME.beach.accent,
                        fontSize: 13, fontWeight: 700, display: 'flex',
                      }}
                    >
                      <Navigation size={15} /> Cómo llegar al Playazo
                    </motion.a>
                    <div className="neu-inset flex gap-3" style={{ borderRadius: 16, padding: 12 }}>
                      <AlertTriangle size={16} color="#E8543C" style={{ flexShrink: 0, marginTop: 2 }} />
                      <ul style={{ fontSize: 12, color: 'var(--body)', lineHeight: 1.6, paddingLeft: 14, margin: 0 }}>
                        <li>Bajad nadando antes para comprobar profundidad y que no hay rocas debajo.</li>
                        <li>Nunca de cabeza la primera vez, siempre de pie.</li>
                        <li>Saltad solo si hay alguien más delante viendo, nunca en solitario.</li>
                        <li>Si hay oleaje o corriente ese día, mejor no saltar.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Previous / Next */}
                <div className="flex items-center justify-between">
                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelected((s) => Math.max(0, s - 1))}
                    disabled={selected === 0}
                    className="neu-pill flex items-center gap-1 touch-feedback"
                    style={{
                      borderRadius: 16, padding: '10px 16px',
                      opacity: selected === 0 ? 0.4 : 1,
                      color: 'var(--text)', fontSize: 13, fontWeight: 600,
                    }}
                  >
                    <ChevronLeft size={16} /> Anterior
                  </motion.button>
                  <div className="flex items-center gap-1">
                    <Car size={14} color="var(--muted)" />
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>Con coche</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelected((s) => Math.min(DAYS.length - 1, s + 1))}
                    disabled={selected === DAYS.length - 1}
                    className="neu-pill flex items-center gap-1 touch-feedback"
                    style={{
                      borderRadius: 16, padding: '10px 16px',
                      opacity: selected === DAYS.length - 1 ? 0.4 : 1,
                      color: 'var(--text)', fontSize: 13, fontWeight: 600,
                    }}
                  >
                    Siguiente <ChevronRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )}



            {/* ═══════ TAB: CHECKLIST ═══════ */}
            {tab === 'checklist' && (
              <motion.div key="checklist" {...fadeSlide}>

                {/* Header + progress */}
                <div className="neu" style={{ borderRadius: 24, padding: 20, marginBottom: 16 }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="display-font" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                      Maleta / checklist
                    </p>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 12, fontWeight: 700, color: theme.accent }}>
                        {totalDone}/{totalItems}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={resetChecklist}
                        className="touch-feedback"
                        style={{ background: 'none', border: 'none', padding: 4 }}
                        title="Reiniciar checklist"
                      >
                        <RotateCcw size={14} color="var(--muted)" />
                      </motion.button>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
                    Solo la ves tú — cada uno lleva la suya.
                  </p>

                  {/* Progress bar */}
                  <div className="neu-inset" style={{ height: 8, borderRadius: 4, marginBottom: 6 }}>
                    <div
                      className="progress-fill"
                      style={{ width: `${checklistPct}%`, height: '100%', background: theme.accent }}
                    />
                  </div>
                  <p style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'right' }}>
                    {checklistPct === 100 ? '✅ ¡Todo listo!' : `${checklistPct}% preparado`}
                  </p>
                </div>

                {/* Categories accordion */}
                <div className="flex flex-col gap-3 mb-4">
                  {checklistCategories.map((group) => {
                    const isOpen = openCats[group.cat] !== false; // default open
                    return (
                      <div key={group.cat} className="neu" style={{ borderRadius: 20, overflow: 'hidden' }}>
                        {/* Category header */}
                        <button
                          onClick={() => toggleCat(group.cat)}
                          className="touch-feedback"
                          style={{
                            width: '100%', padding: '14px 16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            background: 'transparent', border: 'none', cursor: 'pointer',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ fontSize: 14 }}>{group.cat}</span>
                            <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>
                              {group.done}/{group.total}
                            </span>
                          </div>
                          <ChevronDown
                            size={16}
                            color="var(--muted)"
                            className={`accordion-chevron ${isOpen ? 'open' : ''}`}
                          />
                        </button>

                        {/* Items */}
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ padding: '0 12px 12px' }}
                          >
                            <div className="flex flex-col gap-2">
                              {group.items.map((item) => (
                                <motion.div
                                  key={item.label}
                                  layout
                                  onClick={() => toggleItem(item.label, item.cat)}
                                  className="neu-sm flex items-center justify-between touch-feedback"
                                  style={{ borderRadius: 12, padding: '10px 12px', cursor: 'pointer' }}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={item.done ? 'neu-inset' : 'neu-sm'}
                                      style={{
                                        width: 22, height: 22, borderRadius: 7,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                      }}
                                    >
                                      {item.done && <CheckSquare size={14} color={theme.accent} />}
                                    </div>
                                    <span style={{
                                      fontSize: 13, color: item.done ? 'var(--muted)' : 'var(--text)',
                                      textDecoration: item.done ? 'line-through' : 'none',
                                    }}>
                                      {item.label}
                                    </span>
                                  </div>
                                  <motion.button
                                    whileTap={{ scale: 0.8 }}
                                    onClick={(e) => { e.stopPropagation(); removeCheckItem(item.label, item.cat); }}
                                    className="touch-feedback"
                                    style={{ background: 'none', border: 'none', padding: 4 }}
                                  >
                                    <Trash2 size={14} color="#E8543C" />
                                  </motion.button>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Add custom item */}
                <div className="neu-inset flex items-center gap-2" style={{ borderRadius: 14, padding: 8 }}>
                  <input
                    placeholder="Añadir algo más..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCheckItem()}
                    style={{
                      flex: 1, border: 'none', outline: 'none',
                      background: 'transparent', fontSize: 13,
                      color: 'var(--text)', padding: '6px 8px',
                    }}
                  />
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={addCheckItem}
                    className="neu-pill touch-feedback"
                    style={{
                      width: 34, height: 34, borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Plus size={16} color={theme.accent} />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* ═══════ TAB: NOTAS ═══════ */}
            {tab === 'notas' && (
              <motion.div key="notas" {...fadeSlide}>

                {/* Trip diary / ratings */}
                <div className="neu" style={{ borderRadius: 24, padding: 20, marginBottom: 16 }}>
                  <p className="display-font" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                    Diario del viaje
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>
                    Puntúa cada día y escribe un recuerdo — te alegrarás de haberlo hecho.
                  </p>

                  <div className="flex flex-col gap-3">
                    {DAYS.map((d) => {
                      const dTheme = THEME[d.type];
                      const entry = diary[d.date] || {};
                      const stars = entry.stars || 0;
                      const isPast = d.date <= todayISO;
                      const isFuture = d.date > todayISO;

                      return (
                        <div
                          key={d.date}
                          className="neu-sm"
                          style={{
                            borderRadius: 16, padding: '12px 14px',
                            opacity: isFuture ? 0.5 : 1,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span style={{ fontSize: 11, fontWeight: 700, color: dTheme.accent }}>
                                {d.dow} {new Date(d.date + 'T12:00:00').getDate()}
                              </span>
                              <span style={{ fontSize: 11, color: 'var(--muted)' }}>{d.title}</span>
                            </div>
                          </div>

                          {/* Star rating */}
                          <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <button
                                key={n}
                                className="star-btn touch-feedback"
                                onClick={() => !isFuture && setDayRating(d.date, n === stars ? 0 : n)}
                                disabled={isFuture}
                              >
                                <Star
                                  size={20}
                                  color={n <= stars ? '#E8A93B' : 'var(--muted)'}
                                  fill={n <= stars ? '#E8A93B' : 'transparent'}
                                  strokeWidth={n <= stars ? 0 : 1.5}
                                />
                              </button>
                            ))}
                          </div>

                          {/* Memory text */}
                          {isPast && (
                            <textarea
                              placeholder="¿Qué pasó este día? Escribe un recuerdo..."
                              value={entry.memory || ''}
                              onChange={(e) => setDayMemory(d.date, e.target.value)}
                              className="neu-inset"
                              rows={2}
                              style={{
                                width: '100%', border: 'none', outline: 'none',
                                borderRadius: 10, padding: '8px 10px', fontSize: 12,
                                color: 'var(--text)', background: 'var(--bg)',
                                resize: 'vertical', boxSizing: 'border-box',
                                lineHeight: 1.5,
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick notes */}
                <div className="neu" style={{ borderRadius: 24, padding: 20, marginBottom: 16 }}>
                  <p className="display-font" style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                    📌 Notas rápidas
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
                    WiFi, contraseñas, cosas que comprar, lo que sea.
                  </p>

                  {/* Add note */}
                  <div className="neu-inset flex items-center gap-2 mb-4" style={{ borderRadius: 14, padding: 8 }}>
                    <input
                      placeholder="Escribe una nota..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addNote()}
                      style={{
                        flex: 1, border: 'none', outline: 'none',
                        background: 'transparent', fontSize: 13,
                        color: 'var(--text)', padding: '6px 8px',
                      }}
                    />
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={addNote}
                      className="neu-pill touch-feedback"
                      style={{
                        width: 34, height: 34, borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Plus size={16} color={theme.accent} />
                    </motion.button>
                  </div>

                  {/* Notes list */}
                  <AnimatePresence>
                    <div className="flex flex-col gap-2">
                      {notes.map((note) => (
                        <motion.div
                          key={note.id}
                          {...listItemVariant}
                          layout
                          className="neu-sm flex items-center justify-between"
                          style={{ borderRadius: 12, padding: '10px 14px' }}
                        >
                          <div style={{ flex: 1, marginRight: 8 }}>
                            <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.4 }}>{note.text}</p>
                            <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3 }}>{note.time}</p>
                          </div>
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => removeNote(note.id)}
                            className="touch-feedback"
                            style={{ background: 'none', border: 'none', padding: 4, flexShrink: 0 }}
                          >
                            <Trash2 size={14} color="#E8543C" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatePresence>

                  {notes.length === 0 && (
                    <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', padding: 16 }}>
                      Todavía no hay notas — escribe la primera arriba.
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* ═══════ TAB: SOS ═══════ */}
            {tab === 'sos' && (
              <motion.div key="sos" {...fadeSlide}>
                <div className="flex flex-col gap-3">

                  <div className="neu" style={{ borderRadius: 24, padding: 20 }}>
                    <p className="display-font" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                      Información de emergencia
                    </p>
                    <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                      Guardadlo antes de salir de fiesta, por si acaso.
                    </p>
                  </div>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="tel:112"
                    className="neu flex items-center gap-3 touch-feedback"
                    style={{ borderRadius: 20, padding: 16, textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 14,
                      background: '#FFE2D9',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Phone size={18} color="#E8543C" />
                    </div>
                    <div>
                      <p className="display-font" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>112</p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>Emergencias generales (toda la UE)</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="tel:061"
                    className="neu flex items-center gap-3 touch-feedback"
                    style={{ borderRadius: 20, padding: 16, textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 14,
                      background: '#DCEFEC',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Hospital size={18} color="#12897B" />
                    </div>
                    <div>
                      <p className="display-font" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>061</p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>Emergencias sanitarias</p>
                    </div>
                  </motion.a>

                  <div className="neu flex items-center gap-3" style={{ borderRadius: 20, padding: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 14,
                      background: '#FBEBD2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Hospital size={18} color="#E8A93B" />
                    </div>
                    <div>
                      <p className="display-font" style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text)' }}>
                        Hospital Torrecárdenas
                      </p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                        Hospital público de referencia en Almería capital
                      </p>
                    </div>
                  </div>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={mapsUrl('Hospital Universitario Torrecárdenas, Almería')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-pill flex items-center justify-center gap-2 touch-feedback"
                    style={{
                      borderRadius: 14, padding: '10px 0',
                      textDecoration: 'none', color: '#E8A93B',
                      fontSize: 13, fontWeight: 700,
                    }}
                  >
                    <Navigation size={15} /> Cómo llegar al hospital
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={mapsUrl('Calle Cruces Bajas, 40, Almería')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu flex items-center gap-3 touch-feedback"
                    style={{ borderRadius: 20, padding: 16, textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 14,
                      background: theme.accentSoft,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <HomeIcon size={18} color={theme.accent} />
                    </div>
                    <div>
                      <p className="display-font" style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text)' }}>
                        El apartamento
                      </p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                        Calle Cruces Bajas, 40, Almería · toca para abrir en el mapa
                      </p>
                    </div>
                  </motion.a>

                  <div className="neu-inset flex gap-3" style={{ borderRadius: 18, padding: 14 }}>
                    <AlertTriangle size={16} color="#E8543C" style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 12, color: 'var(--body)', lineHeight: 1.6 }}>
                      Compartid la ubicación en vivo entre los tres cada noche de fiesta y quedad en un punto de encuentro fijo por si os despistáis.
                    </p>
                  </div>

                  {/* VTC / Taxi info */}
                  <div className="neu" style={{ borderRadius: 20, padding: 16 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Car size={16} color={theme.accent} />
                      <p className="display-font" style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                        Taxis y VTC
                      </p>
                    </div>
                    <p style={{ fontSize: 12.5, color: 'var(--body)', lineHeight: 1.5 }}>
                      Radio Taxi Almería: <strong>950 22 61 61</strong>. También funciona Uber y Cabify aunque con poca oferta fuera del centro. En Mojácar la mejor opción suele ser taxi local.
                    </p>
                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href="tel:950226161"
                      className="neu-pill flex items-center justify-center gap-2 touch-feedback"
                      style={{
                        borderRadius: 12, padding: '8px 0', marginTop: 10,
                        textDecoration: 'none', color: theme.accent,
                        fontSize: 12, fontWeight: 700,
                      }}
                    >
                      <Phone size={14} /> Llamar al taxi
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom Navigation ─────────────────────────── */}
      <div
        className="bottom-nav-safe"
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          padding: '0 16px 16px', zIndex: 50,
          display: 'flex', justifyContent: 'center',
        }}
      >
        <div
          className="neu"
          style={{
            borderRadius: 22, padding: 6,
            width: '100%', maxWidth: 430,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {TABS.map((t) => {
            const TIcon = t.icon;
            const active = tab === t.id;
            return (
              <motion.button
                key={t.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTab(t.id)}
                className="touch-feedback"
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 3, padding: '8px 0',
                  borderRadius: 16, border: 'none',
                  background: active ? theme.accentSoft : 'transparent',
                  transition: 'background 0.2s ease',
                }}
              >
                <TIcon size={18} color={active ? theme.accent : 'var(--muted)'} />
                <span style={{ fontSize: 10, fontWeight: 700, color: active ? theme.accent : 'var(--muted)' }}>
                  {t.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
