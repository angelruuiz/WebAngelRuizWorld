"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const SUITS = ['hearts', 'diamonds', 'spades', 'clubs'];
const SUIT_DATA = {
    hearts: { symbol: '♥', color: '#ef4444' },
    diamonds: { symbol: '♦', color: '#ef4444' },
    spades: { symbol: '♠', color: '#d4a853' },
    clubs: { symbol: '♣', color: '#d4a853' }
};
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// The 12 actual reviews from the site
const REVIEWS_DATA = [
    { text: "Contamos con Ángel para el campamento de verano de Movistar Estudiantes y fue un acierto absoluto. Se encargó de impartir talleres prácticos para enseñar magia a los alumnos y de realizar varios shows. Conectó de inmediato con los chavales, manteniéndolos súper concentrados y divirtiéndose un montón. Gran profesional.", author: "Movistar Estudiantes" },
    { text: "Buscábamos a alguien para el cóctel de nuestra boda y Ángel fue la mejor elección. Se mezclaba entre los grupos y la gente alucinaba. A mi suegra le hizo desaparecer un anillo que acabó dentro de una nuez cerrada. Aún hoy nuestros amigos nos preguntan por él.", author: "Sofía y David" },
    { text: "Vino a la comunión de Marcos. Yo pensaba que los niños iban a estar entretenidos, pero es que los adultos estábamos igual de flipados. Hizo un juego en nuestra mesa con unas cartas que firmamos y nos dejó sin palabras. Un mago que vale tanto para niños como para mayores.", author: "Familia de Marcos" },
    { text: "Estuvo en la inauguración de nuestra peña en Torrelodones. Nos dejó a todos locos. Cogió una baraja que teníamos nosotros, la mezcló un socio y sacó los cuatro ases de la nada. Es un lujo tener este nivel de magia en el pueblo.", author: "Peña 'La Escombrera'" },
    { text: "Para mi 50 cumpleaños organicé una cena en casa y Ángel fue la sorpresa. Estuvo pasando por los grupos en el jardín y en un momento dado hizo que una moneda firmada apareciera dentro de una lata de refresco cerrada. Todo el mundo me felicitó por llevarlo.", author: "Ana P." },
    { text: "Teníamos una cena con 50 directivos y necesitábamos romper el hielo. Ángel empezó con magia de cerca y acabó haciendo un número de mentalismo donde acertó la palabra que estaba pensando el CEO. Se nota que sabe moverse en eventos de empresa. Discreto, puntual y muy bueno.", author: "Carlos M." },
    { text: "Vino a una cena privada que hicimos en una finca de Pozuelo. Mientras cenábamos, se acercaba a las mesas. A mi marido le hizo elegir una carta con la mente y la sacó del bolsillo de la chaqueta de otro invitado. Es de esos profesionales que no necesitan escenario para impresionarte.", author: "Patricia Ruiz" },
    { text: "Le contratamos para dinamizar nuestro stand en IFEMA. No solo hizo magia, sino que integró nuestro producto en los trucos. Consiguió que la gente se parara y nos dio pie a iniciar la venta. Un juego con tarjetas de visita hizo que mucha gente nos grabara. 100% recomendable para ferias.", author: "Miguel Jiménez" },
    { text: "Se encargó de la magia en el cóctel de nuestra boda. Desde el principio nos aconsejó súper bien sobre los tiempos. Lo mejor fue ver a mis tíos, que son súper escépticos, persiguiéndole para que les hiciera más trucos. Eso no tiene precio.", author: "Laura García y Jorge" },
    { text: "He trabajado con muchos magos, pero la limpieza que tiene Ángel con las cartas es brutal. En un evento VIP de la productora, logró que cuatro personas eligieran una carta y todas aparecieron dentro de una cartera que llevaba yo. Su técnica es espectacular.", author: "Sergio Blanco" },
    { text: "Para nuestro aniversario queríamos algo especial. Ángel consiguió que participáramos todos, incluso los más tímidos de la familia. Hizo un juego precioso con una foto antigua de mis abuelos que nos dejó emocionados. Fue un detalle que no olvidaremos.", author: "Carmen Martínez" },
    { text: "Vino a la convención anual en Boadilla. Nos hizo un número donde adivinó el destino de las próximas vacaciones del director comercial, que nadie sabía. Fue el tema de conversación del equipo durante semanas. Si tienes una empresa por la zona, ni lo dudes.", author: "Javier Soler" }
];

// Generate 12 unique cards mapping to the reviews
const CARDS_DATA = REVIEWS_DATA.map((review, i) => {
    return {
        id: i,
        value: VALUES[i % VALUES.length],
        suit: SUITS[i % SUITS.length],
        review: review
    };
});

const generateScatter = (index, total) => {
    const isDesktop = window.innerWidth > 768;
    const minRadius = isDesktop ? 100 : 20;
    const maxRadius = isDesktop ? 500 : 180;
    const yOffset = isDesktop ? 0 : -30; // Subir un poco las cartas en móvil
    
    const angle = (Math.random() * Math.PI * 2);
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius + yOffset,
        rotateZ: -60 + Math.random() * 120,
        rotateX: 0,
        rotateY: 0,
        z: index * 2
    };
};

