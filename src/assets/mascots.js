/**
 * Rich animated SVG Mascots & Pets library.
 * Every SVG uses `__UID__` placeholders for <defs> IDs so multiple instances
 * never collide in the DOM (e.g., Settings preview + Chat Bubble + Floating Pet).
 */

let uidCounter = 0;

export function instantiateSvg(template) {
  const uid = `agyct${++uidCounter}`;
  return template.replace(/__UID__/g, uid);
}

export const MASCOT_TEMPLATES = {
  /**
   * 1. Mèo than (Charcoal / Cozy Brown Cat peeking with paws, like Image 1)
   */
  'meo-than': {
    name: 'Mèo than',
    nameEn: 'Charcoal Cat',
    role: ['bubble', 'pet'],
    accent: '#e09f67',
    bubbleSvg: `
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#c98455"/>
            <stop offset="100%" stop-color="#8b5434"/>
          </linearGradient>
          <linearGradient id="__UID__-ear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f4b393"/>
            <stop offset="100%" stop-color="#d47d6a"/>
          </linearGradient>
          <filter id="__UID__-sh" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.55"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-sh)" class="agy-ct-anim-bob">
          <!-- Left & Right Ears -->
          <path d="M30 40 L24 14 Q23 9 29 12 L48 26 Z" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M90 40 L96 14 Q97 9 91 12 L72 26 Z" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M32 34 L29 18 L43 28 Z" fill="url(#__UID__-ear)"/>
          <path d="M88 34 L91 18 L77 28 Z" fill="url(#__UID__-ear)"/>
          <!-- Head -->
          <ellipse cx="60" cy="48" rx="34" ry="28" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5"/>
          <!-- Forehead stripes -->
          <path d="M55 21 L55 30 M60 20 L60 31 M65 21 L65 30" stroke="#5a331d" stroke-width="2.6" stroke-linecap="round"/>
          <!-- Cream muzzle -->
          <ellipse cx="60" cy="56" rx="14" ry="10" fill="#f7dec8"/>
          <!-- Eyes -->
          <g class="agy-ct-anim-blink" style="transform-origin: 60px 46px;">
            <ellipse cx="46" cy="45" rx="4.4" ry="5.2" fill="#23140e"/>
            <ellipse cx="74" cy="45" rx="4.4" ry="5.2" fill="#23140e"/>
            <circle cx="44.5" cy="43" r="1.7" fill="#fff"/>
            <circle cx="72.5" cy="43" r="1.7" fill="#fff"/>
            <circle cx="47.5" cy="47.5" r="0.9" fill="#ffe6c7"/>
            <circle cx="75.5" cy="47.5" r="0.9" fill="#ffe6c7"/>
          </g>
          <!-- Blush -->
          <ellipse cx="38" cy="53" rx="4.5" ry="2.5" fill="#f28b82" opacity="0.55"/>
          <ellipse cx="82" cy="53" rx="4.5" ry="2.5" fill="#f28b82" opacity="0.55"/>
          <!-- Nose & Mouth -->
          <polygon points="57.5,52 62.5,52 60,55" fill="#e06f72"/>
          <path d="M55 57 Q57.5 60 60 56.5 Q62.5 60 65 57" fill="none" stroke="#4d2c1b" stroke-width="2" stroke-linecap="round"/>
          <!-- Whiskers -->
          <path d="M22 48 L33 50 M21 54 L33 54 M98 48 L87 50 M99 54 L87 54" stroke="#4d2c1b" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>
          <!-- Paws resting on bubble -->
          <ellipse cx="41" cy="73" rx="9" ry="6.5" fill="#f5dcc6" stroke="#3b2316" stroke-width="2.2"/>
          <ellipse cx="79" cy="73" rx="9" ry="6.5" fill="#f5dcc6" stroke="#3b2316" stroke-width="2.2"/>
          <path d="M39 73 v3 M43 73 v3 M77 73 v3 M81 73 v3" stroke="#8b5434" stroke-width="1.4" stroke-linecap="round"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#d28f5f"/>
            <stop offset="100%" stop-color="#8b5434"/>
          </linearGradient>
          <filter id="__UID__-sh" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.5"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-sh)" class="agy-ct-anim-float">
          <!-- Tail -->
          <path d="M84 88 Q108 78 103 58 Q100 50 93 56 Q96 72 80 80" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5" class="agy-ct-anim-wag" style="transform-origin: 82px 84px;"/>
          <!-- Body -->
          <ellipse cx="60" cy="82" rx="25" ry="22" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5"/>
          <ellipse cx="60" cy="86" rx="14" ry="15" fill="#f7dec8"/>
          <!-- Collar & Gold Bell -->
          <path d="M40 67 Q60 74 80 67" fill="none" stroke="#d94e4e" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="60" cy="73" r="4.5" fill="#ffd166" stroke="#7c5210" stroke-width="1.5"/>
          <!-- Ears -->
          <path d="M33 44 L27 17 Q27 12 33 15 L49 28 Z" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5"/>
          <path d="M87 44 L93 17 Q93 12 87 15 L71 28 Z" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5"/>
          <path d="M35 38 L32 21 L45 30 Z" fill="#f4a896"/>
          <path d="M85 38 L88 21 L75 30 Z" fill="#f4a896"/>
          <!-- Head -->
          <ellipse cx="60" cy="48" rx="31" ry="25" fill="url(#__UID__-fur)" stroke="#3b2316" stroke-width="2.5"/>
          <path d="M56 24 v7 M60 23 v8 M64 24 v7" stroke="#5a331d" stroke-width="2.4" stroke-linecap="round"/>
          <ellipse cx="60" cy="56" rx="12" ry="8.5" fill="#f7dec8"/>
          <g class="agy-ct-anim-blink" style="transform-origin: 60px 46px;">
            <ellipse cx="47" cy="46" rx="4.2" ry="5" fill="#23140e"/>
            <ellipse cx="73" cy="46" rx="4.2" ry="5" fill="#23140e"/>
            <circle cx="45.5" cy="44" r="1.6" fill="#fff"/>
            <circle cx="71.5" cy="44" r="1.6" fill="#fff"/>
          </g>
          <ellipse cx="39" cy="53" rx="4" ry="2.2" fill="#f28b82" opacity="0.6"/>
          <ellipse cx="81" cy="53" rx="4" ry="2.2" fill="#f28b82" opacity="0.6"/>
          <polygon points="58,52 62,52 60,54.8" fill="#e06f72"/>
          <path d="M55.5 56.5 Q58 59.5 60 56 Q62 59.5 64.5 56.5" fill="none" stroke="#4d2c1b" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Little front paws -->
          <ellipse cx="47" cy="100" rx="7" ry="5" fill="#f7dec8" stroke="#3b2316" stroke-width="2"/>
          <ellipse cx="73" cy="100" rx="7" ry="5" fill="#f7dec8" stroke="#3b2316" stroke-width="2"/>
        </g>
      </svg>`
  },

  /**
   * 2. Thiên hà (Galaxy 3-star crest, like Image 1)
   */
  'thien-ha': {
    name: 'Thiên hà',
    nameEn: 'Galaxy Stars',
    role: ['bubble'],
    accent: '#f2c166',
    bubbleSvg: `
      <svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-st" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff8d6"/>
            <stop offset="55%" stop-color="#f5c063"/>
            <stop offset="100%" stop-color="#c9802b"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)">
          <path d="M28 16 L31 24 L39 27 L31 30 L28 38 L25 30 L17 27 L25 24 Z" fill="url(#__UID__-st)" class="agy-ct-anim-twinkle"/>
          <path d="M65 8 L69.5 21 L82 25.5 L69.5 30 L65 43 L60.5 30 L48 25.5 L60.5 21 Z" fill="url(#__UID__-st)" class="agy-ct-anim-twinkle" style="animation-delay:0.4s;"/>
          <path d="M102 16 L105 24 L113 27 L105 30 L102 38 L99 30 L91 27 L99 24 Z" fill="url(#__UID__-st)" class="agy-ct-anim-twinkle" style="animation-delay:0.8s;"/>
          <circle cx="46" cy="14" r="1.8" fill="#ffe9a3" opacity="0.85"/>
          <circle cx="85" cy="13" r="1.5" fill="#9bd5ff" opacity="0.85"/>
        </g>
      </svg>`
  },

  /**
   * 3. Mèo huyền thuật (Arcane Mystic Black Cat with amber third-eye & rune halo)
   */
  'meo-huyen-thuat': {
    name: 'Mèo huyền thuật',
    nameEn: 'Arcane Cat',
    role: ['bubble', 'pet'],
    accent: '#f59e0b',
    bubbleSvg: `
      <svg viewBox="0 0 120 94" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-bk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2d2226"/>
            <stop offset="100%" stop-color="#140f12"/>
          </linearGradient>
          <radialGradient id="__UID__-au" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff9838" stop-opacity="0.55"/>
            <stop offset="100%" stop-color="#ff5500" stop-opacity="0"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ff7a29" flood-opacity="0.55"/>
          </filter>
        </defs>
        <circle cx="60" cy="48" r="36" fill="url(#__UID__-au)"/>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Rune Halo -->
          <circle cx="60" cy="45" r="31" fill="none" stroke="#ff9d42" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.65" class="agy-ct-anim-spin" style="transform-origin:60px 45px;"/>
          <!-- Ears -->
          <path d="M32 42 L25 14 L49 27 Z" fill="url(#__UID__-bk)" stroke="#ff9d42" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M88 42 L95 14 L71 27 Z" fill="url(#__UID__-bk)" stroke="#ff9d42" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M33 36 L30 20 L44 28 Z" fill="#5e252c"/>
          <path d="M87 36 L90 20 L76 28 Z" fill="#5e252c"/>
          <!-- Head -->
          <ellipse cx="60" cy="48" rx="30" ry="25" fill="url(#__UID__-bk)" stroke="#4c2c24" stroke-width="2"/>
          <!-- Mystic forehead sigil -->
          <path d="M60 29 L63 34 L60 39 L57 34 Z" fill="#ffb74d"/>
          <circle cx="60" cy="34" r="1.4" fill="#fff6d1"/>
          <!-- Glowing Amber Eyes -->
          <g class="agy-ct-anim-blink" style="transform-origin:60px 48px;">
            <ellipse cx="47" cy="48" rx="5.2" ry="4.4" fill="#ff9e2c"/>
            <ellipse cx="73" cy="48" rx="5.2" ry="4.4" fill="#ff9e2c"/>
            <ellipse cx="47" cy="48" rx="1.6" ry="3.8" fill="#1a0b07"/>
            <ellipse cx="73" cy="48" rx="1.6" ry="3.8" fill="#1a0b07"/>
            <circle cx="45" cy="46.2" r="1.3" fill="#fff5cc"/>
            <circle cx="71" cy="46.2" r="1.3" fill="#fff5cc"/>
          </g>
          <path d="M57 56 L60 58.5 L63 56" fill="none" stroke="#ffb74d" stroke-width="1.7" stroke-linecap="round"/>
          <!-- Arcane collar & paws -->
          <ellipse cx="42" cy="73" rx="8.5" ry="6" fill="#21181c" stroke="#ff9d42" stroke-width="1.5"/>
          <ellipse cx="78" cy="73" rx="8.5" ry="6" fill="#21181c" stroke="#ff9d42" stroke-width="1.5"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-bk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#31242b"/>
            <stop offset="100%" stop-color="#130d12"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ff8c2e" flood-opacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Floating Rune Orbit -->
          <ellipse cx="60" cy="96" rx="34" ry="8" fill="none" stroke="#ff9e3d" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.7"/>
          <!-- Twin Flame Tail -->
          <path d="M82 82 Q105 68 97 48 Q91 64 81 74" fill="#22171d" stroke="#ff9e3d" stroke-width="1.8" class="agy-ct-anim-wag" style="transform-origin:82px 82px;"/>
          <!-- Wizard Scarf & Body -->
          <ellipse cx="60" cy="80" rx="22" ry="20" fill="url(#__UID__-bk)" stroke="#4c2c24" stroke-width="2"/>
          <path d="M40 65 Q60 73 80 65 L75 74 Q60 80 45 74 Z" fill="#8b2635" stroke="#ffb74d" stroke-width="1.3"/>
          <circle cx="60" cy="74" r="4" fill="#ffb74d"/>
          <!-- Head -->
          <path d="M35 44 L27 17 L50 28 Z" fill="url(#__UID__-bk)" stroke="#ff9d42" stroke-width="1.8"/>
          <path d="M85 44 L93 17 L70 28 Z" fill="url(#__UID__-bk)" stroke="#ff9d42" stroke-width="1.8"/>
          <ellipse cx="60" cy="48" rx="28" ry="23" fill="url(#__UID__-bk)" stroke="#4c2c24" stroke-width="2"/>
          <path d="M60 30 L63 35 L60 40 L57 35 Z" fill="#ffb74d"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 49px;">
            <ellipse cx="48" cy="49" rx="4.8" ry="4" fill="#ffa726"/>
            <ellipse cx="72" cy="49" rx="4.8" ry="4" fill="#ffa726"/>
            <ellipse cx="48" cy="49" rx="1.4" ry="3.4" fill="#180a08"/>
            <ellipse cx="72" cy="49" rx="1.4" ry="3.4" fill="#180a08"/>
            <circle cx="46.5" cy="47.5" r="1.1" fill="#fff"/>
            <circle cx="70.5" cy="47.5" r="1.1" fill="#fff"/>
          </g>
          <circle cx="24" cy="36" r="2.2" fill="#ffd54f" class="agy-ct-anim-twinkle"/>
          <circle cx="96" cy="32" r="2" fill="#ff8a65" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  /**
   * 4. Rồng ngọc (Jade Dragon, matching Image 1 & floating dragon in Image 2!)
   */
  'rong-ngoc': {
    name: 'Rồng ngọc',
    nameEn: 'Jade Dragon',
    role: ['bubble', 'pet'],
    accent: '#34d399',
    bubbleSvg: `
      <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-jd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6ee7b7"/>
            <stop offset="55%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#065f46"/>
          </linearGradient>
          <linearGradient id="__UID__-bl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fef3c7"/>
            <stop offset="100%" stop-color="#a7f3d0"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#34d399" flood-opacity="0.55"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Wings -->
          <path d="M35 55 Q12 36 22 25 Q32 34 42 46 Z" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <path d="M85 55 Q108 36 98 25 Q88 34 78 46 Z" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <!-- Horns -->
          <path d="M45 26 Q38 11 46 8 Q50 16 51 24 Z" fill="#fde68a" stroke="#064e3b" stroke-width="1.8"/>
          <path d="M75 26 Q82 11 74 8 Q70 16 69 24 Z" fill="#fde68a" stroke="#064e3b" stroke-width="1.8"/>
          <!-- Head & Chubby Body -->
          <ellipse cx="60" cy="67" rx="22" ry="18" fill="url(#__UID__-jd)" stroke="#064e3b" stroke-width="2.2"/>
          <ellipse cx="60" cy="70" rx="13" ry="12" fill="url(#__UID__-bl)"/>
          <ellipse cx="60" cy="43" rx="26" ry="21" fill="url(#__UID__-jd)" stroke="#064e3b" stroke-width="2.2"/>
          <!-- Snout & Eyes -->
          <ellipse cx="60" cy="51" rx="12" ry="7" fill="#a7f3d0"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 41px;">
            <ellipse cx="48" cy="41" rx="4.2" ry="4.8" fill="#062c22"/>
            <ellipse cx="72" cy="41" rx="4.2" ry="4.8" fill="#062c22"/>
            <circle cx="46.8" cy="39.2" r="1.7" fill="#fff"/>
            <circle cx="70.8" cy="39.2" r="1.7" fill="#fff"/>
          </g>
          <circle cx="56" cy="50" r="1.3" fill="#064e3b"/>
          <circle cx="64" cy="50" r="1.3" fill="#064e3b"/>
          <path d="M55 54 Q60 57.5 65 54" fill="none" stroke="#064e3b" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Little claws -->
          <ellipse cx="44" cy="79" rx="7" ry="5" fill="#6ee7b7" stroke="#064e3b" stroke-width="1.8"/>
          <ellipse cx="76" cy="79" rx="7" ry="5" fill="#6ee7b7" stroke="#064e3b" stroke-width="1.8"/>
          <!-- Floating jade orb -->
          <circle cx="95" cy="64" r="4.5" fill="#a7f3d0" stroke="#10b981" stroke-width="1.4" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-jd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#86efac"/>
            <stop offset="50%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#065f46"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#34d399" flood-opacity="0.65"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Curled Tail with Flame Tip -->
          <path d="M78 88 Q106 86 102 64 Q98 56 90 62 Q94 74 75 79" fill="url(#__UID__-jd)" stroke="#053b2c" stroke-width="2.2" class="agy-ct-anim-wag" style="transform-origin:78px 82px;"/>
          <path d="M97 56 Q104 48 107 58 Q102 64 96 61 Z" fill="#fef08a"/>
          <!-- Wings -->
          <path d="M36 62 Q10 40 20 26 Q32 36 42 52 Z" fill="#6ee7b7" stroke="#053b2c" stroke-width="2"/>
          <path d="M84 62 Q110 40 100 26 Q88 36 78 52 Z" fill="#6ee7b7" stroke="#053b2c" stroke-width="2"/>
          <!-- Chibi Body -->
          <ellipse cx="60" cy="78" rx="22" ry="21" fill="url(#__UID__-jd)" stroke="#053b2c" stroke-width="2.4"/>
          <ellipse cx="60" cy="81" rx="13" ry="14" fill="#d1fae5"/>
          <path d="M49 76 h22 M50 83 h20 M52 90 h16" stroke="#6ee7b7" stroke-width="1.4" opacity="0.8"/>
          <!-- Horns & Mane -->
          <path d="M43 27 Q35 12 43 9 Q48 17 50 25 Z" fill="#fde68a" stroke="#053b2c" stroke-width="2"/>
          <path d="M77 27 Q85 12 77 9 Q72 17 70 25 Z" fill="#fde68a" stroke="#053b2c" stroke-width="2"/>
          <path d="M55 21 L60 12 L65 21 Z" fill="#a7f3d0" stroke="#053b2c" stroke-width="1.6"/>
          <!-- Head -->
          <ellipse cx="60" cy="45" rx="27" ry="22" fill="url(#__UID__-jd)" stroke="#053b2c" stroke-width="2.4"/>
          <ellipse cx="60" cy="53" rx="13" ry="7.5" fill="#d1fae5"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 43px;">
            <ellipse cx="47" cy="43" rx="4.5" ry="5.2" fill="#04241c"/>
            <ellipse cx="73" cy="43" rx="4.5" ry="5.2" fill="#04241c"/>
            <circle cx="45.5" cy="41" r="1.8" fill="#fff"/>
            <circle cx="71.5" cy="41" r="1.8" fill="#fff"/>
          </g>
          <ellipse cx="39" cy="50" rx="3.8" ry="2" fill="#fb7185" opacity="0.5"/>
          <ellipse cx="81" cy="50" rx="3.8" ry="2" fill="#fb7185" opacity="0.5"/>
          <path d="M55 55 Q60 59 65 55" fill="none" stroke="#053b2c" stroke-width="2" stroke-linecap="round"/>
          <!-- Feet -->
          <ellipse cx="47" cy="97" rx="7" ry="5" fill="#34d399" stroke="#053b2c" stroke-width="2"/>
          <ellipse cx="73" cy="97" rx="7" ry="5" fill="#34d399" stroke="#053b2c" stroke-width="2"/>
        </g>
      </svg>`
  },

  /**
   * 5. Phù thủy ánh trăng (Moonlight Witch Chibi, matching Image 1)
   */
  'phu-thuy-anh-trang': {
    name: 'Phù thủy ánh trăng',
    nameEn: 'Moonlight Witch',
    role: ['bubble', 'pet'],
    accent: '#c084fc',
    bubbleSvg: `
      <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-hat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#581c87"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
          <linearGradient id="__UID__-hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e9d5ff"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#c084fc" flood-opacity="0.55"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Hair back -->
          <path d="M31 46 Q24 72 34 80 L86 80 Q96 72 89 46 Z" fill="url(#__UID__-hair)" stroke="#2e1065" stroke-width="2"/>
          <!-- Cloak & Hands -->
          <path d="M40 72 Q60 66 80 72 L84 86 L36 86 Z" fill="#3b0764" stroke="#2e1065" stroke-width="2"/>
          <!-- Face -->
          <ellipse cx="60" cy="56" rx="21" ry="18" fill="#ffe7dc" stroke="#4c1d95" stroke-width="1.8"/>
          <!-- Bangs -->
          <path d="M38 50 Q45 37 60 37 Q75 37 82 50 Q73 45 67 52 Q60 44 53 52 Q47 45 38 50 Z" fill="url(#__UID__-hair)" stroke="#2e1065" stroke-width="1.6"/>
          <!-- Eyes -->
          <g class="agy-ct-anim-blink" style="transform-origin:60px 58px;">
            <ellipse cx="51" cy="58" rx="3.8" ry="4.5" fill="#581c87"/>
            <ellipse cx="69" cy="58" rx="3.8" ry="4.5" fill="#581c87"/>
            <circle cx="50" cy="56.5" r="1.4" fill="#fff"/>
            <circle cx="68" cy="56.5" r="1.4" fill="#fff"/>
          </g>
          <ellipse cx="44" cy="63" rx="3.5" ry="1.8" fill="#f472b6" opacity="0.55"/>
          <ellipse cx="76" cy="63" rx="3.5" ry="1.8" fill="#f472b6" opacity="0.55"/>
          <path d="M57 64 Q60 67 63 64" fill="none" stroke="#9d174d" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Witch Hat -->
          <ellipse cx="60" cy="39" rx="34" ry="8" fill="url(#__UID__-hat)" stroke="#c084fc" stroke-width="1.6"/>
          <path d="M42 38 L56 10 Q61 4 68 12 L78 38 Z" fill="url(#__UID__-hat)" stroke="#c084fc" stroke-width="1.6"/>
          <path d="M44 35 Q60 39 76 35" fill="none" stroke="#fcd34d" stroke-width="3"/>
          <path d="M60 28 L62 32 L66 33 L62 34 L60 38 L58 34 L54 33 L58 32 Z" fill="#fde68a"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-hat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6b21a8"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
          <linearGradient id="__UID__-hair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f3e8ff"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#c084fc" flood-opacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Crescent Moon Ride -->
          <path d="M26 88 Q60 116 96 84 Q68 102 38 82 Z" fill="#fde68a" stroke="#b45309" stroke-width="1.8"/>
          <!-- Hair & Dress -->
          <path d="M33 48 Q27 78 38 86 L82 86 Q93 78 87 48 Z" fill="url(#__UID__-hair)" stroke="#2e1065" stroke-width="2"/>
          <path d="M44 70 L36 93 L84 93 L76 70 Z" fill="#4c1d95" stroke="#c084fc" stroke-width="1.6"/>
          <!-- Face -->
          <ellipse cx="60" cy="54" rx="20" ry="17" fill="#ffe7dc" stroke="#4c1d95" stroke-width="1.8"/>
          <path d="M39 49 Q47 36 60 36 Q73 36 81 49 Q71 44 65 51 Q60 44 54 51 Q48 44 39 49 Z" fill="url(#__UID__-hair)" stroke="#2e1065" stroke-width="1.6"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 56px;">
            <ellipse cx="51" cy="56" rx="3.8" ry="4.5" fill="#581c87"/>
            <ellipse cx="69" cy="56" rx="3.8" ry="4.5" fill="#581c87"/>
            <circle cx="50" cy="54.5" r="1.4" fill="#fff"/>
            <circle cx="68" cy="54.5" r="1.4" fill="#fff"/>
          </g>
          <path d="M57 62 Q60 65 63 62" fill="none" stroke="#9d174d" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Hat -->
          <ellipse cx="60" cy="38" rx="32" ry="7.5" fill="url(#__UID__-hat)" stroke="#c084fc" stroke-width="1.6"/>
          <path d="M43 37 L57 10 Q62 5 69 12 L77 37 Z" fill="url(#__UID__-hat)" stroke="#c084fc" stroke-width="1.6"/>
          <path d="M45 34 Q60 38 75 34" fill="none" stroke="#fcd34d" stroke-width="2.8"/>
          <!-- Floating stars -->
          <circle cx="24" cy="48" r="2.2" fill="#fde68a" class="agy-ct-anim-twinkle"/>
          <circle cx="96" cy="44" r="2.2" fill="#e9d5ff" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  /**
   * 6. Hồ ly chibi (Chibi Fox, matching Image 1 selected card!)
   */
  'ho-ly-chibi': {
    name: 'Hồ ly chibi',
    nameEn: 'Chibi Fox',
    role: ['bubble', 'pet'],
    accent: '#fb923c',
    bubbleSvg: `
      <svg viewBox="0 0 120 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-fx" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fb923c"/>
            <stop offset="100%" stop-color="#c2410c"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#f97316" flood-opacity="0.5"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Fluffy Tail behind -->
          <path d="M78 78 Q106 72 102 48 Q95 40 86 52 Q84 65 74 72 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2"/>
          <path d="M98 48 Q103 52 99 58 Q93 56 93 51 Z" fill="#fff7ed"/>
          <!-- Fox Ears -->
          <path d="M34 42 L26 14 Q36 14 50 28 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2" stroke-linejoin="round"/>
          <path d="M86 42 L94 14 Q84 14 70 28 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2" stroke-linejoin="round"/>
          <path d="M35 36 L31 20 L45 29 Z" fill="#ffedd5"/>
          <path d="M85 36 L89 20 L75 29 Z" fill="#ffedd5"/>
          <!-- Hair & Kimono -->
          <path d="M34 48 Q30 74 39 84 L81 84 Q90 74 86 48 Z" fill="#9a3412" stroke="#431407" stroke-width="1.8"/>
          <path d="M40 70 L60 77 L80 70 L83 86 L37 86 Z" fill="#fff7ed" stroke="#ea580c" stroke-width="1.8"/>
          <path d="M42 71 L60 80 L78 71" fill="none" stroke="#dc2626" stroke-width="3"/>
          <!-- Face -->
          <ellipse cx="60" cy="52" rx="22" ry="18" fill="#ffe7dc" stroke="#431407" stroke-width="1.8"/>
          <path d="M37 46 Q46 34 60 34 Q74 34 83 46 Q73 41 66 49 Q60 41 54 49 Q47 41 37 46 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="1.6"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 55px;">
            <ellipse cx="50" cy="55" rx="3.8" ry="4.5" fill="#7c2d12"/>
            <ellipse cx="70" cy="55" rx="3.8" ry="4.5" fill="#7c2d12"/>
            <circle cx="49" cy="53.5" r="1.4" fill="#fff"/>
            <circle cx="69" cy="53.5" r="1.4" fill="#fff"/>
          </g>
          <ellipse cx="43" cy="60" rx="3.4" ry="1.8" fill="#fb7185" opacity="0.55"/>
          <ellipse cx="77" cy="60" rx="3.4" ry="1.8" fill="#fb7185" opacity="0.55"/>
          <path d="M57 62 Q60 65 63 62" fill="none" stroke="#9a3412" stroke-width="1.6" stroke-linecap="round"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-fx" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fb923c"/>
            <stop offset="100%" stop-color="#c2410c"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#f97316" flood-opacity="0.55"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Nine-tail Fan -->
          <g class="agy-ct-anim-wag" style="transform-origin:60px 84px;">
            <path d="M60 84 Q96 76 105 52 Q96 42 84 54 Q76 70 60 78 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2"/>
            <path d="M97 50 Q105 53 101 60 Q94 58 94 53 Z" fill="#fff7ed"/>
            <path d="M60 84 Q24 76 15 52 Q24 42 36 54 Q44 70 60 78 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2"/>
            <path d="M23 50 Q15 53 19 60 Q26 58 26 53 Z" fill="#fff7ed"/>
          </g>
          <!-- Kimono Body -->
          <path d="M42 66 L35 98 L85 98 L78 66 Z" fill="#fff7ed" stroke="#9a3412" stroke-width="2"/>
          <path d="M44 67 L60 80 L76 67" fill="none" stroke="#dc2626" stroke-width="3.2"/>
          <rect x="42" y="79" width="36" height="8" rx="3" fill="#dc2626"/>
          <!-- Fox Ears -->
          <path d="M35 42 L26 14 Q36 14 50 28 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2"/>
          <path d="M85 42 L94 14 Q84 14 70 28 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="2"/>
          <path d="M35 36 L31 20 L45 29 Z" fill="#ffedd5"/>
          <path d="M85 36 L89 20 L75 29 Z" fill="#ffedd5"/>
          <!-- Face -->
          <ellipse cx="60" cy="50" rx="22" ry="18" fill="#ffe7dc" stroke="#431407" stroke-width="1.8"/>
          <path d="M37 44 Q46 32 60 32 Q74 32 83 44 Q73 39 66 47 Q60 39 54 47 Q47 39 37 44 Z" fill="url(#__UID__-fx)" stroke="#431407" stroke-width="1.6"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 53px;">
            <ellipse cx="50" cy="53" rx="3.8" ry="4.5" fill="#7c2d12"/>
            <ellipse cx="70" cy="53" rx="3.8" ry="4.5" fill="#7c2d12"/>
            <circle cx="49" cy="51.5" r="1.4" fill="#fff"/>
            <circle cx="69" cy="51.5" r="1.4" fill="#fff"/>
          </g>
          <path d="M57 60 Q60 63 63 60" fill="none" stroke="#9a3412" stroke-width="1.6" stroke-linecap="round"/>
          <!-- Foxfire orb -->
          <circle cx="24" cy="78" r="4" fill="#fed7aa" class="agy-ct-anim-twinkle"/>
          <circle cx="96" cy="76" r="4" fill="#fed7aa" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  /**
   * 7. Lôi Kiếm / Lôi Tước (Thunder Swordsman Chibi matching User's Image 3!)
   */
  'loi-kiem': {
    name: 'Lôi Kiếm',
    nameEn: 'Thunder Blade',
    role: ['bubble', 'pet'],
    accent: '#facc15',
    bubbleSvg: `
      <svg viewBox="0 0 120 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-hat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#855e3c"/>
            <stop offset="100%" stop-color="#452b16"/>
          </linearGradient>
          <linearGradient id="__UID__-lt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#eab308"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#facc15" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Crackling Lightning Aura -->
          <path d="M22 44 L31 35 L26 49 L35 45" fill="none" stroke="#fde047" stroke-width="2.2" stroke-linecap="round" class="agy-ct-anim-spark"/>
          <path d="M98 44 L89 35 L94 49 L85 45" fill="none" stroke="#fde047" stroke-width="2.2" stroke-linecap="round" class="agy-ct-anim-spark"/>
          <!-- Flame Haori Shoulders -->
          <path d="M35 66 Q60 58 85 66 L90 86 L30 86 Z" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
          <path d="M32 76 Q38 69 44 77 L46 86 L30 86 Z" fill="#dc2626"/>
          <path d="M88 76 Q82 69 76 77 L74 86 L90 86 Z" fill="#dc2626"/>
          <!-- Head under Bamboo Hat -->
          <ellipse cx="60" cy="54" rx="18" ry="15" fill="#fde3d2" stroke="#291a10" stroke-width="1.8"/>
          <!-- Golden Hair tufts -->
          <path d="M40 48 L48 54 L53 45 L60 53 L67 45 L72 54 L80 48 Z" fill="#f59e0b" stroke="#78350f" stroke-width="1.4"/>
          <!-- Focused Golden Eyes -->
          <ellipse cx="52" cy="56" rx="3.2" ry="2.8" fill="#b45309"/>
          <ellipse cx="68" cy="56" rx="3.2" ry="2.8" fill="#b45309"/>
          <circle cx="51.2" cy="55.2" r="1.1" fill="#fef08a"/>
          <circle cx="67.2" cy="55.2" r="1.1" fill="#fef08a"/>
          <!-- Ronin Straw Hat -->
          <path d="M20 44 Q60 12 100 44 Q60 50 20 44 Z" fill="url(#__UID__-hat)" stroke="#291a10" stroke-width="2"/>
          <path d="M35 39 Q60 22 85 39" fill="none" stroke="#a87c51" stroke-width="1.4" opacity="0.7"/>
          <!-- Katana Hilt & Lightning Blade in center -->
          <rect x="57.5" y="54" width="5" height="32" rx="1.5" fill="#18181b" stroke="#eab308" stroke-width="1.2"/>
          <rect x="52" y="65" width="16" height="3.5" rx="1.5" fill="#facc15"/>
          <path d="M56 85 L64 78 L55 72 L65 65" fill="none" stroke="url(#__UID__-lt)" stroke-width="2.4" stroke-linecap="round" class="agy-ct-anim-spark"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-hat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8b623f"/>
            <stop offset="100%" stop-color="#452b16"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#facc15" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Electric Ring -->
          <circle cx="60" cy="64" r="42" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.65" class="agy-ct-anim-spin" style="transform-origin:60px 64px;"/>
          <!-- Thunder Sparks -->
          <path d="M18 56 L28 48 L23 61 L33 57" fill="none" stroke="#fef08a" stroke-width="2.4" stroke-linecap="round" class="agy-ct-anim-spark"/>
          <path d="M102 56 L92 48 L97 61 L87 57" fill="none" stroke="#fef08a" stroke-width="2.4" stroke-linecap="round" class="agy-ct-anim-spark"/>
          <!-- Flame Haori Coat -->
          <path d="M36 62 L27 98 L93 98 L84 62 Z" fill="#f8fafc" stroke="#18181b" stroke-width="2.2"/>
          <path d="M31 84 Q40 74 47 86 L49 98 L27 98 Z" fill="#dc2626"/>
          <path d="M89 84 Q80 74 73 86 L71 98 L93 98 Z" fill="#dc2626"/>
          <path d="M33 91 Q39 84 44 92 L45 98 L29 98 Z" fill="#facc15"/>
          <path d="M87 91 Q81 84 76 92 L75 98 L91 98 Z" fill="#facc15"/>
          <!-- Inner Black Uniform -->
          <rect x="49" y="64" width="22" height="34" fill="#18181b"/>
          <rect x="49" y="80" width="22" height="4" fill="#f8fafc"/>
          <!-- Head -->
          <ellipse cx="60" cy="49" rx="19" ry="16" fill="#fde3d2" stroke="#291a10" stroke-width="1.8"/>
          <path d="M40 43 L48 50 L54 41 L60 49 L66 41 L72 50 L80 43 Z" fill="#f59e0b" stroke="#78350f" stroke-width="1.4"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 51px;">
            <ellipse cx="52" cy="51" rx="3.4" ry="3.2" fill="#92400e"/>
            <ellipse cx="68" cy="51" rx="3.4" ry="3.2" fill="#92400e"/>
            <circle cx="51" cy="50" r="1.2" fill="#fef08a"/>
            <circle cx="67" cy="50" r="1.2" fill="#fef08a"/>
          </g>
          <!-- Woven Bamboo Hat -->
          <path d="M18 40 Q60 7 102 40 Q60 47 18 40 Z" fill="url(#__UID__-hat)" stroke="#24150a" stroke-width="2.2"/>
          <path d="M32 35 Q60 17 88 35" fill="none" stroke="#b38859" stroke-width="1.5" opacity="0.7"/>
          <!-- Katana with Golden Lightning -->
          <rect x="57.5" y="54" width="5" height="50" rx="1.5" fill="#09090b" stroke="#facc15" stroke-width="1.3"/>
          <rect x="51" y="68" width="18" height="4" rx="1.5" fill="#facc15"/>
          <path d="M54 102 L66 93 L54 85 L66 76 L56 68" fill="none" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round" class="agy-ct-anim-spark"/>
        </g>
      </svg>`
  },

  /**
   * 8. Hoa Anh Đào (Sakura Blossom Spirit)
   */
  'hoa-anh-dao': {
    name: 'Hoa Anh Đào',
    nameEn: 'Sakura Spirit',
    role: ['bubble', 'pet'],
    accent: '#f472b6',
    bubbleSvg: `
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-pk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fbcfe8"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f472b6" flood-opacity="0.55"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <!-- Cute Sakura Fox-Bunny Sprite -->
          <ellipse cx="60" cy="54" rx="25" ry="21" fill="#fff1f2" stroke="#9d174d" stroke-width="2"/>
          <path d="M40 38 Q30 14 44 18 Q50 26 49 36 Z" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>
          <path d="M80 38 Q90 14 76 18 Q70 26 71 36 Z" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>
          <!-- Sakura Flower Pin -->
          <g transform="translate(76,34)">
            <circle cx="0" cy="-5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="5" cy="-1" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="3" cy="5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="-3" cy="5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="-5" cy="-1" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="0" cy="0" r="2.5" fill="#fde047"/>
          </g>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 53px;">
            <ellipse cx="50" cy="53" rx="3.8" ry="4.5" fill="#831843"/>
            <ellipse cx="70" cy="53" rx="3.8" ry="4.5" fill="#831843"/>
            <circle cx="48.8" cy="51.2" r="1.4" fill="#fff"/>
            <circle cx="68.8" cy="51.2" r="1.4" fill="#fff"/>
          </g>
          <ellipse cx="42" cy="59" rx="4" ry="2.2" fill="#f472b6" opacity="0.55"/>
          <ellipse cx="78" cy="59" rx="4" ry="2.2" fill="#f472b6" opacity="0.55"/>
          <path d="M56 60 Q60 63 64 60" fill="none" stroke="#831843" stroke-width="1.8" stroke-linecap="round"/>
          <!-- Floating petals -->
          <path d="M22 44 Q28 38 30 46 Q24 50 22 44 Z" fill="#f9a8d4" class="agy-ct-anim-twinkle"/>
          <path d="M95 58 Q101 52 103 60 Q97 64 95 58 Z" fill="#f9a8d4" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-pk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fbcfe8"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#f472b6" flood-opacity="0.65"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <ellipse cx="60" cy="80" rx="22" ry="19" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/>
          <path d="M44 74 Q60 82 76 74" fill="none" stroke="#ec4899" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="60" cy="52" rx="25" ry="21" fill="#fff1f2" stroke="#9d174d" stroke-width="2"/>
          <path d="M40 36 Q30 12 44 16 Q50 24 49 34 Z" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>
          <path d="M80 36 Q90 12 76 16 Q70 24 71 34 Z" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>
          <g transform="translate(76,32)">
            <circle cx="0" cy="-5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="5" cy="-1" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="3" cy="5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="-3" cy="5" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="-5" cy="-1" r="4" fill="url(#__UID__-pk)"/>
            <circle cx="0" cy="0" r="2.5" fill="#fde047"/>
          </g>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 51px;">
            <ellipse cx="50" cy="51" rx="3.8" ry="4.5" fill="#831843"/>
            <ellipse cx="70" cy="51" rx="3.8" ry="4.5" fill="#831843"/>
            <circle cx="48.8" cy="49.2" r="1.4" fill="#fff"/>
            <circle cx="68.8" cy="49.2" r="1.4" fill="#fff"/>
          </g>
          <path d="M56 58 Q60 61 64 58" fill="none" stroke="#831843" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M22 44 Q28 38 30 46 Q24 50 22 44 Z" fill="#f9a8d4" class="agy-ct-anim-twinkle"/>
          <path d="M96 64 Q102 58 104 66 Q98 70 96 64 Z" fill="#f9a8d4" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  /**
   * 9. Linh Hồn Đèn Lồng (Lantern Spirit)
   */
  'den-long': {
    name: 'Đèn Lồng Đêm',
    nameEn: 'Lantern Spirit',
    role: ['bubble', 'pet'],
    accent: '#fbbf24',
    bubbleSvg: `
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-ln" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#fef3c7"/>
            <stop offset="55%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#b45309"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#f59e0b" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <line x1="60" y1="8" x2="60" y2="20" stroke="#fde68a" stroke-width="2"/>
          <rect x="46" y="18" width="28" height="6" rx="2" fill="#451a03" stroke="#f59e0b" stroke-width="1.4"/>
          <ellipse cx="60" cy="48" rx="24" ry="26" fill="url(#__UID__-ln)" stroke="#78350f" stroke-width="2"/>
          <path d="M38 40 Q60 44 82 40 M37 56 Q60 60 83 56" fill="none" stroke="#92400e" stroke-width="1.3" opacity="0.6"/>
          <rect x="48" y="72" width="24" height="5" rx="2" fill="#451a03" stroke="#f59e0b" stroke-width="1.4"/>
          <path d="M56 77 L54 88 M60 77 L60 89 M64 77 L66 88" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 48px;">
            <ellipse cx="51" cy="48" rx="3.4" ry="4" fill="#451a03"/>
            <ellipse cx="69" cy="48" rx="3.4" ry="4" fill="#451a03"/>
            <circle cx="50" cy="46.5" r="1.3" fill="#fff"/>
            <circle cx="68" cy="46.5" r="1.3" fill="#fff"/>
          </g>
          <path d="M56 54 Q60 57 64 54" fill="none" stroke="#451a03" stroke-width="1.8" stroke-linecap="round"/>
        </g>
      </svg>`,
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-ln" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="55%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#b45309"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <line x1="60" y1="10" x2="60" y2="24" stroke="#fde68a" stroke-width="2.2"/>
          <rect x="44" y="22" width="32" height="7" rx="3" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
          <ellipse cx="60" cy="57" rx="28" ry="30" fill="url(#__UID__-ln)" stroke="#78350f" stroke-width="2.2"/>
          <path d="M35 45 Q60 50 85 45 M34 66 Q60 71 86 66" fill="none" stroke="#92400e" stroke-width="1.4" opacity="0.55"/>
          <rect x="46" y="85" width="28" height="6" rx="2.5" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
          <path d="M55 91 L52 106 M60 91 L60 108 M65 91 L68 106" stroke="#ef4444" stroke-width="2.4" stroke-linecap="round"/>
          <g class="agy-ct-anim-blink" style="transform-origin:60px 56px;">
            <ellipse cx="49" cy="56" rx="3.8" ry="4.5" fill="#451a03"/>
            <ellipse cx="71" cy="56" rx="3.8" ry="4.5" fill="#451a03"/>
            <circle cx="48" cy="54.2" r="1.4" fill="#fff"/>
            <circle cx="70" cy="54.2" r="1.4" fill="#fff"/>
          </g>
          <path d="M55 63 Q60 66.5 65 63" fill="none" stroke="#451a03" stroke-width="1.9" stroke-linecap="round"/>
          <circle cx="24" cy="44" r="2.2" fill="#fde68a" class="agy-ct-anim-twinkle"/>
          <circle cx="96" cy="48" r="2.5" fill="#fde68a" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  /**
   * 10. Cá Koi Tinh Tú (Cosmic Koi Pet)
   */
  'ca-koi': {
    name: 'Cá Koi Tinh Tú',
    nameEn: 'Cosmic Koi',
    role: ['pet'],
    accent: '#60a5fa',
    petSvg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-koi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="50%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#6366f1"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38bdf8" flood-opacity="0.65"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Flowing Tail Fin -->
          <path d="M74 68 Q104 52 108 70 Q94 74 106 90 Q86 92 72 74 Z" fill="#93c5fd" opacity="0.85" class="agy-ct-anim-wag" style="transform-origin:74px 70px;"/>
          <!-- Side Fins -->
          <path d="M48 64 Q30 76 38 88 Q52 80 54 68 Z" fill="#bfdbfe" opacity="0.8"/>
          <!-- Body -->
          <path d="M20 56 Q34 32 66 42 Q88 52 78 72 Q58 84 32 72 Q18 64 20 56 Z" fill="url(#__UID__-koi)" stroke="#1e3a8a" stroke-width="2"/>
          <!-- Gold markings -->
          <ellipse cx="46" cy="48" rx="9" ry="5" fill="#fde68a" opacity="0.9"/>
          <ellipse cx="64" cy="56" rx="7" ry="4" fill="#f9a8d4" opacity="0.85"/>
          <!-- Eye -->
          <circle cx="33" cy="55" r="4" fill="#0f172a"/>
          <circle cx="31.8" cy="53.6" r="1.5" fill="#fff"/>
          <!-- Stardust trail -->
          <circle cx="96" cy="42" r="2.2" fill="#fde68a" class="agy-ct-anim-twinkle"/>
          <circle cx="106" cy="54" r="1.6" fill="#fff" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  }
};

export function renderMascotSvg(id, kind = 'pet') {
  const tpl = MASCOT_TEMPLATES[id];
  if (!tpl) return '';
  const raw = kind === 'bubble' ? (tpl.bubbleSvg || tpl.petSvg) : (tpl.petSvg || tpl.bubbleSvg);
  return instantiateSvg(raw);
}
