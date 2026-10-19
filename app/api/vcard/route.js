import { NextResponse } from 'next/server';

export async function GET() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Ruiz;Ángel;;;',
    'FN:Ángel Ruiz',
    'ORG:Ángel Ruiz World',
    'TITLE:Ilusionista',
    'TEL;TYPE=CELL,VOICE,pref:+34648055636',
    'EMAIL;TYPE=INTERNET,WORK,pref:info@angelruiz.world',
    'URL;TYPE=WORK:https://angelruiz.world',
    'X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/angellruuiz',
    'NOTE:Ángel Ruiz · Ilusionista profesional en Madrid. Bodas, eventos de empresa y espectáculos de autor.',
    'END:VCARD'
  ].join('\r\n');

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Angel-Ruiz-Ilusionista.vcf"',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
