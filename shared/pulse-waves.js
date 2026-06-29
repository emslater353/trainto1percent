/**
 * Pulse helpers — headline quality filters and wearables de-prioritization.
 * Story waves removed: feed is a flat, diverse tech snapshot (not one platform thread).
 */

function isWearablesHeadline(title) {
  const h = (title || '').toLowerCase();
  return (
    /wearable|smart glasses|ai glasses|ar glasses|spectacles|vision pro|spatial computing|mixed reality|orion/.test(h) ||
    (/meta/.test(h) && /glass|ray-ban|oakley|wearable display|jenner/.test(h)) ||
    (/snap/.test(h) && /spec|spectacles/.test(h))
  );
}

function isLowQualityHeadline(title) {
  const h = (title || '').toLowerCase();
  return (
    /best smart glasses|we'?ve tested|roundup|buying guide|pcmag|resell calendar|techrepublic.*best|gift guide/.test(h) ||
    isWearablesHeadline(title) && /best|tested|review|roundup|compared|vs\b|versus/.test(h)
  );
}

/** @deprecated — waves removed; always null */
function classifyPulseWave() {
  return null;
}

/** @deprecated — waves removed; always null */
function getActiveWave() {
  return null;
}

function scoreWaveBoost() {
  return 0;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isWearablesHeadline,
    isLowQualityHeadline,
    classifyPulseWave,
    getActiveWave,
    scoreWaveBoost,
  };
}
if (typeof window !== 'undefined') {
  window.isWearablesHeadline = isWearablesHeadline;
  window.isLowQualityHeadline = isLowQualityHeadline;
  window.classifyPulseWave = classifyPulseWave;
  window.getActiveWave = getActiveWave;
  window.scoreWaveBoost = scoreWaveBoost;
}
