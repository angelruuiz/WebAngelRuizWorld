"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const SUITS = {
    hearts: { symbol: '♥', color: '#ef4444' }, // Red
    diamonds: { symbol: '♦', color: '#ef4444' }, // Red
    spades: { symbol: '♠', color: '#d4a853' }, // Gold (Custom Angel Ruiz edition)
    clubs: { symbol: '♣', color: '#d4a853' } // Gold
};

const CARDS_DATA = [
    { id: 1, value: 'Q', suit: 'hearts', label: 'Queen of Hearts' },
    { id: 2, value: 'A', suit: 'spades', label: 'Ace of Spades' },
    { id: 3, value: 'K', suit: 'diamonds', label: 'King of Diamonds' },
    { id: 4, value: 'J', suit: 'clubs', label: 'Jack of Clubs' },
    { id: 5, value: '10', suit: 'spades', label: 'Ten of Spades' },
    { id: 6, value: '7', suit: 'hearts', label: 'Seven of Hearts' },
    { id: 7, value: '2', suit: 'clubs', label: 'Two of Clubs' },
    { id: 8, value: 'A', suit: 'hearts', label: 'Ace of Hearts' },
    { id: 9, value: 'AR', suit: 'spades', label: 'Angel Ruiz Special' }, // Special Card
];

// Generates random scatter positions
const generateScatter = (index, total) => {
    // Random angle between 0 and 360
    const angle = (Math.random() * Math.PI * 2);
    // Random radius (how far from center)
    const radius = 50 + Math.random() * 200;
    
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        rotateZ: -45 + Math.random() * 90,
        rotateY: -15 + Math.random() * 30, // 3D tilt
        rotateX: -15 + Math.random() * 30, // 3D tilt
        z: index * 10 // Stacking order depth
    };
};

const Card = ({ card, index, total, bringToFront }) => {
    const { value, suit } = card;
    const suitInfo = SUITS[suit];
    const isSpecial = value === 'AR';

    // State for individual card scatter
    const [scatter, setScatter] = useState({ x: 0, y: 0, rotateZ: 0, rotateX: 0, rotateY: 0, z: 0 });

    useEffect(() => {
        // Delay the explosion slightly for dramatic effect
        const timer = setTimeout(() => {
            setScatter(generateScatter(index, total));
        }, 300);
        return () => clearTimeout(timer);
    }, [index, total]);

    return (
        <motion.div
            drag
            dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
            dragElastic={0.2}
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
                y: scatter.y - 10,
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
                delay: index * 0.05 // Stagger explosion
            }}
            className="absolute w-48 h-72 md:w-56 md:h-80 rounded-2xl cursor-grab active:cursor-grabbing preserve-3d"
            style={{
                backgroundColor: isSpecial ? '#020617' : '#0f172a',
                border: isSpecial ? '2px solid #d4a853' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)",
                transformStyle: "preserve-3d",
                color: suitInfo.color
            }}
        >
            {/* Card Face */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between backface-hidden rounded-2xl overflow-hidden">
                {/* Top Left */}
                <div className="flex flex-col items-center self-start leading-none">
                    <span className={`text-2xl md:text-3xl font-bold font-[Cinzel] ${isSpecial ? 'text-[#d4a853]' : ''}`}>{value}</span>
                    <span className="text-xl md:text-2xl mt-1">{suitInfo.symbol}</span>
                </div>

                {/* Center Graphic */}
                <div className="flex-grow flex items-center justify-center">
                    {isSpecial ? (
                        <div className="text-center relative">
                            <div className="absolute inset-0 bg-[#d4a853] opacity-20 blur-xl rounded-full scale-150"></div>
                            <span className="text-7xl mb-2 block drop-shadow-[0_0_15px_rgba(212,168,83,0.8)]">✨</span>
                            <span className="font-[Cinzel] text-xl font-bold tracking-widest text-[#d4a853]">ANGEL RUIZ</span>
                        </div>
                    ) : (
                        <span className="text-6xl md:text-8xl opacity-80 drop-shadow-lg">{suitInfo.symbol}</span>
                    )}
                </div>

                {/* Bottom Right (Inverted) */}
                <div className="flex flex-col items-center self-end leading-none rotate-180">
                    <span className={`text-2xl md:text-3xl font-bold font-[Cinzel] ${isSpecial ? 'text-[#d4a853]' : ''}`}>{value}</span>
                    <span className="text-xl md:text-2xl mt-1">{suitInfo.symbol}</span>
                </div>

                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none rounded-2xl"></div>
            </div>
        </motion.div>
    );
};

export default function InteractiveCardDeck() {
    const containerRef = useRef(null);
    const [cards, setCards] = useState(CARDS_DATA);

    // Mouse position for global parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for parallax
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Transform mouse position into 3D rotation angles for the whole "table"
    // Moving mouse right tilts table right, moving down tilts table down
    const rotateX = useTransform(springY, [-1, 1], [15, -15]);
    const rotateY = useTransform(springX, [-1, 1], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position between -1 and 1
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Function to bring dragged card to front by reordering array
    const bringToFront = (id) => {
        setCards(prevCards => {
            const cardIndex = prevCards.findIndex(c => c.id === id);
            if (cardIndex === -1) return prevCards;
            const newCards = [...prevCards];
            const [card] = newCards.splice(cardIndex, 1);
            newCards.push(card); // push to end (renders last = top z-index)
            return newCards;
        });
    };

    return (
        <div 
            ref={containerRef}
            className="w-full h-[600px] md:h-[800px] flex items-center justify-center relative overflow-hidden perspective-[1200px]"
            style={{ touchAction: 'none' }} // Prevent scrolling when dragging on mobile
        >
            <motion.div 
                className="relative w-full h-full flex items-center justify-center transform-style-3d"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Render cards */}
                {cards.map((card, index) => (
                    <Card 
                        key={card.id} 
                        card={card} 
                        index={index} 
                        total={cards.length} 
                        bringToFront={() => bringToFront(card.id)}
                    />
                ))}
            </motion.div>

            {/* Instruction Overlay */}
            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                <p className="text-slate-400 font-[Cinzel] tracking-widest text-sm md:text-base animate-pulse">
                    Arrastra las cartas con el ratón o el dedo
                </p>
            </div>
        </div>
    );
}
