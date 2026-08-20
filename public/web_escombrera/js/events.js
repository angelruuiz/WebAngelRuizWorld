/**
 * Datos de los eventos de la Peña La Escombrera
 * Archivo: events.js
 */

const EVENTS = [
  {
    id: 'nacimiento-manada',
    title: 'Nacimiento de la Manada',
    date: '25 de julio de 2025',
    sortDate: '2025-07-25',
    summary: 'El comienzo de nuestra historia: la presentación de la manada que formamos Peña La Escombrera. Un día para celebrar que, juntos, empezábamos esta aventura.',
    coverImage: 'assets/eventos/nacimiento-manada/foto_1.jpeg',
    galleryImages: [
      'assets/eventos/nacimiento-manada/foto_1.jpeg',
      'assets/eventos/nacimiento-manada/foto_2.jpeg',
      'assets/eventos/nacimiento-manada/foto_3.jpeg',
      'assets/eventos/nacimiento-manada/foto_4.jpeg'
    ],
    icon: '🐗',
    size: 'wide'
  },
  {
    id: 'inauguracion',
    title: 'Inauguración de La Escombrera',
    date: '14 de noviembre de 2025',
    sortDate: '2025-11-14',
    summary: 'El día en que dimos el pistoletazo de salida a esta gran aventura. Disfrutamos de un espectáculo de magia de la mano de Ángel Ruiz y cerramos la noche con una sesión de karaoke, rodeados de amigos, familia y muchas ganas de construir recuerdos juntos.',
    coverImage: 'assets/eventos/inauguracion/foto_1.jpg',
    galleryImages: [
      'assets/eventos/inauguracion/foto_1.jpg',
      'assets/eventos/inauguracion/foto_2.jpg',
      'assets/eventos/inauguracion/foto_3.jpg',
      'assets/eventos/inauguracion/foto_4.jpg'
    ],
    icon: '🎉',
    size: 'wide'
  },
  {
    id: 'parejas-imposibles',
    title: 'Concurso de Parejas Imposibles',
    date: '14 de febrero de 2026',
    sortDate: '2026-02-14',
    summary: '¡Prepara tu disfraz más alocado! Nuestro clásico concurso donde las combinaciones más extrañas y divertidas se llevan la palma. ¡Risas aseguradas y un ambiente inmejorable para celebrar las fiestas!',
    coverImage: 'assets/eventos/parejas-imposibles/foto_3.jpg',
    galleryImages: Array.from({ length: 19 }, (_, index) => `assets/eventos/parejas-imposibles/foto_${index + 1}.jpg`),
    galleryVideos: ['assets/eventos/parejas-imposibles/video_1.mp4'],
    icon: '🎭',
    size: 'wide'
  },
  {
    id: 'fallas-torre',
    title: 'Las Fallas',
    date: '21 de marzo de 2026',
    sortDate: '2026-03-21',
    summary: '¡No hace falta ir a Valencia para disfrutar del fuego y la pólvora! Celebramos nuestras propias Fallas en Torrelodones, quemando la rutina y dando la bienvenida a la primavera con mucha energía y buen rollo.',
    coverImage: 'assets/eventos/fallas-torre/foto_1.jpg',
    galleryImages: Array.from({ length: 11 }, (_, index) => `assets/eventos/fallas-torre/foto_${index + 1}.jpg`),
    galleryVideos: Array.from({ length: 2 }, (_, index) => `assets/eventos/fallas-torre/video_${index + 1}.mp4`),
    icon: '🔥',
    size: 'tall'
  },
  {
    id: 'san-isidro',
    title: 'Fiesta de San Isidro',
    date: '16 de mayo de 2026',
    sortDate: '2026-05-16',
    summary: 'Nos ponemos el pañuelo y la parpusa para homenajear al patrón de Madrid. Un día lleno de chotis, rosquillas y la mejor compañía escombrera. ¡Ven a pasarlo en grande!',
    coverImage: 'assets/eventos/san-isidro/foto_1.jpg',
    galleryImages: Array.from({ length: 16 }, (_, index) => `assets/eventos/san-isidro/foto_${index + 1}.jpg`),
    galleryVideos: ['assets/eventos/san-isidro/video_1.mp4'],
    icon: '🌾',
    size: 'normal'
  },
  {
    id: 'romeria-san-antonio',
    title: 'Romería de San Antonio',
    date: '13 de junio de 2026',
    sortDate: '2026-06-13',
    summary: 'Acompañamos a San Antonio de Padua en su tradicional romería. Como patrón de la construcción, ¡tiene mucho que ver con nuestros escombros! Música, comida campestre y tradición se unen en este día tan especial.',
    coverImage: 'assets/eventos/romeria-san-antonio/foto_5.jpg',
    galleryImages: Array.from({ length: 17 }, (_, index) => `assets/eventos/romeria-san-antonio/foto_${index + 1}.jpg`),
    icon: '⛪',
    size: 'wide'
  },
  {
    id: 'feria-abril',
    title: 'Feria de Abril',
    date: '18 de abril de 2026',
    sortDate: '2026-04-18',
    summary: 'Sevillanas, alegría y mucho arte para celebrar juntos nuestra Feria de Abril. Una jornada de música, color y buen ambiente escombrero.',
    coverImage: 'assets/eventos/feria-abril/foto_1.jpg',
    galleryImages: Array.from({ length: 9 }, (_, index) => `assets/eventos/feria-abril/foto_${index + 1}.jpg`),
    galleryVideos: Array.from({ length: 6 }, (_, index) => `assets/eventos/feria-abril/video_${index + 1}.mp4`),
    icon: '💃',
    size: 'wide'
  },
  {
    id: 'torneo-baloncesto',
    title: 'Torneo 3x3 de Baloncesto',
    date: 'Verano',
    summary: 'Demuestra tus habilidades en la cancha en nuestro clásico torneo de baloncesto callejero. Competición, deporte y, sobre todo, mucho compañerismo bajo el sol del verano.',
    coverImage: null,
    galleryImages: [],
    icon: '🏀',
    size: 'normal'
  },
  {
    id: 'jabali-run',
    title: 'Jabalí Run',
    date: '3 de enero de 2026',
    sortDate: '2026-01-03',
    summary: 'Los peñistas salimos a correr todos juntos para fomentar el deporte, el compañerismo y las ganas de superarnos. Una jornada para sacar nuestro lado más salvaje por Torrelodones.',
    coverImage: 'assets/eventos/jabali-run/foto_1.jpeg',
    galleryImages: [
      'assets/eventos/jabali-run/foto_1.jpeg',
      'assets/eventos/jabali-run/foto_2.jpeg',
      'assets/eventos/jabali-run/foto_3.jpeg'
    ],
    icon: '🐗',
    size: 'normal'
  },
  {
    id: 'cabalgata-reyes',
    title: 'Cabalgata de Reyes',
    date: '6 de enero de 2026',
    sortDate: '2026-01-06',
    summary: 'Llenamos de magia e ilusión las calles de Torrelodones. ¡Nuestra carroza ganó el segundo premio! Ven a recoger caramelos y a disfrutar de la noche más mágica del año con la peña.',
    coverImage: 'assets/eventos/cabalgata/foto_1.jpg',
    galleryImages: [
      'assets/eventos/cabalgata/foto_1.jpg',
      'assets/eventos/cabalgata/foto_2.jpg',
      'assets/eventos/cabalgata/foto_3.jpg',
      'assets/eventos/cabalgata/foto_4.jpg',
      'assets/eventos/cabalgata/foto_5.jpg',
      'assets/eventos/cabalgata/foto_6.jpg',
      'assets/eventos/cabalgata/foto_7.jpg',
      'assets/eventos/cabalgata/foto_8.jpg',
      'assets/eventos/cabalgata/foto_9.jpg',
      'assets/eventos/cabalgata/foto_10.jpg',
      'assets/eventos/cabalgata/foto_11.jpg',
      'assets/eventos/cabalgata/foto_12.jpg',
      'assets/eventos/cabalgata/foto_13.jpg',
      'assets/eventos/cabalgata/foto_14.jpg',
      'assets/eventos/cabalgata/foto_15.jpg',
      'assets/eventos/cabalgata/foto_16.jpg',
      'assets/eventos/cabalgata/foto_17.jpg',
      'assets/eventos/cabalgata/foto_18.jpg'
    ],
    galleryVideos: ['assets/eventos/cabalgata/video_1.mp4'],
    icon: '👑',
    size: 'tall'
  },
  {
    id: 'evento-solidario',
    title: 'Evento Solidario · Residencia Los Ángeles',
    date: '25 de diciembre de 2025',
    sortDate: '2025-12-25',
    summary: 'Los peñistas reunimos y donamos recursos a la Residencia Los Ángeles a través de este evento solidario. Porque compartir también es construir comunidad.',
    coverImage: 'assets/eventos/solidario-residencia/foto_1.jpeg',
    galleryImages: ['assets/eventos/solidario-residencia/foto_1.jpeg'],
    icon: '🎄',
    size: 'wide'
  },
  {
    id: 'dia-hispanidad',
    title: 'Día de la Hispanidad · Ofrenda a la Virgen del Pilar',
    date: '12 de octubre de 2025',
    sortDate: '2025-10-12',
    summary: 'Los peñistas entregamos un ramo de flores a la Virgen del Pilar en una jornada de tradición, respeto y unión.',
    coverImage: null,
    galleryImages: [],
    galleryVideos: ['assets/eventos/hispanidad/ofrenda-virgen-pilar.mp4'],
    icon: '🌹',
    size: 'normal'
  },
  {
    id: 'asamblea-general',
    title: 'Asamblea General',
    date: 'Anual',
    summary: 'El momento de reunirnos todos los socios para hacer balance, proponer nuevas locuras y decidir el futuro de nuestra peña. ¡Tu voz es fundamental para seguir construyendo La Escombrera!',
    coverImage: null,
    galleryImages: [],
    icon: '📋',
    size: 'normal'
  }
];

// Hacer los eventos accesibles globalmente
window.EVENTS = EVENTS;
