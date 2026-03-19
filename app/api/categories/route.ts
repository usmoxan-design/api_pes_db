import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await axios.get('https://pesdb.net/efootball/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    });

    const $ = cheerio.load(response.data);
    const categories: any[] = [];

    $('div.shortcuts a').each((i, el) => {
      const name = $(el).text().trim();
      let href = $(el).attr('href') || '';
      if (name && href) {
        if (!href.startsWith('http')) {
          href = `https://pesdb.net/efootball/${href}`;
        }
        categories.push({ name, url: href });
      }
    });

    return NextResponse.json(categories);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
