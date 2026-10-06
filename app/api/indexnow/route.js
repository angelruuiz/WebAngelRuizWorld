import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/blog';
import { locations } from '@/lib/locations';

const HOST = 'angelruiz.world';
const KEY = '8c4e09f53e204c8ba71df2977759a1f2';
const KEY_LOCATION = `https://${HOST}/8c4e09f53e204c8ba71df2977759a1f2.txt`;

export async function GET(request) {
  try {
    const posts = getSortedPostsData();
    const blogUrls = posts.map((post) => `https://${HOST}/blog/${post.slug}`);
    const locationUrls = locations.map((loc) => `https://${HOST}/mago-${loc.slug}`);
    
    const coreUrls = [
      `https://${HOST}`,
      `https://${HOST}/mago-madrid`,
      `https://${HOST}/contratar-mago-madrid`,
      `https://${HOST}/particulares/bodas`,
      `https://${HOST}/empresas`,
      `https://${HOST}/mago-close-up-madrid`,
      `https://${HOST}/dossier`,
      `https://${HOST}/blog`,
      `https://${HOST}/valoraciones`,
      `https://${HOST}/sobre-mi`,
      `https://${HOST}/galeria`,
      `https://${HOST}/mago-sierra-madrid`,
      `https://${HOST}/particulares/comuniones`,
      `https://${HOST}/particulares/eventos`,
      `https://${HOST}/particulares/fiestas-cumpleanos-madrid`,
      `https://${HOST}/empresas/mago-cenas-empresa-madrid`,
      `https://${HOST}/empresas/mago-ferias-congresos-madrid`,
      `https://${HOST}/empresas/mago-team-building-madrid`,
      `https://${HOST}/empresas/mago-conferenciante-madrid`,
      `https://${HOST}/empresas/mago-para-restaurantes-madrid`,
    ];

    const allUrls = Array.from(new Set([...coreUrls, ...blogUrls, ...locationUrls]));

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: allUrls,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const success = response.ok || response.status === 200 || response.status === 202;

    return NextResponse.json({
      success,
      status: response.status,
      submittedUrls: allUrls.length,
      sampleUrls: allUrls.slice(0, 5),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error submitting to IndexNow', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls = body.urls && Array.isArray(body.urls) && body.urls.length > 0 
      ? body.urls 
      : [`https://${HOST}`];

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok || response.status === 200 || response.status === 202,
      status: response.status,
      submittedUrls: urls.length,
      urls,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error submitting custom URLs to IndexNow', details: error.message },
      { status: 500 }
    );
  }
}
