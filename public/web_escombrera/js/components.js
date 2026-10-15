/**
 * Componentes de la UI para la Peña La Escombrera
 * Archivo: components.js
 *
 * Funciones de renderizado dinámico para tarjetas de eventos,
 * modal de detalle y grid de colaboradores.
 */

window.Components = {};

/* ---------------------------------------------------------------
   Renderiza las tarjetas de eventos (masonry / Pinterest)
   --------------------------------------------------------------- */
Components.currentYearFilter = 'all';

Components.renderEventCards = function (containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtersContainer = document.getElementById('event-filters');

  // Solo se publican eventos que ya tienen una foto de portada.
  // Orden: más reciente arriba. Los que no tienen sortDate van al final.
  const publishedEvents = window.EVENTS
    .filter((event) => event.coverImage)
    .sort((a, b) => (b.sortDate || '0000-00-00').localeCompare(a.sortDate || '0000-00-00'));

  // Extraer años únicos
  const years = new Set();
  publishedEvents.forEach(e => {
    if (e.sortDate && e.sortDate !== '0000-00-00') {
      years.add(e.sortDate.substring(0, 4));
    }
  });
  const yearsArray = Array.from(years).sort((a, b) => b - a);

  // Inicializar los botones de filtro solo la primera vez
  if (filtersContainer && filtersContainer.children.length === 0) {
    let filtersHTML = `<button class="filter-btn active" data-year="all">Todos</button>`;
    yearsArray.forEach(year => {
      filtersHTML += `<button class="filter-btn" data-year="${year}">${year}</button>`;
    });
    filtersContainer.innerHTML = filtersHTML;

    // Escuchar clicks en los filtros
    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        Components.currentYearFilter = e.target.getAttribute('data-year');
        Components.renderEventCardsList(container, publishedEvents);
      });
    });
  }

  // Renderizar la lista inicial
  Components.renderEventCardsList(container, publishedEvents);

  // Escuchar redimensionamiento para recalcular spans si cambia el número de columnas
  if (!Components._resizeBound) {
    Components._resizeBound = true;
    let resizeTimer = null;
    let lastCols = Components.getGridColumnCount();
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        const currentCols = Components.getGridColumnCount();
        if (currentCols !== lastCols) {
          lastCols = currentCols;
          const c = document.getElementById(containerId);
          if (c) Components.renderEventCardsList(c, publishedEvents);
        }
      }, 100);
    });
  }
};

/* ---------------------------------------------------------------
   Cálculo dinámico de anchos para la cuadrícula Bento (CERO HUECOS)
   Garantiza que la suma de columnas en cada fila sea exacta:
   - 3 columnas en Desktop ([2,1], [1,2], [1,1,1])
   - 2 columnas en Tablet ([1,1] o [2])
   - 1 columna en Móvil ([1])
   --------------------------------------------------------------- */
Components.getGridColumnCount = function () {
  const w = window.innerWidth;
  if (w <= 768) return 1;
  if (w <= 1024) return 2;
  return 3;
};

Components.calculateCardSpans = function (n, cols) {
  if (n <= 0) return [];
  if (cols === undefined) cols = Components.getGridColumnCount();

  if (cols === 1) return Array(n).fill('span-1');

  if (cols === 2) {
    const result = [];
    if (n % 2 === 1) {
      // Si n es impar: el primer elemento es span-2 (fila 1 completa), el resto van a pares de span-1
      result.push('span-2');
      for (let i = 1; i < n; i++) result.push('span-1');
    } else {
      // Si n es par: si n >= 6 destacamos 2 tarjetas (en filas independientes y cerradas)
      if (n >= 6) {
        result.push('span-2');             // fila 1: 1 tarjeta de 2 cols
        result.push('span-1', 'span-1');   // fila 2: 2 tarjetas de 1 col
        result.push('span-2');             // fila 3: 1 tarjeta de 2 cols
        for (let i = 4; i < n; i++) result.push('span-1'); // filas restantes: pares de 1 col
      } else {
        for (let i = 0; i < n; i++) result.push('span-1');
      }
    }
    return result;
  }

  // cols === 3 (Desktop)
  if (n === 1) return ['span-full'];
  if (n === 2) return ['span-2', 'span-1'];
  if (n === 3) return ['span-1', 'span-1', 'span-1'];
  if (n === 4) return ['span-2', 'span-1', 'span-1', 'span-2'];
  if (n === 5) return ['span-2', 'span-1', 'span-1', 'span-1', 'span-1'];

  // Para n >= 6, descomponer n en filas de 2 ítems ([2, 1] o [1, 2]) y de 3 ítems ([1, 1, 1])
  // 2*P + 3*T = n
  let pairs = 0;
  let triplets = 0;
  let bestScore = -1;

  for (let p = Math.floor(n / 2); p >= 0; p--) {
    const rem = n - 2 * p;
    if (rem % 3 === 0) {
      const t = rem / 3;
      const score = (p > 0 ? 10 : 0) + (t > 0 ? 10 : 0) - Math.abs(2 * p - 3 * t);
      if (score > bestScore) {
        bestScore = score;
        pairs = p;
        triplets = t;
      }
    }
  }

  const result = [];
  let pCount = 0;
  let tCount = 0;

  while (pCount < pairs || tCount < triplets) {
    if (pCount < pairs && (tCount >= triplets || pCount <= tCount)) {
      if (pCount % 2 === 0) {
        result.push('span-2', 'span-1');
      } else {
        result.push('span-1', 'span-2');
      }
      pCount++;
    } else if (tCount < triplets) {
      result.push('span-1', 'span-1', 'span-1');
      tCount++;
    }
  }
  return result;
};

