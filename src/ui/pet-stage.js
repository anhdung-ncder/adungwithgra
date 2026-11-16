import { MASCOT_TEMPLATES, renderMascotSvg } from '../assets/mascots.js';

const PET_QUIPS = {
  'loi-kiem': {
    vi: [
      'Lôi Chi Hô Hấp: Nhất Thiểm! ⚡',
      'Mưa rơi nhưng kiếm vẫn sáng~ 🗡️',
      'Tập trung viết code nào!',
      'Đừng quên lưu file nhé ⚡'
    ],
    en: [
      'Thunder Breathing: First Form! ⚡',
      'Rain falls, blade stays sharp~ 🗡️',
      'Time to ship clean code!',
      'Remember to save your work ⚡'
    ]
  },
  'rong-ngoc': {
    vi: [
      'Rồng ngọc chúc bạn bug-free! 🐉',
      'Năng lượng ngọc bích đang tràn đầy ✨',
      'Hôm nay build gì tiếp nào?',
      'Bay một vòng rồi làm tiếp nhé~'
    ],
    en: [
      'Jade Dragon blesses zero bugs! 🐉',
      'Emerald mana fully charged ✨',
      'What are we building today?',
      'Take a quick stretch~'
    ]
  },
  'ho-ly-chibi': {
    vi: [
      'Hồ ly tới cổ vũ bạn đây! 🦊',
      'Nghỉ uống ngụm nước nha~ 🍵',
      'Code mượt như đuôi hồ ly ✨',
      'Kitsune luôn bên cạnh bạn!'
    ],
    en: [
      'Chibi Fox cheering you on! 🦊',
      'Hydration check~ 🍵',
      'Smooth code, fluffy tails ✨',
      'Kitsune magic activated!'
    ]
  },
  'meo-than': {
    vi: [
      'Meow~ Nghỉ tay xoa đầu mèo đi 🐱',
      'Grrr... phát hiện một bug nhỏ!',
      'Mèo than đang canh màn hình cho bạn~',
      'Ngủ trưa 5 phút không nè? 🐾'
    ],
    en: [
      'Meow~ Pet the kitty for good luck 🐱',
      'Purring at 60 FPS~',
      'Guard cat on duty 🐾',
      'Quick catnap break?'
    ]
  },
  'meo-huyen-thuat': {
    vi: [
      'Phép thuật cổ ngữ đã sẵn sàng 🔮',
      'Mọi lỗi compile sẽ tan biến~ ✨',
      'Meow! Triệu hồi thuật toán tối ưu!',
      'Ánh lửa huyền thuật đang soi sáng 🔥'
    ],
    en: [
      'Arcane runes aligned 🔮',
      'May all build errors vanish~ ✨',
      'Summoning clean architecture!',
      'Mystic aura active 🔥'
    ]
  },
  'phu-thuy-anh-trang': {
    vi: [
      'Ánh trăng soi đường cho dev đêm 🌙',
      'Pha chế xong lọ mana code sạch ✨',
      'Bay lên nào! 🧹',
      'Đêm nay deploy suôn sẻ nha~'
    ],
    en: [
      'Moonlight guides midnight devs 🌙',
      'Brewed a clean-code potion ✨',
      'Up and away! 🧹',
      'Smooth deploys tonight~'
    ]
  },
  'hoa-anh-dao': {
    vi: [
      'Gió xuân mang hoa anh đào tới 🌸',
      'Bình tĩnh debug từng dòng nhé~',
      'Thật nhẹ nhàng và tập trung ✨'
    ],
    en: [
      'Sakura breeze brings calm focus 🌸',
      'One clean step at a time~',
      'Peaceful coding vibes ✨'
    ]
  },
  'den-long': {
    vi: [
      'Đèn lồng thắp sáng ý tưởng mới 🏮',
      'Ấm áp giữa đêm mưa ✨',
      'Tiếp tục hành trình nào!'
    ],
    en: [
      'Lantern glowing with fresh ideas 🏮',
      'Warm light in the dark night ✨',
      'Keep building!'
    ]
  },
  'ca-koi': {
    vi: [
      'Cá Koi mang may mắn tới nè 🐟',
      'Bơi giữa dải ngân hà tinh tú ✨',
      'Mọi thứ sẽ trôi chảy như nước~'
    ],
    en: [
      'Cosmic Koi brings good fortune 🐟',
      'Swimming through starlight ✨',
      'Flow like water~'
    ]
  }
};

