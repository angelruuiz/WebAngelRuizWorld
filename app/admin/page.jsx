"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, 
    Clock, 
    CheckCircle2, 
    AlertCircle, 
    Plus, 
    Trash2, 
    Lock, 
    LogOut,
    DollarSign,
    StickyNote,
    TrendingUp
} from 'lucide-react';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [events, setEvents] = useState([]);
    const [activeTab, setActiveTab] = useState('upcoming');
    const [showAddModal, setShowAddModal] = useState(false);
    const [notes, setNotes] = useState("");

    // Form state
    const [newEvent, setNewEvent] = useState({
        client: '',
        date: '',
        location: '',
        price: '',
        status: 'pending', // pending, confirmed, done, unpaid
        type: 'boda' // boda, empresa, privado
    });

    // Load data from LocalStorage
    useEffect(() => {
        const savedEvents = localStorage.getItem('ar_admin_events');
        const savedNotes = localStorage.getItem('ar_admin_notes');
        const authStatus = sessionStorage.getItem('ar_admin_auth');
        
        if (savedEvents) setEvents(JSON.parse(savedEvents));
        if (savedNotes) setNotes(savedNotes);
        if (authStatus === 'true') setIsAuthenticated(true);
    }, []);

    // Save events to LocalStorage
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('ar_admin_events', JSON.stringify(events));
        }
    }, [events, isAuthenticated]);

    // Save notes to LocalStorage
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('ar_admin_notes', notes);
        }
    }, [notes, isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        // Definimos la contraseña maestra (puedes cambiarla aquí o pedir al usuario que la defina)
        if (password === 'wEyzye9b') {
            setIsAuthenticated(true);
            sessionStorage.setItem('ar_admin_auth', 'true');
            setLoginError(false);
        } else {
            setLoginError(true);
            setTimeout(() => setLoginError(false), 2000);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('ar_admin_auth');
    };

    const addEvent = (e) => {
        e.preventDefault();
        const eventToAdd = {
            ...newEvent,
            id: Date.now(),
            createdAt: new Date().toISOString()
        };
        setEvents([eventToAdd, ...events]);
        setShowAddModal(false);
        setNewEvent({ client: '', date: '', location: '', price: '', status: 'pending', type: 'boda' });
    };

    const deleteEvent = (id) => {
        if (window.confirm('¿Eliminar este registro permanentemente?')) {
            setEvents(events.filter(e => e.id !== id));
        }
    };

    const updateStatus = (id, newStatus) => {
        setEvents(events.map(e => e.id === id ? { ...e, status: newStatus } : e));
    };

    const filteredEvents = events.filter(e => {
        if (activeTab === 'upcoming') return e.status === 'confirmed' || e.status === 'pending';
        if (activeTab === 'done') return e.status === 'done';
        if (activeTab === 'unpaid') return e.status === 'unpaid';
        return true;
    });

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-sans cursor-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                            <Lock className="w-8 h-8 text-amber-500" />
                        </div>
                        <h1 className="text-3xl font-[Cinzel] text-white uppercase tracking-widest font-bold">Acceso Maestro</h1>
                        <p className="text-slate-500 text-sm mt-2 font-medium tracking-wide">ÁNGEL RUIZ | ESPACIO PRIVADO</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500/70 ml-4">Contraseña Mágica</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-white/5 border ${loginError ? 'border-red-500 animate-shake' : 'border-white/10'} rounded-full py-4 px-6 text-white placeholder:text-slate-600 outline-none focus:border-amber-500/50 transition-all font-mono`}
                                placeholder="••••••••"
                                autoFocus
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-full transition-all uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                        >
                            Revelar Diario
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans cursor-auto">
            
            {/* Header Area */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                    <h1 className="text-3xl font-[Cinzel] text-white uppercase tracking-[0.3em] font-black">Admin Panel</h1>
                    <p className="text-amber-500/70 text-[10px] font-bold tracking-[0.4em] uppercase mt-1">Gestión de Eventos y Servicios VIP</p>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setShowAddModal(true)}
                        className="bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-amber-500 transition-colors shadow-lg"
                    >
                        <Plus className="w-4 h-4" /> Nuevo Evento
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all group"
                        title="Salir"
                    >
                        <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-400" />
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <Calendar className="w-5 h-5 text-amber-500" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Activos</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{events.filter(e => e.status === 'confirmed').length}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase">Eventos Confirmados</p>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Leads</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{events.filter(e => e.status === 'pending').length}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase">Pendientes de Confirmar</p>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Cobros</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{events.filter(e => e.status === 'unpaid').length}</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase">Pendientes de Pago</p>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Ingresos Est.</span>
                    </div>
                    <p className="text-2xl font-bold text-white">
                        {events.reduce((sum, e) => sum + (parseFloat(e.price) || 0), 0)}€
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase">Total Acumulado</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main List */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs */}
                    <div className="flex gap-2 bg-slate-900/60 p-1.5 rounded-full border border-white/5 w-fit">
                        {[
                            { id: 'upcoming', label: 'Calendario', icon: Calendar },
                            { id: 'done', label: 'Realizados', icon: CheckCircle2 },
                            { id: 'unpaid', label: 'Deuda', icon: AlertCircle },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-all ${activeTab === tab.id ? 'bg-white text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                            >
                                <tab.icon className="w-3 h-3" /> {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {filteredEvents.length === 0 ? (
                            <div className="p-20 text-center bg-slate-900/20 border border-dashed border-white/5 rounded-[2rem]">
                                <p className="text-slate-500 text-sm italic font-light italic">No hay registros en esta sección.</p>
                            </div>
                        ) : (
                            filteredEvents.map((event) => (
                                <motion.div 
                                    layout
                                    key={event.id}
                                    className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] flex items-center justify-between hover:border-amber-500/20 transition-all group"
                                >
                                    <div className="flex gap-6 items-center">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                                            event.status === 'confirmed' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                                            event.status === 'pending' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                                            event.status === 'unpaid' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                                            'bg-green-500/10 border-green-500/20 text-green-500'
                                        }`}>
                                            {event.type === 'boda' ? <TrendingUp className="w-5 h-5" /> : <TrendingUp className="w-5 h-5 rotate-45" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg tracking-tight">{event.client}</h3>
                                            <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {event.date}</span>
                                                <span className="flex items-center gap-1.5 opacity-60">|</span>
                                                <span className="flex items-center gap-1.5">📍 {event.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-white font-bold">{event.price}€</p>
                                            <select 
                                                value={event.status}
                                                onChange={(e) => updateStatus(event.id, e.target.value)}
                                                className="bg-transparent text-[10px] text-slate-500 font-bold uppercase tracking-widest outline-none cursor-pointer hover:text-amber-500"
                                            >
                                                <option value="pending" className="bg-slate-900">Pdte. Confirmar</option>
                                                <option value="confirmed" className="bg-slate-900">Confirmado</option>
                                                <option value="done" className="bg-slate-900">Realizado</option>
                                                <option value="unpaid" className="bg-slate-900">Pdte. Pago</option>
                                            </select>
                                        </div>
                                        <button 
                                            onClick={() => deleteEvent(event.id)}
                                            className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-500/20 rounded-lg text-red-500/60 hover:text-red-500 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>

                {/* Sidebar: Notes */}
                <div className="space-y-6">
                    <div className="bg-slate-900/60 border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                        <div className="flex items-center gap-3 mb-6">
                            <StickyNote className="w-5 h-5 text-amber-500" />
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white">Notas Maestras</h2>
                        </div>
                        <textarea 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Escribe aquí pensamientos, ideas para el show o recordatorios..."
                            className="w-full h-[400px] bg-transparent border-none resize-none text-sm text-slate-400 leading-relaxed outline-none scrollbar-hide font-serif italic"
                        />
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-bold text-slate-600 uppercase tracking-widest">
                            <span>Auto-guardado habilitado</span>
                            <span>{notes.length} caracteres</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowAddModal(false)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-xl bg-slate-900 border border-white/10 p-10 rounded-[3rem] shadow-2xl"
                        >
                            <h2 className="text-2xl font-[Cinzel] text-white mb-8 uppercase tracking-widest text-center">Nuevo Registro</h2>
                            <form onSubmit={addEvent} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Cliente</label>
                                        <input 
                                            required
                                            type="text" 
                                            value={newEvent.client}
                                            onChange={(e) => setNewEvent({...newEvent, client: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none focus:border-amber-500/50"
                                            placeholder="Nombre o Marca"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Fecha</label>
                                        <input 
                                            required
                                            type="date" 
                                            value={newEvent.date}
                                            onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none focus:border-amber-500/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Lugar / Ciudad</label>
                                        <input 
                                            required
                                            type="text" 
                                            value={newEvent.location}
                                            onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none focus:border-amber-500/50"
                                            placeholder="Ej: Finca Torrelodones"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Precio Est. (€)</label>
                                        <input 
                                            required
                                            type="number" 
                                            value={newEvent.price}
                                            onChange={(e) => setNewEvent({...newEvent, price: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none focus:border-amber-500/50"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Tipo</label>
                                        <select 
                                            value={newEvent.type}
                                            onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none"
                                        >
                                            <option value="boda" className="bg-slate-900">Boda</option>
                                            <option value="empresa" className="bg-slate-900">Empresa</option>
                                            <option value="privado" className="bg-slate-900">Evento Privado</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 ml-4">Estado Inicial</label>
                                        <select 
                                            value={newEvent.status}
                                            onChange={(e) => setNewEvent({...newEvent, status: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white outline-none"
                                        >
                                            <option value="pending" className="bg-slate-900">Pdte. Confirmar</option>
                                            <option value="confirmed" className="bg-slate-900">Confirmado</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-6">
                                    <button 
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="flex-1 border border-white/10 text-white font-bold py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white/5"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        type="submit"
                                        className="flex-1 bg-amber-500 text-slate-950 font-bold py-3 rounded-full text-xs uppercase tracking-widest hover:bg-amber-400 shadow-xl"
                                    >
                                        Guardar Evento
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake { animation: shake 0.2s ease-in-out infinite; }
            `}</style>
        </div>
    );
}