const Card = ({ card, index, total, bringToFront, onSelect }) => {
    const { value, suit, review } = card;
    const suitInfo = SUIT_DATA[suit];

    const [scatter, setScatter] = useState({ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0, z: 0 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setScatter(generateScatter(index, total));
        }, 100);
        return () => clearTimeout(timer);
    }, [index, total]);

    // Truncate review for the card preview
    const snippet = review.text.length > 70 ? review.text.substring(0, 70) + '...' : review.text;

    return (
        <motion.div
            drag
            dragConstraints={false} // Libre arrastre
            dragElastic={1} // No vuelve al centro
            dragMomentum={false} // Se queda donde lo sueltas exactamente
            onDragStart={bringToFront}
            whileDrag={{ 
                scale: 1.15, 
                rotateX: 0, 
                rotateY: 0, 
                z: 100,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 30px rgba(212,168,83,0.3)" 
            }}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.5), 0 0 15px rgba(255,255,255,0.1)"
            }}
            initial={{ 
                x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0, scale: 0.8, opacity: 0 
            }}
            animate={{
                x: scatter.x,
                y: scatter.y,
                rotateZ: scatter.rotateZ,
                rotateX: scatter.rotateX,
                rotateY: scatter.rotateY,
                scale: 1,
                opacity: 1,
                z: scatter.z
            }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                mass: 1,
                delay: index * 0.03
            }}
            onClick={(e) => {
                // Prevenir que se abra el modal si estamos arrastrando
                // Calculamos si hubo movimiento comprobando si la posición actual es muy diferente.
                // Framer motion ya maneja onClick vs onDrag internamente muy bien en la mayoría de casos.
                onSelect(card);
            }}
            className="absolute w-48 h-72 md:w-56 md:h-80 rounded-2xl cursor-grab active:cursor-grabbing preserve-3d"
            style={{
                backgroundColor: '#0f172a',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)",
                transformStyle: "preserve-3d",
                color: suitInfo.color
            }}
        >
            <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between backface-hidden rounded-2xl overflow-hidden pointer-events-none">
                
                {/* Top Index */}
                <div className="flex flex-col items-center self-start leading-none opacity-80">
                    <span className="text-xl md:text-2xl font-bold font-[Cinzel]">{value}</span>
                    <span className="text-lg md:text-xl mt-0.5">{suitInfo.symbol}</span>
                </div>

                {/* Center Content: Review Snippet */}
                <div className="flex-grow flex flex-col items-center justify-center text-center px-2 py-4">
                    <div className="text-white/80 text-[10px] md:text-xs italic leading-relaxed mb-4 line-clamp-4 overflow-hidden relative">
                        <span className="text-[#d4a853] text-2xl absolute -top-3 -left-1 opacity-40">"</span>
                        {snippet}
                        <span className="text-[#d4a853] text-2xl absolute -bottom-4 -right-1 opacity-40">"</span>
                    </div>
                    <div className="mt-auto">
                        <p className="font-[Cinzel] text-[10px] md:text-xs font-bold tracking-widest text-[#d4a853] uppercase">{review.author}</p>
                        <div className="flex justify-center gap-0.5 mt-1 opacity-70">
                            {[1,2,3,4,5].map(i => <span key={i} className="text-[#d4a853] text-[8px]">★</span>)}
                        </div>
                    </div>
                </div>

                {/* Bottom Index (Inverted) */}
                <div className="flex flex-col items-center self-end leading-none rotate-180 opacity-80">
                    <span className="text-xl md:text-2xl font-bold font-[Cinzel]">{value}</span>
                    <span className="text-lg md:text-xl mt-0.5">{suitInfo.symbol}</span>
                </div>

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none rounded-2xl"></div>
            </div>
        </motion.div>
    );
};

export default function InteractiveCardDeck() {
    const containerRef = useRef(null);
    const [cards, setCards] = useState(CARDS_DATA);
    const [selectedReview, setSelectedReview] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const rotateX = useTransform(springY, [-1, 1], [15, -15]);
    const rotateY = useTransform(springX, [-1, 1], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const bringToFront = (id) => {
        setCards(prevCards => {
            const cardIndex = prevCards.findIndex(c => c.id === id);
            if (cardIndex === -1) return prevCards;
            const newCards = [...prevCards];
            const [card] = newCards.splice(cardIndex, 1);
            newCards.push(card); 
            return newCards;
        });
    };

    return (
        <div 
            ref={containerRef}
            className="w-full h-full min-h-[calc(100vh-150px)] flex items-center justify-center relative overflow-visible perspective-[1200px]"
            style={{ touchAction: 'none' }}
        >
            <motion.div 
                className="relative w-full h-full flex items-center justify-center transform-style-3d"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
                {cards.map((card, index) => (
                    <Card 
                        key={card.id} 
                        card={card} 
                        index={index} 
                        total={cards.length} 
                        bringToFront={() => bringToFront(card.id)}
                        onSelect={(cardData) => setSelectedReview(cardData)}
                    />
                ))}
            </motion.div>

            {/* Modal para leer la reseña completa */}
            <AnimatePresence>
                {selectedReview && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setSelectedReview(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-slate-900 border border-slate-700/50 p-8 md:p-12 rounded-3xl max-w-xl w-full relative shadow-2xl shadow-black/50"
                            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer click dentro
                        >
                            <button 
                                onClick={() => setSelectedReview(null)}
                                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
                            >
                                ✕
                            </button>
                            
                            <div className="flex flex-col items-center text-center">
                                <span className="text-[#d4a853] text-4xl mb-4 font-[Cinzel]">{SUIT_DATA[selectedReview.suit].symbol}</span>
                                <div className="flex gap-1 mb-6">
                                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400">★</span>)}
                                </div>
                                <p className="text-white text-lg md:text-xl font-light italic leading-relaxed mb-8">
                                    "{selectedReview.review.text}"
                                </p>
                                <div className="w-16 h-[1px] bg-amber-500/50 mb-6" />
                                <h4 className="font-[Cinzel] text-lg font-bold tracking-widest text-[#d4a853] uppercase">
                                    {selectedReview.review.author}
                                </h4>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
