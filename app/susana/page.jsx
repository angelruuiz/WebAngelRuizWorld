'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function SusanaPage() {
  const noBtnRef = useRef(null);
  const yesBtnRef = useRef(null);
  const step1Ref = useRef(null);
  const successRef = useRef(null);
  const mainCardRef = useRef(null);
  const cardHeaderRef = useRef(null);

  const [noClickCount, setNoClickCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [approved, setApproved] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [noText, setNoText] = useState('No');

  const noTexts = [
    "¿Segura?",
    "Piénsalo bien...",
    "¡Venga ya!",
    "¡No seas dura!",
    "¡Mira mi carita!",
    "Última oportunidad",
    "Me rindo... (mentira)"
  ];

  function moveButton() {
    if (!step1Ref.current || !noBtnRef.current) return;

    const containerWidth = step1Ref.current.offsetWidth;
    const containerHeight = step1Ref.current.offsetHeight;
    const btnWidth = noBtnRef.current.offsetWidth;
    const btnHeight = noBtnRef.current.offsetHeight;

    const newX = Math.random() * (containerWidth - btnWidth);
    const btnArea = step1Ref.current.querySelector('.btn-area');
    const btnAreaY = btnArea ? btnArea.offsetTop : containerHeight / 2;
    const randomYOffset = (Math.random() * 100) - 50;

    setNoBtnStyle({
      position: 'absolute',
      left: `${Math.max(10, Math.min(newX, containerWidth - btnWidth - 10))}px`,
      top: `${Math.max(10, btnAreaY + randomYOffset)}px`,
      right: 'auto',
    });
  }

  function handleNo(e) {
    e.preventDefault();
    moveButton();

    setNoClickCount(prev => {
      const next = prev + 1;
      if (prev < noTexts.length) {
        setNoText(noTexts[prev]);
      } else {
        setNoText("¡He dicho que NO!");
      }
      return next;
    });

    setYesScale(prev => prev + 0.2);
  }

  function handleYes() {
    setShowSuccess(true);
    setApproved(true);
  }

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Fredoka+One&display=swap');

        .susana-page {
          font-family: 'Comic Neue', cursive !important;
          background-color: #e0f2fe !important;
          background-image: radial-gradient(#bae6fd 1px, transparent 1px) !important;
          background-size: 20px 20px !important;
          overflow-x: hidden;
        }

        .susana-page h1,
        .susana-page h2,
        .susana-page .btn-text {
          font-family: 'Fredoka One', cursive !important;
        }

        .planes-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .plane {
          position: absolute;
          opacity: 0.6;
          font-size: 3rem;
        }

        .p1 { top: 15%; animation: flyRight 14s linear infinite; }
        .p2 { top: 40%; font-size: 2rem; animation: flyLeft 18s linear infinite 2s; right: -20%; }
        .p3 { top: 70%; font-size: 4rem; animation: flyRight 12s linear infinite 5s; }
        .p4 { top: 85%; font-size: 2.5rem; animation: flyLeft 22s linear infinite 8s; right: -20%; }
        .p5 { top: 5%; font-size: 5rem; opacity: 0.3; animation: flyRight 25s linear infinite 10s; }
        .p6 { top: 55%; font-size: 3.5rem; animation: flyLeft 15s linear infinite 1s; right: -20%; }

        @keyframes flyRight {
          0% { left: -20vw; transform: rotate(10deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { left: 120vw; transform: rotate(15deg); }
        }

        @keyframes flyLeft {
          0% { right: -20vw; transform: scaleX(-1) rotate(10deg); }
          50% { transform: scaleX(-1) translateY(-20px) rotate(5deg); }
          100% { right: 120vw; transform: scaleX(-1) rotate(15deg); }
        }

        .shake:hover {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }

        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .ticket-divider {
          border-bottom: 3px dashed #93c5fd;
          position: relative;
          margin: 1.5rem 0;
        }

        .ticket-divider::before,
        .ticket-divider::after {
          content: '';
          position: absolute;
          top: -12px;
          width: 24px;
          height: 24px;
          background-color: #e0f2fe;
          border-radius: 50%;
        }
        .ticket-divider::before { left: -36px; }
        .ticket-divider::after { right: -36px; }

        .pulse-alert {
          animation: pulse-red 2s infinite;
        }
        @keyframes pulse-red {
          0%, 100% { background-color: #fee2e2; border-color: #fca5a5; }
          50% { background-color: #fecaca; border-color: #f87171; }
        }

        .susana-card-celebrate {
          transition: all 0.5s ease;
        }
      `}</style>

      <div className="susana-page min-h-screen flex items-center justify-center p-4">
        {/* Aviones animados de fondo */}
        <div className="planes-container">
          <div className="plane p1">✈️</div>
          <div className="plane p2">✈️</div>
          <div className="plane p3">✈️</div>
          <div className="plane p4">✈️</div>
          <div className="plane p5">✈️</div>
          <div className="plane p6">✈️</div>
        </div>

        {/* Card principal */}
        <div
          ref={mainCardRef}
          className="bg-white rounded-3xl shadow-2xl pb-8 pt-0 px-0 max-w-md w-full text-center relative z-10 flex flex-col mx-2 susana-card-celebrate"
        >
          {/* Cabecera estilo reporte oficial */}
          <div
            ref={cardHeaderRef}
            className={`${
              approved
                ? 'bg-gradient-to-r from-green-500 to-green-600'
                : 'bg-gradient-to-r from-red-500 to-red-600'
            } text-white py-5 px-6 rounded-t-3xl shadow-md relative overflow-hidden transition-colors duration-500`}
          >
            <div className="absolute -right-4 -top-4 text-6xl opacity-20 transform rotate-12">
              {approved ? '✅' : '🚨'}
            </div>
            <h1 className="text-2xl font-bold tracking-wider uppercase">
              {approved ? 'Resolución Aprobada' : 'Reporte de Incidencia'}
            </h1>
            <p className="text-sm font-semibold opacity-90 mt-1">
              {approved ? 'Pasajero Perdonado' : 'Vuelo: Disculpas 777'}
            </p>
          </div>

          <div className="px-6 pt-6 overflow-hidden">
            {/* Step 1: Formulario */}
            {!showSuccess && (
              <div ref={step1Ref} style={{ position: 'relative' }}>
                {/* Bloque de declaración */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 mb-5 shadow-inner relative mt-2">
                  <span className="absolute -top-3 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    Declaración
                  </span>
                  <p className="text-md text-gray-700 leading-relaxed font-medium mt-2">
                    Yo, en calidad de pasajero problemático, reconozco formalmente que he causado turbulencias innecesarias y la he liado.
                  </p>
                </div>

                {/* Bloque de alerta visual */}
                <div className="pulse-alert border-2 rounded-xl p-4 mb-6 transform rotate-1 transition-transform hover:rotate-0 shadow-sm">
                  <p className="text-xs text-red-800 font-bold uppercase tracking-wider mb-1">
                    ⚠️ Estado Actual del Pasajero ⚠️
                  </p>
                  <p className="text-lg text-red-700 font-black">
                    ARREPENTIDO EN CLASE TURISTA
                  </p>
                </div>

                <div className="ticket-divider"></div>

                <p className="text-lg text-blue-900 mb-6 font-bold bg-blue-50 py-3 px-2 rounded-xl border border-blue-200 shadow-sm">
                  ¿Me retiras el veto de vuelo y me perdonas?
                </p>

                {/* Botones */}
                <div className="btn-area flex justify-center gap-4 relative h-16 w-full mt-2">
                  <button
                    ref={yesBtnRef}
                    onClick={handleYes}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white btn-text py-3 px-8 rounded-full shadow-[0_5px_15px_rgba(59,130,246,0.4)] hover:scale-110 transition-all text-xl shake z-20 w-32"
                    style={{ transform: `scale(${yesScale})` }}
                  >
                    ¡SÍ!
                  </button>
                  <button
                    ref={noBtnRef}
                    onMouseOver={moveButton}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleNo(e);
                    }}
                    onClick={handleNo}
                    className="bg-gray-100 text-gray-500 border-2 border-gray-300 btn-text py-3 px-6 rounded-full shadow-sm text-lg z-10 touch-none"
                    style={{
                      position: noBtnStyle.position || 'absolute',
                      left: noBtnStyle.left,
                      top: noBtnStyle.top,
                      right: noBtnStyle.right ?? '0',
                    }}
                  >
                    {noText}
                  </button>
                </div>
              </div>
            )}

            {/* Mensaje de éxito */}
            {showSuccess && (
              <div>
                <div className="text-7xl mb-2 animate-bounce drop-shadow-md">🛬</div>
                <h2 className="text-3xl text-green-500 mb-2 font-black uppercase tracking-wide">
                  ¡Veto Levantado!
                </h2>
                <div className="inline-block bg-green-100 text-green-700 font-bold px-4 py-1 rounded-full mb-6 border border-green-300">
                  Aterrizaje de emergencia exitoso
                </div>

                <p className="text-md text-gray-700 mb-5 font-medium">
                  Gracias por no tirarme por la salida de emergencia en pleno vuelo. A cambio te debo:
                </p>

                <ul className="text-left bg-blue-50 rounded-2xl p-5 mb-6 border-2 border-dashed border-blue-300 shadow-sm">
                  <li className="mb-4 flex items-center">
                    <span className="text-2xl mr-3 bg-white p-2 rounded-full shadow-sm">🍔</span>
                    <span className="font-medium text-gray-700 leading-tight">
                      Una cena donde tú elijas (prometo no quejarme).
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3 bg-white p-2 rounded-full shadow-sm">🍿</span>
                    <span className="font-medium text-gray-700 leading-tight">
                      Peli o serie a tu elección (incluso si me duermo).
                    </span>
                  </li>
                </ul>

                <div className="ticket-divider"></div>

                <p className="font-bold text-blue-600 text-lg mb-4">
                  ¡Prometo portarme como un pasajero VIP! ✈️
                </p>

                {/* Código de barras falso estético */}
                <div className="mt-4 flex justify-center opacity-30 h-10 items-end">
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                  <div className="h-4/5 w-2 bg-black mx-[1px]"></div>
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                  <div className="h-5/6 w-3 bg-black mx-[1px]"></div>
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                  <div className="h-4/5 w-2 bg-black mx-[1px]"></div>
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                  <div className="h-full w-2 bg-black mx-[1px]"></div>
                  <div className="h-5/6 w-1 bg-black mx-[1px]"></div>
                  <div className="h-full w-1 bg-black mx-[1px]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
