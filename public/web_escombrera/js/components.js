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
};

/* ---------------------------------------------------------------
   Renderiza la lista de eventos filtrada
   --------------------------------------------------------------- */
Components.renderEventCardsList = function (container, publishedEvents) {
  container.innerHTML = '';
  const filter = Components.currentYearFilter;

  const filteredEvents = publishedEvents.filter(event => {
    if (filter === 'all') return true;
    return event.sortDate && event.sortDate.startsWith(filter);
  });

  container.setAttribute('data-count', filteredEvents.length);

  filteredEvents.forEach((event, index) => {
    const card = document.createElement('div');
    card.className = 'bento-item event-card neo-card reveal';
    card.classList.add(`reveal-delay-${(index % 4) + 1}`);
    if (event.size) {
      card.classList.add(event.size);
    }
    card.setAttribute('data-event-id', event.id);
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Evento: ${event.title}`);

    const coverHTML = event.coverImage
      ? `<img class="event-cover" src="${event.coverImage}" alt="${event.title}">`
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
        ${hasVideos ? event.galleryVideos.map((video, i) => `<video controls preload="metadata" aria-label="${event.title} — vídeo ${i + 1}"><source src="${video}" type="video/mp4">Tu navegador no puede reproducir este vídeo.</video>`).join('') : ''}
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

  // Click en galería para lightbox
  const galleryImages = modal.querySelectorAll('.event-gallery img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      Components.openLightbox(img.src);
    });
  });
};

/* ---------------------------------------------------------------
   Lightbox — vista ampliada de fotos
   --------------------------------------------------------------- */
Components.openLightbox = function (src) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  if (!overlay || !img) return;

  img.src = src;

  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  document.getElementById('lightbox-close').onclick = Components.closeLightbox;

  overlay.onclick = function (e) {
    if (e.target === overlay) Components.closeLightbox();
  };
};

Components.closeLightbox = function () {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('active');
};

/* ---------------------------------------------------------------
   Cierra el modal de evento
   --------------------------------------------------------------- */
Components.closeEventDetail = function () {
  const overlay = document.getElementById('event-modal-overlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';
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
   Renderiza el countdown del próximo evento
   --------------------------------------------------------------- */
Components.renderNextEvent = function () {
  if (!window.EVENTS) return;

  var section = document.getElementById('next-event-section');
  if (!section) return;

  // Buscar el próximo evento futuro
  var now = new Date();
  var futureEvents = window.EVENTS
    .filter(function (e) {
      if (!e.sortDate) return false;
      var eventDate = new Date(e.sortDate + 'T00:00:00');
      return eventDate > now;
    })
    .sort(function (a, b) {
      return a.sortDate.localeCompare(b.sortDate);
    });

  if (futureEvents.length === 0) {
    section.classList.add('hidden');
    return;
  }

  var nextEvent = futureEvents[0];
  var eventDate = new Date(nextEvent.sortDate + 'T00:00:00');

  // Mostrar la sección
  section.classList.remove('hidden');

  // Rellenar datos del evento
  var nameEl = document.getElementById('countdown-event-name');
  var dateEl = document.getElementById('countdown-event-date');
  if (nameEl) nameEl.textContent = nextEvent.title;
  if (dateEl) dateEl.textContent = '📅 ' + nextEvent.date;

  // Countdown tick cada segundo
  function updateCountdown() {
    var now = new Date();
    var diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      // El evento ya llegó
      document.getElementById('cd-days').textContent = '🎉';
      document.getElementById('cd-hours').textContent = '';
      document.getElementById('cd-mins').textContent = '';
      document.getElementById('cd-secs').textContent = '';
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    var daysEl = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minsEl = document.getElementById('cd-mins');
    var secsEl = document.getElementById('cd-secs');

    // Tick animation cuando cambia un valor
    function updateDigit(el, value) {
      var formatted = value < 10 ? '0' + value : '' + value;
      if (el && el.textContent !== formatted) {
        el.textContent = formatted;
        el.classList.add('tick');
        setTimeout(function () { el.classList.remove('tick'); }, 300);
      }
    }

    updateDigit(daysEl, days);
    updateDigit(hoursEl, hours);
    updateDigit(minsEl, mins);
    updateDigit(secsEl, secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Botón de añadir al calendario (.ics)
  var calBtn = document.getElementById('countdown-add-cal');
  if (calBtn) {
    calBtn.addEventListener('click', function () {
      var icsDate = nextEvent.sortDate.replace(/-/g, '');
      var endDate = icsDate; // Evento de día completo
      var ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Peña La Escombrera//ES',
        'BEGIN:VEVENT',
        'DTSTART;VALUE=DATE:' + icsDate,
        'DTEND;VALUE=DATE:' + endDate,
        'SUMMARY:' + nextEvent.title + ' — Peña La Escombrera',
        'DESCRIPTION:' + (nextEvent.summary || ''),
        'LOCATION:Torrelodones, Madrid',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = nextEvent.id + '.ics';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
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
