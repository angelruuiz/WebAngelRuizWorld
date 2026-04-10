export default function manifest() {
  return {
    name: 'Ángel Ruiz | Mago e Ilusionista',
    short_name: 'Ángel Ruiz Magia',
    description: 'Ilusionista experto en Magia de Cerca para bodas, empresas y eventos VIP en Madrid.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/icon.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
