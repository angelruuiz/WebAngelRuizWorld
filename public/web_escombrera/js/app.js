/**
 * Lógica principal — Peña La Escombrera
 * Sistema de vistas con sidebar (desktop) y bottom bar (mobile)
 */

window.App = {};

/* ---------------------------------------------------------------
   Inicialización
   --------------------------------------------------------------- */
App.init = function () {
  App.initNavigation();
  App.initThemeToggle();
  App.renderComponents();
  App.revealView('view-inicio');
};

/* ---------------------------------------------------------------
   Renderizar componentes dinámicos
   --------------------------------------------------------------- */
App.renderComponents = function () {
  if (document.getElementById('events-grid')) {
    window.Components.renderEventCards('events-grid');
  }
  if (document.getElementById('collab-grid')) {
    window.Components.renderCollaborators('collab-grid');
  }
  if (document.getElementById('hero-bg-gallery')) {
    window.Components.initHeroGallery('hero-bg-gallery');
  }
  // MVP — Most Valuable Parrandero
  if (document.getElementById('mvp-container')) {
    window.Components.renderMVP('mvp-container');
  }
  // Cuenta atrás del próximo evento
  if (document.getElementById('next-event-section')) {
    window.Components.renderNextEvent();
  }
};

/* ---------------------------------------------------------------
   Navegación por vistas
   --------------------------------------------------------------- */
App.initNavigation = function () {
  // Recoger todos los botones de navegación usando delegación
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-view]');
    if (btn) {
      const viewId = btn.getAttribute('data-view');
      App.switchView(viewId);

      // Si viene del drawer móvil, cerrarlo
      const drawerOverlay = document.getElementById('mobile-drawer-overlay');
      if (drawerOverlay && btn.closest('.mobile-drawer')) {
        drawerOverlay.classList.remove('active');
      }
    }
  });

  // Mostrar / Ocultar Drawer "Más"
  const moreBtn = document.getElementById('bar-item-more');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');
  const drawerClose = document.getElementById('mobile-drawer-close');

  if (moreBtn && drawerOverlay) {
    moreBtn.addEventListener('click', function () {
      drawerOverlay.classList.add('active');
    });
  }

  if (drawerClose && drawerOverlay) {
    drawerClose.addEventListener('click', function () {
      drawerOverlay.classList.remove('active');
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function (e) {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove('active');
      }
    });
  }
};

App.switchView = function (viewId) {
  const targetView = document.getElementById('view-' + viewId);
  if (!targetView) return;

  if (viewId !== 'jabali-run' && window.JabaliGame) {
    window.JabaliGame.stop();
  }

  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(function (v) {
    v.classList.remove('active');
  });

  // Mostrar la vista destino
  targetView.classList.add('active');

  // Scroll al inicio de la vista
  targetView.scrollTop = 0;

  // Actualizar estado activo en sidebar
  document.querySelectorAll('.sidebar .nav-item').forEach(function (item) {
    item.classList.remove('active');
    item.removeAttribute('aria-current');
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'page');
    }
  });

  // Actualizar estado activo en bottom bar
  const subViews = ['nosotros', 'news', 'sedes', 'contacto'];
  document.querySelectorAll('.bottom-bar .bar-item').forEach(function (item) {
    item.classList.remove('active');
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    }
  });

  const moreBtn = document.getElementById('bar-item-more');
  if (moreBtn) {
    if (subViews.includes(viewId)) {
      moreBtn.classList.add('active');
    } else {
      moreBtn.classList.remove('active');
    }
  }

  // Revelar elementos animados de la nueva vista
  App.revealView('view-' + viewId);
};

/* ---------------------------------------------------------------
   Revelar elementos con animación al entrar en una vista
   --------------------------------------------------------------- */
App.revealView = function (viewId) {
  const view = document.getElementById(viewId);
  if (!view) return;

  const reveals = view.querySelectorAll('.reveal:not(.revealed)');
  reveals.forEach(function (el, i) {
    // Escalonar con un pequeño delay basado en el orden
    const baseDelay = 80; // ms entre cada elemento
    setTimeout(function () {
      el.classList.add('revealed');
    }, baseDelay * i);
  });
};

/* ---------------------------------------------------------------
   Tema claro / oscuro
   --------------------------------------------------------------- */
App.initThemeToggle = function () {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Botón del sidebar (desktop)
  const sidebarToggle = document.getElementById('theme-toggle');
  // Botón del header móvil
  const mobileToggle = document.getElementById('theme-toggle-mobile');

  function updateIcons(theme) {
    const icon = theme === 'light' ? '🌙' : '☀️';
    if (sidebarToggle) {
      sidebarToggle.querySelector('.theme-icon').textContent = icon;
    }
    if (mobileToggle) {
      mobileToggle.textContent = icon;
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcons(next);
  }

  // Aplicar iconos iniciales
  updateIcons(savedTheme);

  // Event listeners
  if (sidebarToggle) sidebarToggle.addEventListener('click', toggleTheme);
  if (mobileToggle) mobileToggle.addEventListener('click', toggleTheme);
};

/* ---------------------------------------------------------------
   Arranque
   --------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', App.init);
