/**
 * 1-click curated full theme bundles & accent color swatches.
 */
export const ACCENT_COLORS = [
  { id: 'gold', name: 'Kim Lôi', hex: '#f5c451' },
  { id: 'jade', name: 'Ngọc Bích', hex: '#34d399' },
  { id: 'sky', name: 'Tinh Tú', hex: '#60a5fa' },
  { id: 'amber', name: 'Hồ Ly', hex: '#fb923c' },
  { id: 'sakura', name: 'Anh Đào', hex: '#f472b6' },
  { id: 'violet', name: 'Ánh Trăng', hex: '#c084fc' }
];

export const THEME_BUNDLES = [
  {
    id: 'thunder-samurai-pack',
    name: 'Lôi Kiếm Vũ Đêm',
    nameEn: 'Thunder Samurai',
    subtitle: 'Ảnh nền bạn chọn + Mưa sét + Lôi Kiếm',
    subtitleEn: 'Your wallpaper + Thunder rain + Katana pet',
    badge: 'Mặc định',
    patch: {
      wallpaperId: 'thunder-samurai',
      dimming: 28,
      blur: 0,
      glassOpacity: 44,
      accentColor: '#f5c451',
      atmosphereId: 'thunder-rain',
      atmosphereIntensity: 65,
      bubbleId: 'loi-kiem',
      inputId: 'loi-anh-kim',
      pet: {
        enabled: true,
        id: 'loi-kiem',
        size: 88,
        mode: 'float',
        opacity: 96
      },
      stickers: {
        enabled: true,
        items: [
          { id: 'bua-loi-an', slot: 'input-top-right', size: 54, glow: true },
          { id: 'non-la-lu-khach', slot: 'sidebar-bottom-right', size: 46, glow: true }
        ]
      }
    }
  },
  {
    id: 'cosmic-violin-pack',
    name: 'Thiên Hà Tinh Tú 4K',
    nameEn: 'Cosmic Night 4K',
    subtitle: 'Ảnh 4K sắc nét + Kính trong + Rồng ngọc',
    subtitleEn: 'Sharp 4K Earth + Clear Glass + Jade Dragon',
    badge: '4K Chuẩn ảnh',
    patch: {
      wallpaperId: 'cosmic-violin-4k',
      dimming: 22,
      blur: 0,
      glassOpacity: 38,
      accentColor: '#60a5fa',
      atmosphereId: 'stardust',
      atmosphereIntensity: 70,
      bubbleId: 'thien-ha',
      inputId: 'thien-ha-kinh',
      pet: {
        enabled: true,
        id: 'rong-ngoc',
        size: 84,
        mode: 'float',
        opacity: 96
      },
      stickers: {
        enabled: true,
        items: [
          { id: 'trang-sao', slot: 'input-top-right', size: 56, glow: true }
        ]
      }
    }
  },
  {
    id: 'sakura-shrine-pack',
    name: 'Đền Thờ Anh Đào',
    nameEn: 'Sakura Shrine',
    subtitle: 'Đêm anh đào + Cánh hoa rơi + Hồ ly chibi',
    subtitleEn: 'Midnight shrine + Sakura + Chibi Fox',
    badge: 'Cổ phong',
    patch: {
      wallpaperId: 'sakura-shrine-night',
      dimming: 46,
      blur: 0,
      glassOpacity: 62,
      accentColor: '#f472b6',
      atmosphereId: 'sakura',
      atmosphereIntensity: 68,
      bubbleId: 'hoa-anh-dao',
      inputId: 'anh-dao-dem',
      pet: {
        enabled: true,
        id: 'ho-ly-chibi',
        size: 86,
        mode: 'roam',
        opacity: 96
      },
      stickers: {
        enabled: true,
        items: [
          { id: 'hoa-anh-dao', slot: 'input-top-right', size: 50, glow: true },
          { id: 'den-long', slot: 'input-top-left', size: 46, glow: true }
        ]
      }
    }
  },
  {
    id: 'jade-dragon-pack',
    name: 'Rồng Ngọc Tiên Cảnh',
    nameEn: 'Jade Sanctuary',
    subtitle: 'Thung lũng ngọc + Đom đóm + Rồng ngọc',
    subtitleEn: 'Emerald peaks + Fireflies + Jade Dragon',
    badge: 'Tiên hiệp',
    patch: {
      wallpaperId: 'jade-dragon-mist',
      dimming: 42,
      blur: 0,
      glassOpacity: 60,
      accentColor: '#34d399',
      atmosphereId: 'fireflies',
      atmosphereIntensity: 72,
      bubbleId: 'rong-ngoc',
      inputId: 'ngoc-bich',
      pet: {
        enabled: true,
        id: 'rong-ngoc',
        size: 88,
        mode: 'float',
        opacity: 98
      },
      stickers: {
        enabled: true,
        items: [
          { id: 'rong-ngoc-mini', slot: 'input-top-right', size: 50, glow: true }
        ]
      }
    }
  },
  {
    id: 'arcane-moonlight-pack',
    name: 'Phù Thủy Ánh Trăng',
    nameEn: 'Moonlight Arcane',
    subtitle: 'Bóng đêm tím + Mèo huyền thuật + Phù thủy',
    subtitleEn: 'Twilight arcane + Witch + Mystic Cat',
    badge: 'Huyền bí',
    patch: {
      wallpaperId: 'sakura-shrine-night',
      dimming: 58,
      blur: 2,
      glassOpacity: 66,
      accentColor: '#c084fc',
      atmosphereId: 'stardust',
      atmosphereIntensity: 60,
      bubbleId: 'phu-thuy-anh-trang',
      inputId: 'huyen-thuat-tim',
      pet: {
        enabled: true,
        id: 'phu-thuy-anh-trang',
        size: 90,
        mode: 'float',
        opacity: 96
      },
      stickers: {
        enabled: true,
        items: [
          { id: 'lo-ma-thuat', slot: 'input-top-right', size: 50, glow: true },
          { id: 'meo-huyen-sigil', slot: 'sidebar-bottom-right', size: 46, glow: true }
        ]
      }
    }
  }
];
