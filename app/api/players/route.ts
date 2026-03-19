import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const customUrl = searchParams.get('url');

  let targetUrl = customUrl ? decodeURIComponent(customUrl) : 'https://pesdb.net/efootball/';
  
  // Handle pagination in URL
  const urlObj = new URL(targetUrl);
  urlObj.searchParams.set('page', page);
  
  // Add other filters
  searchParams.forEach((value, key) => {
    if (key !== 'page' && key !== 'url') {
      urlObj.searchParams.set(key, value);
    }
  });

  try {
    const response = await axios.get(urlObj.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    });

    const $ = cheerio.load(response.data);
    const players: any[] = [];

    $('table.players tr').each((i, el) => {
      if (i === 0) return; // Skip header

      const tds = $(el).find('td');
      if (tds.length < 5) return;

      const nameLink = $(el).find('a[href*="id="]');
      const name = nameLink.text().trim();
      const idMatch = nameLink.attr('href')?.match(/id=(\d+)/);
      const id = idMatch ? idMatch[1] : '';

      const club = $(el).find('a[href*="club_team="]').text().trim();
      const nationality = $(el).find('a[href*="nationality="]').text().trim();
      const position = $(tds[1]).text().trim();
      const ovr = $(tds[tds.length - 1]).text().trim();

      if (id && name) {
        players.push({
          id,
          name,
          club: club || 'Free Agent',
          nationality: nationality || 'Unknown',
          position,
          ovr,
          imageUrl: `https://pesdb.net/assets/img/card/f${id}.png`
          
        });
      }
    });

    return NextResponse.json(players);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
