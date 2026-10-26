/** Theme + identity for EchoArena Player. Everything brand-specific lives here. */
module.exports = {
    id: 'echoarena',
    name: 'EchoArena Player',
    short: 'EchoArena',
    keyPrefix: 'ECA',
    tagline: "Low-latency music for gaming squads and voice lobbies.",
    footer: 'Prism Protocol',
    colors: { brand: 0x22f59b, success: 0x00ffaa, danger: 0xff3366, premium: 0xffc857 },
    emoji: { brand: '🎮', ok: '✅', error: '❌', premium: '💎', radio: '📡', wave: '▂▅▇▅▂' },
    bar: { done: '━', head: '◆', todo: '─' },
    statuses: [
        { name: "/play • GG music", type: 'Listening' },
        { name: "{servers} lobbies", type: 'Watching' },
        { name: "/radio defcon", type: 'Playing' }
    ],
    // Listener-supported radio from SomaFM (https://somafm.com). Please consider supporting them.
    stations: [
        { id: 'defcon', name: "DEF CON Radio", genre: "Hacker / gaming electronic", url: 'https://ice1.somafm.com/defcon-128-mp3' },
        { id: 'beatblender', name: "Beat Blender", genre: "Deep house & downtempo", url: 'https://ice1.somafm.com/beatblender-128-mp3' },
        { id: 'dubstep', name: "Dubstep Beyond", genre: "Dubstep", url: 'https://ice1.somafm.com/dubstep-128-mp3' },
        { id: 'cliqhop', name: "cliqhop idm", genre: "Intelligent dance music", url: 'https://ice1.somafm.com/cliqhop-128-mp3' },
        { id: 'poptron', name: "PopTron", genre: "Electropop & indie dance", url: 'https://ice1.somafm.com/poptron-128-mp3' }
    ],
    premium: { prices: { premium: '₹99/month', plus: '₹249/month' } },
    links: {
        panel: 'https://krishyaa06.github.io/prism-bots-panel/',
        support: 'https://dc.gg/prismprotocol',
        buy: 'https://krishyaa06.github.io/prism-bots-panel/#/premium/echoarena',
        github: 'https://github.com/krishyaa06/echoarena-player'
    }
};
