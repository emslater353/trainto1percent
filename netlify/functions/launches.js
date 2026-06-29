/**
 * GET /.netlify/functions/launches — recent Product Hunt launches (cached ~1hr server-side)
 */

const { gatherLaunches } = require('../../shared/launch-feeds.js');

exports.handler = async () => {
  try {
    const launches = await gatherLaunches({
      productHuntToken: process.env.PRODUCTHUNT_TOKEN || process.env.PRODUCTHUNT_DEVELOPER_TOKEN,
      maxPerFeed: 30,
    });
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
      body: JSON.stringify({ ok: true, count: launches.length, launches }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: e.message }),
    };
  }
};
