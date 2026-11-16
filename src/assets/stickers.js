import { instantiateSvg } from './mascots.js';

/**
 * Rich animated/glowing SVG sticker collection.
 * Includes the Star & Moon sticker (like Image 2) plus Thunder Samurai & fantasy assets.
 */
export const STICKER_TEMPLATES = {
  'trang-sao': {
    name: 'Trăng Sao',
    nameEn: 'Star & Moon',
    category: 'cosmic',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-st" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="55%" stop-color="#67e8f9"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#67e8f9" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <!-- Crescent Moon -->
          <path d="M68 20 A22 22 0 1 0 82 54 A17 17 0 1 1 68 20 Z" fill="#fef08a" stroke="#164e63" stroke-width="2.2"/>
          <!-- Main Chibi Star -->
          <path d="M40 24 L47 40 L64 42 L51 54 L54 71 L40 62 L26 71 L29 54 L16 42 L33 40 Z" fill="url(#__UID__-st)" stroke="#164e63" stroke-width="2.4" stroke-linejoin="round"/>
          <!-- Cute eyes on star -->
          <circle cx="35" cy="48" r="2.2" fill="#0f172a"/>
          <circle cx="45" cy="48" r="2.2" fill="#0f172a"/>
          <path d="M38 52 Q40 54.5 42 52" fill="none" stroke="#0f172a" stroke-width="1.6" stroke-linecap="round"/>
          <!-- Mini sparkles -->
          <path d="M76 62 L78 67 L83 69 L78 71 L76 76 L74 71 L69 69 L74 67 Z" fill="#a5f3fc" class="agy-ct-anim-twinkle"/>
          <circle cx="22" cy="24" r="2.5" fill="#fde047" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  'bua-loi-an': {
    name: 'Bùa Lôi Ấn',
    nameEn: 'Thunder Seal',
    category: 'thunder',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-pa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fef3c7"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#facc15" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" transform="rotate(-8 48 48)">
          <rect x="29" y="10" width="38" height="76" rx="4" fill="url(#__UID__-pa)" stroke="#451a03" stroke-width="2.2"/>
          <rect x="33" y="14" width="30" height="68" rx="2" fill="none" stroke="#b91c1c" stroke-width="1.6"/>
          <!-- Lightning emblem -->
          <path d="M52 24 L39 48 H49 L43 72 L60 44 H49 Z" fill="#dc2626" stroke="#fef08a" stroke-width="1.4" stroke-linejoin="round" class="agy-ct-anim-spark"/>
          <circle cx="48" cy="19" r="2" fill="#b91c1c"/>
          <circle cx="48" cy="77" r="2" fill="#b91c1c"/>
        </g>
      </svg>`
  },

  'kiem-loi': {
    name: 'Kiếm Lôi',
    nameEn: 'Lightning Katana',
    category: 'thunder',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-bl" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#64748b"/>
            <stop offset="50%" stop-color="#e2e8f0"/>
            <stop offset="100%" stop-color="#fef08a"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#fde047" flood-opacity="0.8"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)">
          <!-- Blade -->
          <path d="M22 74 L76 16 L82 14 L78 22 L27 78 Z" fill="url(#__UID__-bl)" stroke="#1e293b" stroke-width="1.8"/>
          <!-- Tsuba guard -->
          <ellipse cx="29" cy="69" rx="9" ry="4.5" transform="rotate(-45 29 69)" fill="#facc15" stroke="#451a03" stroke-width="1.6"/>
          <!-- Hilt -->
          <path d="M12 82 L26 68 L30 72 L16 86 Z" fill="#18181b" stroke="#facc15" stroke-width="1.4"/>
          <!-- Crackling lightning arc -->
          <path d="M36 62 L46 58 L44 48 L58 43 L57 32 L72 24" fill="none" stroke="#fef08a" stroke-width="2.6" stroke-linecap="round" class="agy-ct-anim-spark"/>
          <path d="M40 44 L48 40 L47 31" fill="none" stroke="#facc15" stroke-width="1.8" stroke-linecap="round" class="agy-ct-anim-spark"/>
        </g>
      </svg>`
  },

  'non-la-lu-khach': {
    name: 'Nón Lữ Khách',
    nameEn: 'Ronin Bamboo Hat',
    category: 'thunder',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-ht" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#a67c52"/>
            <stop offset="100%" stop-color="#452813"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#eab308" flood-opacity="0.5"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <path d="M8 58 Q48 16 88 58 Q48 68 8 58 Z" fill="url(#__UID__-ht)" stroke="#1c1008" stroke-width="2.2"/>
          <path d="M22 52 Q48 28 74 52" fill="none" stroke="#d4a373" stroke-width="1.5" opacity="0.7"/>
          <path d="M32 45 Q48 33 64 45" fill="none" stroke="#d4a373" stroke-width="1.3" opacity="0.6"/>
          <!-- Rain droplets & spark -->
          <line x1="20" y1="66" x2="18" y2="75" stroke="#93c5fd" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="48" y1="68" x2="46" y2="78" stroke="#93c5fd" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="76" y1="65" x2="74" y2="74" stroke="#93c5fd" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M68 24 L74 18 L72 26 L78 24" fill="none" stroke="#fde047" stroke-width="2" stroke-linecap="round" class="agy-ct-anim-spark"/>
        </g>
      </svg>`
  },

  'rong-ngoc-mini': {
    name: 'Huy Hiệu Rồng Ngọc',
    nameEn: 'Jade Dragon Crest',
    category: 'fantasy',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-orb" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stop-color="#d1fae5"/>
            <stop offset="50%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#064e3b"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#34d399" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <circle cx="48" cy="48" r="28" fill="url(#__UID__-orb)" stroke="#a7f3d0" stroke-width="2"/>
          <path d="M35 32 Q27 18 35 16 Q40 24 41 30 Z" fill="#fde68a" stroke="#064e3b" stroke-width="1.5"/>
          <path d="M61 32 Q69 18 61 16 Q56 24 55 30 Z" fill="#fde68a" stroke="#064e3b" stroke-width="1.5"/>
          <ellipse cx="40" cy="48" rx="3.4" ry="4" fill="#04241c"/>
          <ellipse cx="56" cy="48" rx="3.4" ry="4" fill="#04241c"/>
          <circle cx="39" cy="46.5" r="1.4" fill="#fff"/>
          <circle cx="55" cy="46.5" r="1.4" fill="#fff"/>
          <path d="M44 56 Q48 60 52 56" fill="none" stroke="#04241c" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>`
  },

  'ho-ly-charm': {
    name: 'Mặt Nạ Hồ Ly',
    nameEn: 'Kitsune Mask',
    category: 'fantasy',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f97316" flood-opacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <path d="M24 34 L18 12 L40 24 Z" fill="#fff7ed" stroke="#431407" stroke-width="2"/>
          <path d="M72 34 L78 12 L56 24 Z" fill="#fff7ed" stroke="#431407" stroke-width="2"/>
          <path d="M26 30 L23 18 L35 25 Z" fill="#ef4444"/>
          <path d="M70 30 L73 18 L61 25 Z" fill="#ef4444"/>
          <path d="M20 40 Q48 22 76 40 Q74 68 48 80 Q22 68 20 40 Z" fill="#fff7ed" stroke="#431407" stroke-width="2.2"/>
          <!-- Crimson Kitsune Markings -->
          <path d="M28 45 Q36 42 42 48 Q35 51 28 45 Z" fill="#dc2626"/>
          <path d="M68 45 Q60 42 54 48 Q61 51 68 45 Z" fill="#dc2626"/>
          <path d="M48 30 L52 38 L48 44 L44 38 Z" fill="#dc2626"/>
          <path d="M26 58 Q33 63 39 62" fill="none" stroke="#f97316" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M70 58 Q63 63 57 62" fill="none" stroke="#f97316" stroke-width="2.2" stroke-linecap="round"/>
          <circle cx="48" cy="70" r="2.2" fill="#1c1917"/>
          <path d="M44 76 L40 86 M52 76 L56 86" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </svg>`
  },

  'chan-meo': {
    name: 'Dấu Chân Mèo',
    nameEn: 'Cat Paw',
    category: 'cute',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#fb7185" flood-opacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <ellipse cx="48" cy="60" rx="22" ry="18" fill="#fef2f2" stroke="#4c1d24" stroke-width="2.2"/>
          <ellipse cx="48" cy="62" rx="13" ry="10" fill="#fda4af"/>
          <ellipse cx="26" cy="40" rx="7" ry="9" transform="rotate(-18 26 40)" fill="#fef2f2" stroke="#4c1d24" stroke-width="2"/>
          <ellipse cx="26" cy="41" rx="4" ry="5" transform="rotate(-18 26 41)" fill="#fda4af"/>
          <ellipse cx="41" cy="30" rx="7" ry="9.5" transform="rotate(-6 41 30)" fill="#fef2f2" stroke="#4c1d24" stroke-width="2"/>
          <ellipse cx="41" cy="31" rx="4" ry="5.5" transform="rotate(-6 41 31)" fill="#fda4af"/>
          <ellipse cx="56" cy="30" rx="7" ry="9.5" transform="rotate(6 56 30)" fill="#fef2f2" stroke="#4c1d24" stroke-width="2"/>
          <ellipse cx="56" cy="31" rx="4" ry="5.5" transform="rotate(6 56 31)" fill="#fda4af"/>
          <ellipse cx="70" cy="40" rx="7" ry="9" transform="rotate(18 70 40)" fill="#fef2f2" stroke="#4c1d24" stroke-width="2"/>
          <ellipse cx="70" cy="41" rx="4" ry="5" transform="rotate(18 70 41)" fill="#fda4af"/>
        </g>
      </svg>`
  },

  'hoa-anh-dao': {
    name: 'Hoa Anh Đào',
    nameEn: 'Sakura Blossom',
    category: 'cute',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-sk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff1f2"/>
            <stop offset="65%" stop-color="#fbcfe8"/>
            <stop offset="100%" stop-color="#f472b6"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f472b6" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" transform="translate(48,48)" class="agy-ct-anim-spin" style="animation-duration:18s;">
          <path d="M0 -8 C-10 -22 -14 -34 -3 -36 L0 -31 L3 -36 C14 -34 10 -22 0 -8 Z" fill="url(#__UID__-sk)" stroke="#9d174d" stroke-width="1.5"/>
          <path d="M0 -8 C-10 -22 -14 -34 -3 -36 L0 -31 L3 -36 C14 -34 10 -22 0 -8 Z" transform="rotate(72)" fill="url(#__UID__-sk)" stroke="#9d174d" stroke-width="1.5"/>
          <path d="M0 -8 C-10 -22 -14 -34 -3 -36 L0 -31 L3 -36 C14 -34 10 -22 0 -8 Z" transform="rotate(144)" fill="url(#__UID__-sk)" stroke="#9d174d" stroke-width="1.5"/>
          <path d="M0 -8 C-10 -22 -14 -34 -3 -36 L0 -31 L3 -36 C14 -34 10 -22 0 -8 Z" transform="rotate(216)" fill="url(#__UID__-sk)" stroke="#9d174d" stroke-width="1.5"/>
          <path d="M0 -8 C-10 -22 -14 -34 -3 -36 L0 -31 L3 -36 C14 -34 10 -22 0 -8 Z" transform="rotate(288)" fill="url(#__UID__-sk)" stroke="#9d174d" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="7" fill="#fde047" stroke="#b45309" stroke-width="1.4"/>
        </g>
      </svg>`
  },

  'den-long': {
    name: 'Đèn Lồng Đêm',
    nameEn: 'Night Lantern',
    category: 'fantasy',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-ln" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="60%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#b91c1c"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#f59e0b" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <line x1="48" y1="8" x2="48" y2="18" stroke="#fde68a" stroke-width="2"/>
          <rect x="36" y="18" width="24" height="5" rx="2" fill="#451a03"/>
          <ellipse cx="48" cy="46" rx="20" ry="23" fill="url(#__UID__-ln)" stroke="#7c2d12" stroke-width="2"/>
          <path d="M30 38 Q48 42 66 38 M30 54 Q48 58 66 54" fill="none" stroke="#7c2d12" stroke-width="1.4" opacity="0.6"/>
          <rect x="38" y="68" width="20" height="5" rx="2" fill="#451a03"/>
          <path d="M44 73 L42 84 M48 73 L48 86 M52 73 L54 84" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>`
  },

  'lo-ma-thuat': {
    name: 'Lọ Ma Thuật',
    nameEn: 'Starlight Potion',
    category: 'cosmic',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-lq" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c084fc"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#c084fc" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <rect x="40" y="14" width="16" height="9" rx="2" fill="#b45309" stroke="#451a03" stroke-width="1.6"/>
          <rect x="38" y="22" width="20" height="6" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
          <path d="M42 28 L42 38 L25 56 A23 23 0 1 0 71 56 L54 38 L54 28 Z" fill="rgba(255,255,255,0.16)" stroke="#e2e8f0" stroke-width="2"/>
          <path d="M27 57 A21 21 0 1 0 69 57 Q58 53 48 57 Q38 61 27 57 Z" fill="url(#__UID__-lq)"/>
          <circle cx="42" cy="64" r="2.5" fill="#fff" opacity="0.8"/>
          <circle cx="55" cy="68" r="1.8" fill="#fde047"/>
          <path d="M48 44 L50 48 L54 50 L50 52 L48 56 L46 52 L42 50 L46 48 Z" fill="#fef08a" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  'hac-giay': {
    name: 'Hạc Giấy',
    nameEn: 'Origami Crane',
    category: 'cute',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <linearGradient id="__UID__-cr" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#93c5fd"/>
          </linearGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#60a5fa" flood-opacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <polygon points="12,34 46,46 38,60" fill="#bae6fd" stroke="#1e3a8a" stroke-width="1.6"/>
          <polygon points="46,46 84,26 58,58" fill="url(#__UID__-cr)" stroke="#1e3a8a" stroke-width="1.6"/>
          <polygon points="38,60 58,58 49,74" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.6"/>
          <polygon points="58,58 76,72 68,50" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="1.6"/>
          <polygon points="24,42 14,22 22,20 20,30" fill="#f8fafc" stroke="#1e3a8a" stroke-width="1.6"/>
        </g>
      </svg>`
  },

  'tinh-cau': {
    name: 'Tinh Cầu Vũ Trụ',
    nameEn: 'Cosmic Planet',
    category: 'cosmic',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <radialGradient id="__UID__-pl" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fde68a"/>
            <stop offset="50%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </radialGradient>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#a855f7" flood-opacity="0.7"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-float">
          <circle cx="48" cy="48" r="22" fill="url(#__UID__-pl)" stroke="#e9d5ff" stroke-width="1.6"/>
          <ellipse cx="48" cy="48" rx="38" ry="10" transform="rotate(-22 48 48)" fill="none" stroke="#fde047" stroke-width="3"/>
          <circle cx="78" cy="24" r="2.2" fill="#fff" class="agy-ct-anim-twinkle"/>
          <circle cx="18" cy="68" r="2" fill="#67e8f9" class="agy-ct-anim-twinkle"/>
        </g>
      </svg>`
  },

  'meo-ngu': {
    name: 'Mèo Than Ngủ',
    nameEn: 'Sleepy Cat',
    category: 'cute',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#e09f67" flood-opacity="0.5"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)" class="agy-ct-anim-bob">
          <ellipse cx="48" cy="60" rx="28" ry="18" fill="#b8764b" stroke="#3b2316" stroke-width="2.2"/>
          <path d="M24 54 Q18 36 30 34 L38 46 Z" fill="#b8764b" stroke="#3b2316" stroke-width="2"/>
          <path d="M72 54 Q78 36 66 34 L58 46 Z" fill="#b8764b" stroke="#3b2316" stroke-width="2"/>
          <path d="M35 58 Q40 62 45 58" fill="none" stroke="#2d180e" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M51 58 Q56 62 61 58" fill="none" stroke="#2d180e" stroke-width="2.2" stroke-linecap="round"/>
          <ellipse cx="48" cy="63" rx="3" ry="2" fill="#fda4af"/>
          <text x="68" y="34" fill="#fde68a" font-size="11" font-weight="bold" font-family="sans-serif" class="agy-ct-anim-twinkle">z</text>
          <text x="76" y="25" fill="#fde68a" font-size="14" font-weight="bold" font-family="sans-serif" class="agy-ct-anim-twinkle">Z</text>
        </g>
      </svg>`
  },

  'meo-huyen-sigil': {
    name: 'Ấn Mèo Huyền Thuật',
    nameEn: 'Arcane Cat Crest',
    category: 'fantasy',
    svg: `
      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="agy-ct-svg-art">
        <defs>
          <filter id="__UID__-gl" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#ff8c2e" flood-opacity="0.75"/>
          </filter>
        </defs>
        <g filter="url(#__UID__-gl)">
          <circle cx="48" cy="48" r="34" fill="rgba(24,14,18,0.85)" stroke="#fb923c" stroke-width="2" stroke-dasharray="6 3"/>
          <path d="M31 44 L25 22 L43 32 Z" fill="#1f161b" stroke="#fb923c" stroke-width="1.8"/>
          <path d="M65 44 L71 22 L53 32 Z" fill="#1f161b" stroke="#fb923c" stroke-width="1.8"/>
          <ellipse cx="48" cy="51" rx="20" ry="17" fill="#1f161b" stroke="#fb923c" stroke-width="1.8"/>
          <ellipse cx="40" cy="51" rx="3.4" ry="3" fill="#fbbf24"/>
          <ellipse cx="56" cy="51" rx="3.4" ry="3" fill="#fbbf24"/>
          <path d="M48 37 L51 42 L48 46 L45 42 Z" fill="#fde047"/>
        </g>
      </svg>`
  }
};

export function renderStickerSvg(id) {
  const tpl = STICKER_TEMPLATES[id];
  if (!tpl) return '';
  return instantiateSvg(tpl.svg);
}
