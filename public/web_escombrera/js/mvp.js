/**
 * Registro de ganadores del premio MVP (Most Valuable Parrandero)
 * Archivo: mvp.js
 *
 * Estructura de datos para los MVPs de la Peña La Escombrera.
 * El renderizado se hace en components.js → Components.renderMVP()
 */

const MVP_WINNERS = [
  // Para añadir un ganador, copia esta estructura y rellena:
  // {
  //   eventId: 'fallas-torre',          // ID del evento (de events.js)
  //   eventTitle: 'Las Fallas',          // Nombre del evento
  //   date: '21 de marzo de 2026',       // Fecha del evento
  //   winner: 'Nombre del Ganador',      // Nombre del MVP
  //   photo: 'assets/mvp/fallas.jpg',    // Foto del MVP (null si no hay)
  //   reason: 'Por ser el alma de la fiesta'  // Motivo del premio
  // }
];

// Hacer el array accesible globalmente
window.MVP_WINNERS = MVP_WINNERS;
