"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Chatbot({ hidden, isOpenExternal, setIsOpenExternal }) {
  const isOpen = isOpenExternal;
  const setIsOpen = setIsOpenExternal;
  
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy el asistente mágico de Ángel Ruiz. ¿En qué puedo ayudarte a preparar tu evento?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      // Solo hacer scroll automático si el mensaje lo envió el usuario o si está cargando
      const isUserMessage = messages[messages.length - 1]?.role === 'user';
      if (isUserMessage || isLoading) {
        setTimeout(() => {
          chatContainerRef.current.scroll({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
        }, 50);
      }
    }
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Añadir mensaje del usuario a la lista
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Llamar a nuestra propia API
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!res.ok) {
        setMessages([...newMessages, { role: 'bot', text: 'Lo siento, mi conexión mágica se ha interrumpido. Por favor, inténtelo de nuevo en unos instantes.' }]);
        setIsLoading(false);
        return;
      }

      const data = await res.json();

      if (data.reply) {
        setMessages([...newMessages, { role: 'bot', text: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'bot', text: 'Mi magia se ha distraído un momento. ¿Podría repetir la pregunta?' }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: 'bot', text: 'Error de conexión mágica. Revise su internet.' }]);
    }

    setIsLoading(false);
  };

  if (hidden) return null;

  return (
    <>
      {/* Backdrop de pantalla completa para evitar clics fantasma en móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[99998] md:hidden h-full w-full"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Contenedor principal del asistente */}
      <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
        {/* Botón Flotante */}
        {!isOpen && (
          <motion.button 
            animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(245,158,11,0)", "0px 0px 15px rgba(245,158,11,0.6)", "0px 0px 0px rgba(245,158,11,0)"] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            onClick={() => setIsOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-full p-4 shadow-lg flex items-center gap-2 transform transition-all active:scale-95 cursor-pointer"
          >
            <span className="font-bold hidden xs:inline">Asistente Mágico</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </motion.button>
        )}

        {/* Ventana de Chat */}
        {isOpen && (
          <div className="bg-slate-900 border border-amber-500/30 rounded-xl shadow-2xl w-[calc(100vw-3rem)] xs:w-80 md:w-96 flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[600px]">
            {/* Cabecera */}
            <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-white/10 shrink-0">
              <h3 className="text-amber-400 font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                Asistente Mágico
              </h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-400 hover:text-white p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            {/* Mensajes */}
            <div ref={chatContainerRef} className="p-4 h-[300px] overflow-y-auto flex flex-col gap-3 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded-lg max-w-[85%] text-sm ${msg.role === 'bot' ? 'bg-slate-800 text-slate-200 self-start' : 'bg-amber-500 text-slate-900 self-end font-medium'}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-slate-800 text-slate-400 self-start p-3 rounded-lg text-xs italic animate-pulse">
                  Creando magia...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-slate-800 flex gap-2 shrink-0">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe tu duda..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-md px-3 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50"
              />
              <button 
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-amber-500 text-slate-900 rounded-md px-4 py-2 hover:bg-amber-400 disabled:opacity-50 font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