export class PetStage {
  constructor({ getConfig, getCustomMedia, onPositionSave }) {
    this.getConfig = getConfig;
    this.getCustomMedia = getCustomMedia;
    this.onPositionSave = onPositionSave;

    this.stageEl = null;
    this.bodyEl = null;
    this.speechEl = null;
    this.speechTimer = null;
    this.lastPetKey = '';
    this.pos = { x: 180, y: 120 };
    this.target = { x: 180, y: 120 };
    this.dragging = false;
    this.dragMoved = false;
    this.dragOffset = { x: 0, y: 0 };
    this.motionTimer = null;
    this.rafId = null;
    this.destroyed = false;

    this.onMouseMove = (e) => {
      const cfg = this.getConfig();
      if (cfg.pet?.mode === 'follow' && !this.dragging) {
        this.target.x = Math.min(window.innerWidth - 90, Math.max(16, e.clientX + 42));
        this.target.y = Math.min(window.innerHeight - 90, Math.max(16, e.clientY - 48));
      }
    };

    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
  }

  ensureMounted() {
    if (this.stageEl && document.body.contains(this.stageEl)) return;
    const el = document.createElement('div');
    el.id = 'agy-ct-pet-stage';
    el.setAttribute('data-agy-ct-injected', 'true');
    el.innerHTML = `
      <div class="agy-ct-pet-speech" aria-live="polite"></div>
      <div class="agy-ct-pet-body"></div>
    `;
    document.body.appendChild(el);
    this.stageEl = el;
    this.bodyEl = el.querySelector('.agy-ct-pet-body');
    this.speechEl = el.querySelector('.agy-ct-pet-speech');
    this.bindInteractions();
  }

