import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode') || 'level1';
  const id = params.id;

  let targetUrl = `https://pesdb.net/efootball/?id=${id}`;
  if (mode === 'max_level') {
    targetUrl += '&mode=max_level';
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    });

    const $ = cheerio.load(response.data);
    const stats: any = {};
    const info: any = {};
    const skills: string[] = [];
    const suggestedPoints: any = {};

    $('table tr').each((i, el) => {
      const th = $(el).find('th');
      const td = $(el).find('td');
      if (th.length && td.length) {
        const key = th.text().replace(':', '').trim();
        const value = td.text().trim();
        
        if (key.toLowerCase().includes('player skill')) {
            td.find('br').replaceWith('\n');
            const skillList = td.text().split('\n').map(s => s.trim()).filter(s => s.length > 0);
            if (skillList.length) skills.push(...skillList);
        } else if (/\d/.test(value) && !['Foot', 'Playing Styles'].includes(key)) {
            stats[key] = value;
        } else {
            info[key] = value;
        }
      }
    });

    const playerPosition = info['Position'] || stats['Position'] || 'Unknown';
    const playerHeight = info['Height'] || stats['Height'] || 'Unknown';
    const playerAge = info['Age'] || stats['Age'] || 'Unknown';
    const playerFoot = info['Foot'] || 'Unknown';
    const playingStyle = info['Playing Styles'] || 'Unknown';

    // Suggested points
    $('div').each((i, el) => {
        const text = $(el).text().trim();
        if (text.startsWith('Suggested points')) {
            $(el).parent().find('div').each((j, sEl) => {
                const sText = $(sEl).text().trim();
                const parts = sText.split(':');
                if (parts.length === 2) {
                    const k = parts[0].replace(/[•\u2022]/, '').trim();
                    const v = parseInt(parts[1].trim());
                    if (!isNaN(v)) suggestedPoints[k] = v;
                }
            });
        }
    });

    return NextResponse.json({
      position: playerPosition,
      height: playerHeight,
      age: playerAge,
      foot: playerFoot,
      playingStyle,
      stats,
      info,
      skills,
      suggestedPoints,
      description: $('h2').last().text().trim()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
