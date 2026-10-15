/**
 * Registro de ganadores del premio MVP (Most Valuable Parrandero)
 * Archivo: mvp.js
 *
 * Estructura de datos para los MVPs de la Peña La Escombrera.
 * El renderizado se hace en components.js → Components.renderMVP()
 */

const MVP_WINNERS = [
  {
    eventId: 'hoces-duraton',
    eventTitle: 'Viaje a las Hoces del Duratón',
    date: 'Octubre de 2026',
    sortDate: '2026-10',
    winner: 'Jaime',
    photo: 'assets/mvp/jaime.png',
    reason: 'Por estar a tope durante todo el viaje, con el ánimo por las nubes y contagiando sus ganas imparables de fiesta a toda la manada.'
  },
  {
    eventId: 'carmen-asuncion',
    eventTitle: 'Fiestas de la Asunción',
    date: 'Agosto de 2026',
    sortDate: '2026-08',
    winner: 'Gallego',
    photo: 'assets/mvp/gallego.png',
    reason: 'Por darlo absolutamente todo en la calle y el chiringuito, defendiendo el espíritu escombrero.'
  },
  {
    eventId: 'carmen-asuncion',
    eventTitle: 'Fiestas del Carmen',
    date: 'Julio de 2026',
    sortDate: '2026-07-2',
    winner: 'El Mago',
    photo: 'assets/mvp/el-mago.png',
    reason: 'Por poner la magia dentro y fuera de la barra y ser el alma parrandera de las fiestas del Carmen.'
  },
  {
    eventId: 'carmen-asuncion',
    eventTitle: 'Fiestas del Carmen',
    date: 'Julio de 2026',
    sortDate: '2026-07-1',
    winner: 'Paula',
    photo: 'assets/mvp/paula.png',
    reason: 'Por su energía inagotable, liderar los cánticos en la barra y mantener a toda la manada arriba.'
  }
];

// Hacer el array accesible globalmente
window.MVP_WINNERS = MVP_WINNERS;