/* ---------------------------------------------------------------
   Renderiza la lista de eventos filtrada (sin huecos vacíos)
   --------------------------------------------------------------- */
Components.renderEventCardsList = function (container, publishedEvents) {
  container.innerHTML = '';
  const filter = Components.currentYearFilter;

  const filteredEvents = publishedEvents.filter(event => {
    if (filter === 'all') return true;
    return event.sortDate && event.sortDate.startsWith(filter);
  });

  const total = filteredEvents.length;
  container.setAttribute('data-count', total);

  // Spans armónicos calculados dinámicamente
  const spans = Components.calculateCardSpans(total);

  filteredEvents.forEach((event, index) => {
    const card = document.createElement('div');
    const spanClass = spans[index] || 'span-1';
    const tallClass = event.size === 'tall' ? 'tall' : '';
    card.className = `bento-item event-card neo-card reveal reveal-delay-${(index % 4) + 1} ${spanClass} ${tallClass}`.trim();

    card.setAttribute('data-event-id', event.id);
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Evento: ${event.title}`);

    const coverHTML = event.coverImage
      ? `<img class="event-cover" src="${event.coverImage}" alt="${event.title}" loading="lazy">`
      : `<div class="event-cover-placeholder">${event.icon}</div>`;

    card.innerHTML = `
      ${coverHTML}
      <div class="event-info">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-date">${event.date}</p>
      </div>
    `;

    card.addEventListener('click', () => Components.openEventDetail(event.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        Components.openEventDetail(event.id);
      }
    });

    container.appendChild(card);
  });

  // Forzar un reflow para que las animaciones (reveal) funcionen al cambiar el filtro
  setTimeout(() => {
    const reveals = container.querySelectorAll('.reveal');
    reveals.forEach(el => el.classList.add('revealed'));
  }, 50);
};

/* ---------------------------------------------------------------
   Abre el modal con los detalles del evento
   --------------------------------------------------------------- */
Components.openEventDetail = function (eventId) {
  const event = window.EVENTS.find((e) => e.id === eventId);
  if (!event) return;

  const overlay = document.getElementById('event-modal-overlay');
  const modal = document.getElementById('event-modal');
  if (!overlay || !modal) return;

  // Imagen de cabecera o placeholder
  const headerHTML = event.coverImage
    ? `<img src="${event.coverImage}" alt="${event.title}" class="event-modal-header-img">`
    : `<div class="event-cover-placeholder" style="height:250px;border-radius:var(--radius-xl) var(--radius-xl) 0 0;">${event.icon}</div>`;

  // Galería de fotos y vídeos
  let galleryHTML = '';
  const hasImages = event.galleryImages && event.galleryImages.length > 0;
  const hasVideos = event.galleryVideos && event.galleryVideos.length > 0;

  if (hasImages || hasVideos) {
    galleryHTML = `
      <h4 style="margin-bottom:var(--space-sm);font-weight:600;">Galería</h4>
      <div class="event-gallery">
        ${hasImages ? event.galleryImages.map((img, i) => `<img src="${img}" alt="${event.title} — foto ${i + 1}">`).join('') : ''}
        ${hasVideos ? event.galleryVideos.map((video, i) => `
          <div class="gallery-video-wrapper" data-video-src="${video}" role="button" tabindex="0" aria-label="Reproducir vídeo ${i + 1} de ${event.title}">
            <video preload="metadata" muted playsinline>
              <source src="${video}" type="video/mp4">
            </video>
            <div class="gallery-video-badge" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </div>
          </div>
        `).join('') : ''}
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="event-modal-header">
      ${headerHTML}
      <button class="event-modal-close" aria-label="Cerrar detalle del evento">&times;</button>
    </div>
    <div class="event-modal-body">
      <h2 class="event-modal-title">${event.title}</h2>
      <p class="event-modal-date">📅 ${event.date}</p>
      <p class="event-modal-summary">${event.summary}</p>
      ${galleryHTML}
    </div>
  `;

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  // Cerrar con botón ×
  modal.querySelector('.event-modal-close').addEventListener('click', Components.closeEventDetail);

  // Cerrar al clic fuera del modal
  overlay.addEventListener('click', function handler(e) {
    if (e.target === overlay) {
      Components.closeEventDetail();
      overlay.removeEventListener('click', handler);
    }
  });

  // Cerrar con ESC
  const escHandler = function (e) {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('lightbox-overlay');
      if (lightbox && lightbox.classList.contains('active')) {
        Components.closeLightbox();
      } else {
        Components.closeEventDetail();
        document.removeEventListener('keydown', escHandler);
      }
    }
  };
  document.addEventListener('keydown', escHandler);

  // Click en galería para lightbox fotos
  const galleryImages = modal.querySelectorAll('.event-gallery img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      Components.openLightbox(img.src);
    });
  });

  // Click en galería para pop up / lightbox vídeos
  const galleryVideos = modal.querySelectorAll('.event-gallery .gallery-video-wrapper');
  galleryVideos.forEach(wrapper => {
    const videoSrc = wrapper.getAttribute('data-video-src');
    const handleOpen = () => Components.openLightboxVideo(videoSrc);
    wrapper.addEventListener('click', handleOpen);
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });
};

/* ---------------------------------------------------------------
   Lightbox — vista ampliada de fotos y vídeos
   --------------------------------------------------------------- */
Components.openLightbox = function (src) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  if (!overlay || !img) return;

  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.style.display = 'none';
  }

  img.src = src;
  img.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  overlay.classList.add('active');

  document.getElementById('lightbox-close').onclick = Components.closeLightbox;

  overlay.onclick = function (e) {
    if (e.target === overlay) Components.closeLightbox();
  };
};

Components.openLightboxVideo = function (videoSrc) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  if (!overlay || !video) return;

  if (img) {
    img.src = '';
    img.style.display = 'none';
  }

  video.src = videoSrc;
  video.style.display = 'block';
  video.muted = false;
  video.volume = 1.0;
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  overlay.classList.add('active');
  video.play().catch(() => {
    // Si la directiva de reproducción automática del navegador bloquea el audio sin interacción previa,
    // se mantiene listo con los controles nativos para que el usuario pueda reproducirlo
  });

  document.getElementById('lightbox-close').onclick = Components.closeLightbox;

  overlay.onclick = function (e) {
    if (e.target === overlay) Components.closeLightbox();
  };
};

Components.closeLightbox = function () {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;

  const video = document.getElementById('lightbox-video');
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.style.display = 'none';
  }

  const img = document.getElementById('lightbox-img');
  if (img) {
    img.style.display = 'none';
    img.src = '';
  }

  overlay.classList.remove('active');
  const eventModal = document.getElementById('event-modal-overlay');
  if (!eventModal || !eventModal.classList.contains('active')) {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
};

/* ---------------------------------------------------------------
   Cierra el modal de evento
   --------------------------------------------------------------- */
Components.closeEventDetail = function () {
  const overlay = document.getElementById('event-modal-overlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
};

/* ---------------------------------------------------------------
   Renderiza la sección de colaboradores
   --------------------------------------------------------------- */
Components.renderCollaborators = function (containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const collaborators = [
    { name: 'Ayuntamiento de Torrelodones', logo: 'assets/colaboradores/ayuntamiento-torrelodones.png' },
    { name: 'Jorcano', logo: 'assets/colaboradores/jorcano.png' },
    { name: 'Ember Studio', logo: 'assets/colaboradores/ember-studio.png' },
    { name: 'R Fit', logo: 'assets/colaboradores/r-fit.png' },
    { name: 'EvaSic — Reprografía, Papelería y Regalos', logo: 'assets/colaboradores/evasic.png' },
  ];

  collaborators.forEach((collab, index) => {
    const card = document.createElement('div');
    card.className = 'collab-card neo-card reveal';
    card.classList.add(`reveal-delay-${(index % 4) + 1}`);
    card.setAttribute('role', 'listitem');

    card.innerHTML = `<img src="${collab.logo}" alt="Logo de ${collab.name}">`;
    container.appendChild(card);
  });
};

/* ---------------------------------------------------------------
   Renderiza la galería animada de fondo en el Home
   --------------------------------------------------------------- */
Components.initHeroGallery = function (containerId) {
  const container = document.getElementById(containerId);
  if (!container || !window.EVENTS) return;

  // Extraer todas las fotos (portadas y galerías, ignorando videos)
  let photos = [];
  window.EVENTS.forEach(ev => {
    if (ev.coverImage && !ev.coverImage.endsWith('.mp4')) {
      photos.push(ev.coverImage);
    }
    if (ev.galleryImages) {
      photos = photos.concat(ev.galleryImages.filter(img => !img.endsWith('.mp4')));
    }
  });

  if (photos.length === 0) return;

  // Barajar las fotos para que sea aleatorio cada vez
  photos = photos.sort(() => Math.random() - 0.5);

  const numRows = 5;
  let rowHTML = '';

  for (let i = 0; i < numRows; i++) {
    // Para asegurar un scroll infinito fluido, necesitamos bastantes fotos por fila
    // Tomamos una copia de las fotos, la desordenamos y la triplicamos
    const rowPhotos = [...photos].sort(() => Math.random() - 0.5);
    const trackPhotos = [...rowPhotos, ...rowPhotos, ...rowPhotos];
    
    let imgHTML = '';
    trackPhotos.forEach(src => {
      imgHTML += `<img src="${src}" alt="">`;
    });
    
    // Alternar dirección del movimiento
    const directionClass = i % 2 === 0 ? 'scroll-left' : 'scroll-right';
    rowHTML += `<div class="gallery-row ${directionClass}">${imgHTML}</div>`;
  }
  
  container.innerHTML = rowHTML;
};

/* ---------------------------------------------------------------
   Renderiza los stats animados — La Peña en Números
   --------------------------------------------------------------- */
Components.renderStats = function () {
  if (!window.EVENTS) return;

  // Calcular valores dinámicos
  const publishedEvents = window.EVENTS.filter(function (e) { return e.coverImage; });
  var totalPhotos = 0;
  window.EVENTS.forEach(function (e) {
    if (e.galleryImages) totalPhotos += e.galleryImages.length;
  });

  var currentYear = new Date().getFullYear();
  var yearsActive = currentYear - 2025 + 1; // Desde 2025

  // Actualizar data-target en los contadores dinámicos
  var statEvents = document.getElementById('stat-events');
  var statPhotos = document.getElementById('stat-photos');
  var statYears = document.getElementById('stat-years');

  if (statEvents) statEvents.setAttribute('data-target', publishedEvents.length);
  if (statPhotos) statPhotos.setAttribute('data-target', totalPhotos);
  if (statYears) statYears.setAttribute('data-target', yearsActive);

  // Animación de conteo con IntersectionObserver
  var statsGrid = document.getElementById('stats-grid');
  if (!statsGrid) return;

  var animated = false;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        Components._animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsGrid);
};

Components._animateCounters = function () {
  var counters = document.querySelectorAll('.stat-number');
  var duration = 2000; // ms

  counters.forEach(function (counter) {
    var target = parseInt(counter.getAttribute('data-target'), 10);
    if (isNaN(target) || target === 0) return;

    var start = 0;
    var startTime = null;

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing: ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      counter.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(tick);
  });
};

/* ---------------------------------------------------------------
   Renderiza la sección MVP — Most Valuable Parrandero
   --------------------------------------------------------------- */
Components.renderMVP = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var winners = window.MVP_WINNERS || [];

  if (winners.length === 0) {
    // Estado vacío: mensaje motivador
    container.innerHTML = '\
      <div class="mvp-empty-state reveal">\
        <span class="mvp-empty-icon">🏆</span>\
        <h3 class="mvp-empty-title">Próximamente…</h3>\
        <p class="mvp-empty-desc">\
          ¡Aquí brillarán los mejores parranderos de cada evento! \
          En cada celebración se elige al MVP — el socio que más la lía, \
          más anima y más se lo curra. ¿Serás tú el próximo?\
        </p>\
      </div>';
    return;
  }

  // Renderizar tarjetas de ganadores
  var html = '<div class="mvp-grid">';
  winners.forEach(function (mvp, index) {
    var photoHTML = mvp.photo
      ? '<img class="mvp-photo" src="' + mvp.photo + '" alt="' + mvp.winner + '">'
      : '<div class="mvp-photo-placeholder">🏆</div>';

    var reasonHTML = mvp.reason
      ? '<p class="mvp-reason">«' + mvp.reason + '»</p>'
      : '';

    html += '\
      <div class="mvp-card neo-card reveal reveal-delay-' + ((index % 4) + 1) + '">\
        ' + photoHTML + '\
        <div class="mvp-info">\
          <span class="mvp-trophy">🏆</span>\
          <p class="mvp-winner-name">' + mvp.winner + '</p>\
          <p class="mvp-event-name">' + mvp.eventTitle + '</p>\
          <p class="mvp-date">📅 ' + mvp.date + '</p>\
          ' + reasonHTML + '\
        </div>\
      </div>';
  });
  html += '</div>';
  container.innerHTML = html;
};