  bindInteractions() {
    if (!this.stageEl) return;

    this.stageEl.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      this.dragging = true;
      this.dragMoved = false;
      const rect = this.stageEl.getBoundingClientRect();
      this.dragOffset.x = e.clientX - rect.left;
      this.dragOffset.y = e.clientY - rect.top;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.stageEl.setPointerCapture?.(e.pointerId);
    });

    this.stageEl.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      const dx = Math.abs(e.clientX - this.dragStart.x);
      const dy = Math.abs(e.clientY - this.dragStart.y);
      if (dx > 4 || dy > 4) this.dragMoved = true;

      const size = this.getConfig().pet?.size || 88;
      this.pos.x = Math.max(8, Math.min(window.innerWidth - size - 8, e.clientX - this.dragOffset.x));
      this.pos.y = Math.max(8, Math.min(window.innerHeight - size - 8, e.clientY - this.dragOffset.y));
      this.target = { ...this.pos };
      this.applyCoords();
    });

    const finishDrag = () => {
      if (!this.dragging) return;
      this.dragging = false;
      if (this.dragMoved) {
        const xPct = Math.round((this.pos.x / Math.max(1, window.innerWidth)) * 1000) / 10;
        const yPct = Math.round((this.pos.y / Math.max(1, window.innerHeight)) * 1000) / 10;
        this.onPositionSave?.({ xPct, yPct });
      } else {
        this.triggerClickReaction();
      }
    };

    this.stageEl.addEventListener('pointerup', finishDrag);
    this.stageEl.addEventListener('pointercancel', finishDrag);
  }

  triggerClickReaction() {
    const cfg = this.getConfig();
    if (!cfg.pet?.showSpeechOnClick) return;
    const petId = cfg.pet.id;
    const lang = cfg.lang === 'en' ? 'en' : 'vi';
    const bank = PET_QUIPS[petId]?.[lang] || (lang === 'en' ? ['Hello! ✨', 'Happy coding!'] : ['Xin chào! ✨', 'Code vui nhé!']);
    const line = bank[Math.floor(Math.random() * bank.length)];

    if (this.speechEl) {
      this.speechEl.textContent = line;
      this.speechEl.classList.add('is-visible');
      clearTimeout(this.speechTimer);
      this.speechTimer = setTimeout(() => {
        this.speechEl?.classList.remove('is-visible');
      }, 2800);
    }

    this.spawnBurstParticles();
  }

  spawnBurstParticles() {
    if (!this.stageEl) return;
    const rect = this.stageEl.getBoundingClientRect();
    const icons = ['✨', '⚡', '⭐', '💫'];
    for (let i = 0; i < 4; i++) {
      const sp = document.createElement('span');
      sp.className = 'agy-ct-pet-burst';
      sp.setAttribute('data-agy-ct-injected', 'true');
      sp.textContent = icons[Math.floor(Math.random() * icons.length)];
      sp.style.left = `${rect.left + rect.width * (0.25 + Math.random() * 0.5)}px`;
      sp.style.top = `${rect.top + rect.height * 0.3}px`;
      sp.style.setProperty('--dx', `${Math.round((Math.random() - 0.5) * 54)}px`);
      sp.style.setProperty('--dy', `${Math.round(-26 - Math.random() * 34)}px`);
      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 950);
    }
  }

  update() {
    const cfg = this.getConfig();
    const pet = cfg.pet || {};

    if (!cfg.enabled || !pet.enabled || pet.id === 'none') {
      this.stopMotion();
      if (this.stageEl) {
        this.stageEl.remove();
        this.stageEl = null;
        this.bodyEl = null;
        this.speechEl = null;
        this.lastPetKey = '';
      }
      return;
    }

    this.ensureMounted();
    this.stageEl.style.display = 'block';

    const size = Math.max(44, Math.min(160, Number(pet.size) || 88));
    const opacity = Math.max(0.2, Math.min(1, (pet.opacity ?? 96) / 100));
    this.stageEl.style.width = `${size}px`;
    this.stageEl.style.height = `${size}px`;
    this.stageEl.style.opacity = String(opacity);

    const customUrl = this.getCustomMedia?.().pet || '';
    const renderKey = pet.id === 'custom' ? `custom:${customUrl}` : `tpl:${pet.id}`;
    if (this.lastPetKey !== renderKey) {
      this.lastPetKey = renderKey;
      if (pet.id === 'custom' && customUrl) {
        this.bodyEl.innerHTML = `<img src="${customUrl.replace(/"/g, '&quot;')}" alt="Custom Pet" style="width:100%;height:100%;object-fit:contain;pointer-events:none;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.55));" />`;
      } else {
        const tplId = MASCOT_TEMPLATES[pet.id] ? pet.id : 'rong-ngoc';
        this.bodyEl.innerHTML = renderMascotSvg(tplId, 'pet');
      }
    }

    if (!this.dragging) {
      const xPct = pet.pos?.xPct ?? 16;
      const yPct = pet.pos?.yPct ?? 14;
      const px = Math.max(8, Math.min(window.innerWidth - size - 8, (xPct / 100) * window.innerWidth));
      const py = Math.max(8, Math.min(window.innerHeight - size - 8, (yPct / 100) * window.innerHeight));
      if (pet.mode === 'float') {
        this.pos = { x: px, y: py };
        this.target = { x: px, y: py };
      } else if (this.pos.x === 180 && this.pos.y === 120) {
        this.pos = { x: px, y: py };
        this.target = { x: px, y: py };
      }
      this.applyCoords();
    }

    this.configureMotion(pet.mode);
  }

  configureMotion(mode) {
    this.stopMotion();
    if (mode === 'float') return;

    if (mode === 'roam') {
      const pickNext = () => {
        const size = this.getConfig().pet?.size || 88;
        this.target.x = 24 + Math.random() * Math.max(40, window.innerWidth - size - 48);
        this.target.y = 40 + Math.random() * Math.max(40, window.innerHeight - size - 80);
      };
      pickNext();
      this.motionTimer = setInterval(pickNext, 4500);
    }

    const step = () => {
      if (this.destroyed) return;
      if (!this.dragging) {
        const dx = this.target.x - this.pos.x;
        const dy = this.target.y - this.pos.y;
        const ease = mode === 'follow' ? 0.045 : 0.015;
        if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
          this.pos.x += dx * ease;
          this.pos.y += dy * ease;
          this.applyCoords();
        }
      }
      this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }

  applyCoords() {
    if (!this.stageEl) return;
    this.stageEl.style.left = `${Math.round(this.pos.x)}px`;
    this.stageEl.style.top = `${Math.round(this.pos.y)}px`;
  }

  stopMotion() {
    if (this.motionTimer) {
      clearInterval(this.motionTimer);
      this.motionTimer = null;
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  destroy() {
    this.destroyed = true;
    this.stopMotion();
    clearTimeout(this.speechTimer);
    window.removeEventListener('mousemove', this.onMouseMove);
    this.stageEl?.remove();
    this.stageEl = null;
  }
}
