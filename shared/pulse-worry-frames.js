/**
 * Pulse worry modes — answer the three fears founders/operators actually have.
 */

const PULSE_WORRY_MODES = {
  startup: {
    id: 'startup',
    label: 'Claude might eat my startup',
    emoji: '🛡️',
    shortLabel: 'Startup defense',
  },
  career: {
    id: 'career',
    label: 'AI might take my job',
    emoji: '💼',
    shortLabel: 'Career defense',
  },
  overload: {
    id: 'overload',
    label: "I can't keep up with AI news",
    emoji: '📡',
    shortLabel: 'Filter the noise',
  },
};

function buildWorryFrame(mode, ctx) {
  const {
    headline = '',
    secondOrder = '',
    linked = null,
    tools = [],
    archetypeLabel = 'AI × Tech',
    inLane = true,
  } = ctx;
  const toolNames = (tools || []).slice(0, 2).map((t) => t.name).filter(Boolean);
  const forecast = linked ? `${linked.probability}% · ${linked.title}` : null;
  const snip = (secondOrder || headline).replace(/\s+/g, ' ').trim().slice(0, 140);

  switch (mode) {
    case 'startup':
      return toolNames.length
        ? `Models commoditize generic work — not taste, trust, or a sharp wedge. This ${archetypeLabel} signal: ${snip}. Own what Claude is slow at; watch ${toolNames.join(' + ')} for how others ship in this lane.`
        : `Claude eats undifferentiated products — not wedges with distribution or domain trust. This signal: ${snip}. Skip unless you're building in this lane.`;
    case 'career':
      return forecast
        ? `Your job isn't vanishing overnight — tasks get reshuffled. This story feeds ${forecast}. Double down on judgment, relationships, and work AI can't audit: ${snip}.`
        : `AI replaces tasks before it replaces roles. This ${archetypeLabel} shift: ${snip}. Ask which parts of your job are "brief → review" vs "trust → decide."`;
    case 'overload':
    default:
      return toolNames.length
        ? `Skip the rest of your timeline today. This one matters: ${snip}${forecast ? ` · Tracks ${linked.title} (${linked.probability}%)` : ''}. If you do one thing: open ${toolNames.join(' or ')} and see how others are shipping in this lane.`
        : `One story, one takeaway — ignore the rest today. ${snip}${forecast ? ` · Tracks ${linked.title}` : ''}. Save everything else for later.`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PULSE_WORRY_MODES, buildWorryFrame };
}
if (typeof window !== 'undefined') {
  window.PULSE_WORRY_MODES = PULSE_WORRY_MODES;
  window.buildWorryFrame = buildWorryFrame;
}
