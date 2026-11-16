import { STICKER_TEMPLATES, renderStickerSvg } from '../assets/stickers.js';

/**
 * Decorative Sticker Manager.
 * Anchors stickers cleanly onto slots (input-top-right like Image 2, input-top-left,
 * greeting-badge, sidebar-bottom-right) or free draggable positions.
 */
export class StickerLayer {
  constructor({ getConfig, getCustomMedia, findInputBox, onStickerMove }) {
    this.getConfig = getConfig;
    this.getCustomMedia = getCustomMedia;
    this.findInputBox = findInputBox;
    this.onStickerMove = onStickerMove;

    this.nodes = new Map();
    this.repositionHandler = () => this.repositionAll();
    window.addEventListener('resize', this.repositionHandler);
  }

  update() {
    const cfg = this.getConfig();
    const stickersCfg = cfg.stickers || { enabled: false, items: [] };

    if (!cfg.enabled || !stickersCfg.enabled || !Array.isArray(stickersCfg.items) || stickersCfg.items.length === 0) {
      this.clearAll();
      return;
    }

    const activeKeys = new Set();
    const customUrl = this.getCustomMedia?.().sticker || '';

    stickersCfg.items.forEach((item, index) => {
      const key = `${index}:${item.id}`;
      activeKeys.add(key);

      let node = this.nodes.get(key);
      if (!node) {
        node = this.createNode(index, item, customUrl);
        this.nodes.set(key, node);
        document.body.appendChild(node);
      } else {
        const expectedRender = item.id === 'custom' ? `custom:${customUrl}` : `tpl:${item.id}`;
        if (node.dataset.renderKey !== expectedRender) {
          node.dataset.renderKey = expectedRender;
          node.innerHTML = this.renderContent(item.id, customUrl);
        }
      }

      const size = Math.max(28, Math.min(120, Number(item.size) || 52));
      const opacity = Math.max(0.2, Math.min(1, (item.opacity ?? 95) / 100));
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.opacity = String(opacity);
      node.classList.toggle('has-glow', item.glow !== false);
      node.dataset.index = String(index);
    });

    for (const [key, node] of this.nodes.entries()) {
      if (!activeKeys.has(key)) {
        node.remove();
        this.nodes.delete(key);
      }
    }

    this.repositionAll();
  }

  renderContent(id, customUrl) {
    if (id === 'custom' && customUrl) {
      return `<img src="${customUrl.replace(/"/g, '&quot;')}" alt="Custom Sticker" style="width:100%;height:100%;object-fit:contain;pointer-events:none;" />`;
    }
    const tplId = STICKER_TEMPLATES[id] ? id : 'trang-sao';
    return renderStickerSvg(tplId);
  }

  createNode(index, item, customUrl) {
    const node = document.createElement('div');
    node.className = 'agy-ct-sticker-node';
    node.setAttribute('data-agy-ct-injected', 'true');
    node.dataset.index = String(index);
    node.dataset.renderKey = item.id === 'custom' ? `custom:${customUrl}` : `tpl:${item.id}`;
    node.title = 'Kéo để di chuyển sticker';
    node.innerHTML = this.renderContent(item.id, customUrl);

    let dragging = false;
    let offset = { x: 0, y: 0 };

    node.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      dragging = true;
      const rect = node.getBoundingClientRect();
      offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      node.setPointerCapture?.(e.pointerId);
    });

    node.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const size = parseFloat(node.style.width) || 52;
      const x = Math.max(6, Math.min(window.innerWidth - size - 6, e.clientX - offset.x));
      const y = Math.max(6, Math.min(window.innerHeight - size - 6, e.clientY - offset.y));
      node.style.left = `${Math.round(x)}px`;
      node.style.top = `${Math.round(y)}px`;
    });

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      const rect = node.getBoundingClientRect();
      const xPct = Math.round((rect.left / Math.max(1, window.innerWidth)) * 1000) / 10;
      const yPct = Math.round((rect.top / Math.max(1, window.innerHeight)) * 1000) / 10;
      const idx = Number(node.dataset.index);
      this.onStickerMove?.(idx, { slot: 'free', pos: { xPct, yPct } });
    };

    node.addEventListener('pointerup', endDrag);
    node.addEventListener('pointercancel', endDrag);
    return node;
  }

  repositionAll() {
    const cfg = this.getConfig();
    const items = cfg.stickers?.items || [];
    const inputEl = this.findInputBox?.();
    const inputRect = inputEl ? inputEl.getBoundingClientRect() : null;
    const sidebarEl = document.querySelector('.agy-ct-surface-sidebar');
    const sidebarRect = sidebarEl ? sidebarEl.getBoundingClientRect() : null;

    items.forEach((item, index) => {
      const key = `${index}:${item.id}`;
      const node = this.nodes.get(key);
      if (!node) return;
      const size = Math.max(28, Math.min(120, Number(item.size) || 52));
      let x = 0;
      let y = 0;

      if (item.slot === 'input-top-right' && inputRect && inputRect.width > 40) {
        x = inputRect.right - size * 0.72;
        y = inputRect.top - size * 0.56;
      } else if (item.slot === 'input-top-left' && inputRect && inputRect.width > 40) {
        x = inputRect.left - size * 0.28;
        y = inputRect.top - size * 0.56;
      } else if (item.slot === 'sidebar-bottom-right' && sidebarRect && sidebarRect.width > 40) {
        x = sidebarRect.right - size - 10;
        y = sidebarRect.bottom - size - 14;
      } else if (item.slot === 'greeting-badge') {
        const xBase = inputRect ? inputRect.left + inputRect.width * 0.78 : window.innerWidth * 0.72;
        const yBase = inputRect ? Math.max(60, inputRect.top - 110) : window.innerHeight * 0.44;
        x = xBase;
        y = yBase;
      } else if (item.slot === 'free' && item.pos) {
        x = (item.pos.xPct / 100) * window.innerWidth;
        y = (item.pos.yPct / 100) * window.innerHeight;
      } else {
        // Fallback near bottom-right composer area
        x = window.innerWidth - size - 36;
        y = window.innerHeight - size - 120;
      }

      x = Math.max(4, Math.min(window.innerWidth - size - 4, x));
      y = Math.max(4, Math.min(window.innerHeight - size - 4, y));
      node.style.left = `${Math.round(x)}px`;
      node.style.top = `${Math.round(y)}px`;
    });
  }

  clearAll() {
    for (const node of this.nodes.values()) {
      node.remove();
    }
    this.nodes.clear();
  }

  destroy() {
    window.removeEventListener('resize', this.repositionHandler);
    this.clearAll();
  }
}
