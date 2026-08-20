/**
 * Easter Eggs & Gags Divertidos — Peña La Escombrera
 * Archivo: easter.js
 */

(function () {
  // Frases de Toñín y Toñina
  const TONIN_QUOTES = [
    "¡Oink! ¿Qué miras? Anda, invítame a una caña en El Atril. 🍻",
    "¿Escombro? Yo lo llamo hogar. 🐗",
    "El pañuelo amarillo me queda de locos, admítelo.",
    "¿Has visto a Toñina? Está mandoneándome otra vez.",
    "Si hay barra libre, yo soy el primero en la cola."
  ];

  const TONINA_QUOTES = [
    "¡Deja de tocarme la nariz y ve a por un pañuelo amarillo! 💛",
    "Si Toñín monta la fiesta, yo tengo que organizar el desmadre... 🙄",
    "Organizar a 52 cafres no es fácil. ¡Respeta mi autoridad!",
    "¿Has leído ya los estatutos oficiales? Los tienes a un click.",
    "¡Menos risas y más empujar el carro de la carroza!"
  ];

  // Chisme de Parejas Imposibles (Egg 4)
  const GOSSIP_TITLES = [
    "¡EXCLUSIVA HISTÓRICA EN LA ESCOMBRERA!",
    "¡ESCÁNDALO EN EL CONCURSO DE DISFRACES!",
    "¡SE FILTRAN LAS FOTOS PROHIBIDAS DE LA FIESTA!"
  ];

  const GOSSIP_TEXTS = [
    "Testigos presenciales afirman que Toñín y Toñina vistieron exactamente el mismo disfraz por error y pasaron toda la noche ignorándose mutuamente en la barra de El Atril para evitar el bochorno.",
    "Fuentes fiables confirman que dos socios fundadores intentaron sobornar al jurado con un plato de croquetas frías. El jurado aceptó el soborno, pero les dio la puntuación más baja por no llevar suficiente salsa.",
    "Última hora: Se descubre que el disfraz ganador del concurso de Parejas Imposibles fue diseñado por una inteligencia artificial. Varios peñistas exigen la repetición del concurso y una ronda de tercios de compensación."
  ];

  // 1. Egg 1: Mascotas parlantes
  function initMascotsTalk() {
    const cards = document.querySelectorAll('.mascot-card');
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () {
        // Sacudida CSS
        card.classList.add('shake-mascot');
        setTimeout(() => card.classList.remove('shake-mascot'), 500);

        // Eliminar burbujas previas en esta tarjeta
        const oldBubble = card.querySelector('.speech-bubble');
        if (oldBubble) oldBubble.remove();

        const name = card.querySelector('.mascot-name').textContent.trim();
        const quotes = name === 'Toñín' ? TONIN_QUOTES : TONINA_QUOTES;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Crear burbuja de diálogo
        const bubble = document.createElement('div');
        bubble.className = 'speech-bubble';
        bubble.textContent = randomQuote;
        card.appendChild(bubble);

        // Auto-destruir burbuja
        setTimeout(() => {
          bubble.classList.add('fade-out');
          setTimeout(() => bubble.remove(), 300);
        }, 3500);
      });
    });
  }

  // 2. Egg 2: Decreto Presidencial
  function initPresidentDecree() {
    const trigger = document.getElementById('president-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      // Crear overlay del decreto
      const overlay = document.createElement('div');
      overlay.className = 'decree-overlay';
      overlay.innerHTML = `
        <div class="decree-scroll">
          <div class="decree-crown">👑</div>
          <h2 class="decree-title">DECRETO PRESIDENCIAL</h2>
          <h3 class="decree-subtitle">DE LA PEÑA LA ESCOMBRERA</h3>
          <hr class="decree-divider">
          <p class="decree-text">
            Por orden irrevocable de nuestro excelentísimo presidente, <strong>Juan Manuel Fernández</strong>, 
            se hace saber a toda la manada que la persona que lea este pergamino secreto queda declarada 
            oficialmente como <strong>"El Pagador de la Ronda"</strong> de la noche.
          </p>
          <p class="decree-text">
            Queda obligado por ley escombrera a costear los tercios y refrescos de todos los socios presentes en la sede. No se aceptan reclamaciones ni Bizums a medias.
          </p>
          <p class="decree-date">Dado en Torrelodones, Madrid.</p>
          <button class="decree-btn">🍻 Acepto mi destino (Y pago)</button>
        </div>
      `;

      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      // Cerrar modal
      overlay.querySelector('.decree-btn').addEventListener('click', function () {
        overlay.classList.add('fade-out');
        setTimeout(() => {
          overlay.remove();
          document.body.style.overflow = '';
        }, 300);
      });
    });
  }

  // 3. Egg 3: Lluvia de escombros (sonido sintético + emojis cayendo)
  let logoClicks = 0;
  let logoTimer = null;

  function playRubbleSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      // Sonido de explosión/ruido marrón sintetizado
      const bufferSize = ctx.sampleRate * 1.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 1.2);
      
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.4);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      noise.start();
    } catch (e) {}
  }

  function triggerRubbleRain() {
    playRubbleSound();

    const emojis = ["🧱", "🪨", "🚧", "🔨", "🔧", "🐗"];
    const container = document.body;

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'rubble-particle';
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Posición horizontal y retraso aleatorios
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDelay = Math.random() * 0.8 + 's';
      particle.style.fontSize = (20 + Math.random() * 25) + 'px';
      
      container.appendChild(particle);

      // Auto-eliminar tras caer
      setTimeout(() => particle.remove(), 2500);
    }
  }

  function initRubbleRain() {
    const logos = document.querySelectorAll('.sidebar-logo, .mobile-header-logo');
    logos.forEach(logo => {
      logo.addEventListener('click', function () {
        triggerRubbleRain();
      });
    });
  }

  function showGossipModal() {
    const title = GOSSIP_TITLES[Math.floor(Math.random() * GOSSIP_TITLES.length)];
    const text = GOSSIP_TEXTS[Math.floor(Math.random() * GOSSIP_TEXTS.length)];

    const overlay = document.createElement('div');
    overlay.className = 'gossip-overlay';
    overlay.innerHTML = `
      <div class="gossip-modal">
        <div class="gossip-badge">🔥 EXCLUSIVA SENSACIONALISTA</div>
        <h2 class="gossip-title">${title}</h2>
        <hr class="gossip-line">
        <p class="gossip-text">${text}</p>
        <div class="gossip-footer">Información no contrastada pero 100% real de la peña.</div>
        <button class="gossip-btn">CERRAR EXCLUSIVA 🤫</button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.querySelector('.gossip-btn').addEventListener('click', function () {
      overlay.classList.add('fade-out');
      setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = '';
      }, 300);
    });
  }

  // 5. Interceptores de Modales de Eventos (Cabalgata y Parejas Imposibles)
  function initEventModalsInterceptors() {
    if (!window.Components) return;

    const originalOpen = window.Components.openEventDetail;
    window.Components.openEventDetail = function (eventId) {
      // Abrir el modal normalmente
      originalOpen(eventId);

      // Si es la cabalgata, bindear el click en el título
      if (eventId === 'cabalgata-reyes') {
        setTimeout(() => {
          const titleEl = document.querySelector('.event-modal-title');
          if (titleEl) {
            titleEl.classList.add('cabalgata-shaker');
            titleEl.style.cursor = 'help';
            titleEl.title = 'Haz click para revelar un secreto';
            titleEl.addEventListener('click', function () {
              showToast("👑 Confesión: Ganamos el 2º premio de la cabalgata... porque el 1º estaba comprado por el Ayuntamiento, no tenemos pruebas pero tampoco dudas. 🤫");
            });
          }
        }, 150);
      }

      // Si es parejas imposibles, añadir botón COTILLEO al lado del título
      if (eventId === 'parejas-imposibles') {
        setTimeout(() => {
          const titleEl = document.querySelector('.event-modal-title');
          if (titleEl) {
            // Evitar duplicaciones
            if (!document.getElementById('gossip-trigger-btn')) {
              const button = document.createElement('button');
              button.id = 'gossip-trigger-btn';
              button.className = 'gossip-trigger-btn';
              button.textContent = '⚡ COTILLEO';
              titleEl.parentNode.insertBefore(button, titleEl.nextSibling);
              button.addEventListener('click', showGossipModal);
            }
          }
        }, 150);
      }
    };
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'escombrera-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 5500);
  }

  // Arrancar todos los huevos de pascua
  function initAll() {
    initMascotsTalk();
    initPresidentDecree();
    initRubbleRain();
    initEventModalsInterceptors();
  }

  document.addEventListener('DOMContentLoaded', initAll);
})();
