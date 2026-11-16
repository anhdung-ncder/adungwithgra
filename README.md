# Antigravity Custom Theme Injector 🎨⚡

Hệ thống tùy biến giao diện cao cấp dành cho **Antigravity** hoạt động theo cơ chế **JavaScript Injector** (chạy tại runtime, không sửa bất kỳ file cài đặt gốc nào của ứng dụng). Tích hợp bảng điều khiển **Custom theme** trực quan ngay trong Settings, đi kèm bộ hình nền chất lượng cao, hiệu ứng thời tiết tương tác, bóng chat phong cách, sticker và thú cưng (pet) lơ lửng.

---

## 🌟 Tính năng nổi bật

- 🛡️ **Tuyệt đối an toàn & Không sửa file gốc (Pure Additive Injector)**:
  - Hoạt động độc lập qua `MutationObserver` + `<style id="agy-ct-styles">`.
  - Có thể gỡ bỏ sạch sẽ tức thì qua nút Reset hoặc lệnh `node inject.mjs --reset` mà không để lại bất kỳ rác hệ thống nào.
- ⚙️ **Tích hợp liền mạch vào Settings**:
  - Tự động phát hiện thanh điều hướng Settings của Antigravity (`General`, `Appearance`, v.v.) và chèn mục **Custom theme** riêng biệt.
  - Phím tắt tiện lợi: `Cmd + Shift + Y` (macOS) hoặc `Ctrl + Shift + Y` (Windows / Linux) để bật/tắt bảng cấu hình bất cứ lúc nào.
- 🖼️ **Bộ ảnh nền tuyển chọn & Tùy chỉnh độ mờ**:
  - Tích hợp sẵn các hình nền nghệ thuật: *Lôi Kiếm Vũ Đêm*, *Minato Namikaze*, *Địa Cầu Ánh Sao*, *Vũ Trụ Vĩ Cầm*, *Đền Thờ Anh Đào*, *Thung Lũng Ngọc Bích*.
  - Hỗ trợ **tải ảnh nền cá nhân từ máy tính** (lưu bền vững bằng `IndexedDB`).
  - Tùy chỉnh trực quan: Độ tối (Darkness), Làm mờ nền (Blur), Độ mờ đục của giao diện (Opacity).
- 🌧️ **Hiệu ứng môi trường sống động (Canvas nhẹ, tiết kiệm tài nguyên)**:
  - *Mưa & Tia Sét* (hiệu ứng sấm chớp đồng bộ), *Mưa Đêm*, *Bụi Sao Vũ Trụ*, *Cánh Hoa Anh Đào Rơi*, *Đom Đóm Ngọc*.
  - Tự động tạm dừng khi ẩn cửa sổ hoặc chuyển tab để đảm bảo 0% CPU hao phí.
- 💬 **Bong bóng chat & Khung nhập liệu phong cách**:
  - Hơn 12 mẫu bong bóng chat: *Lôi Kiếm*, *Mèo Than*, *Thiên Hà*, *Cổ Thư*, *Huyền Thuật*, *Rồng Ngọc*, *Phù Thủy Ánh Trăng*, *Hồ Ly*, *Cyber Neon*, v.v.
  - 8 kiểu viền phát sáng và hiệu ứng kính mờ (glassmorphism) cho khung nhập prompt.
- 🐾 **Thú cưng tương tác (Interactive Pets) & Sticker kéo thả**:
  - Hơn 9 mẫu thú cưng: hỗ trợ 3 chế độ vận động (*Lơ lửng tại chỗ*, *Đi dạo tự do*, *Đi theo trỏ chuột*), tương tác click có lời thoại và hiệu ứng hạt.
  - 14 mẫu sticker SVG sắc nét + hỗ trợ tải lên sticker riêng (PNG/GIF) và tự do kéo thả vị trí trên màn hình.
- 🎯 **Visual DOM Picker**:
  - Nếu phiên bản Antigravity mới thay đổi tên class CSS, bạn chỉ cần bấm nút "Chọn vùng DOM" trên giao diện để trỏ trực tiếp mà không cần viết code.

---

## 🚀 Cách sử dụng nhanh nhất

Yêu cầu môi trường: **Node.js `>= 22.0.0`** (không cần cài thêm bất kỳ thư viện npm bên ngoài nào).

### Cách 1: Tự động khởi động và tiêm theme (Khuyên dùng)

Đóng Antigravity nếu đang mở (`Cmd + Q` trên macOS hoặc Quit trên Windows), sau đó chạy:

```bash
# Tự động mở Antigravity với cổng CDP 9000 và tiêm theme ngay khi app sẵn sàng
node inject.mjs --launch --open-settings
```

Hoặc qua npm scripts:
```bash
npm run launch
```

---

### Cách 2: Mở Antigravity thủ công kèm cổng gỡ lỗi (CDP)

#### Bước 1: Mở Antigravity kèm cờ gỡ lỗi
> **Lưu ý:** Dùng cổng `9000` (tránh cổng mặc định `9222` vì Antigravity giữ cổng này cho trình duyệt con).

- **macOS (Terminal):**
  ```bash
  open -a Antigravity --args --remote-debugging-port=9000 "--remote-allow-origins=*"
  ```

- **Windows (PowerShell):**
  ```powershell
  Start-Process "$env:LOCALAPPDATA\Programs\antigravity\Antigravity.exe" -ArgumentList "--remote-debugging-port=9000","--remote-allow-origins=*"
  ```

- **Linux:**
  ```bash
  antigravity --remote-debugging-port=9000 "--remote-allow-origins=*"
  ```

#### Bước 2: Chạy lệnh tiêm
```bash
node inject.mjs
```

---

### Cách 3: Ứng dụng Launcher 1-Click cho macOS 🍎

Bạn có thể tự tạo ứng dụng **Antigravity Custom Theme.app** đặt trong thư mục `Applications` hoặc `Dock`:

```bash
npm run launcher
```
Sau đó chỉ cần bấm đúp chuột vào file `Antigravity Custom Theme.app` vừa tạo để khởi chạy mọi thứ hoàn toàn tự động!

---

## 🛠️ Danh sách lệnh CLI hữu ích

| Lệnh | Ý nghĩa |
| :--- | :--- |
| `node inject.mjs` | Tiêm theme vào tất cả cửa sổ Antigravity đang mở |
| `node inject.mjs --launch` | Tự mở ứng dụng Antigravity và tiêm theme |
| `node inject.mjs --open-settings` | Tiêm xong và tự mở ngay bảng điều khiển Custom theme |
| `node inject.mjs --reset` | Dừng tiến trình nền và gỡ sạch theme khỏi app |
| `node inject.mjs --watch` | Tự động rebuild và tiêm nóng lại khi bạn sửa mã nguồn `src/` |
| `node inject.mjs --dry-run` | Kiểm tra bundle và kết nối mà không thực hiện tiêm |

---

## 💻 Xem trước và Tùy biến mã nguồn

### 1. Xem trước giao diện giả lập (Preview)
Mở trực tiếp file `preview.html` trên trình duyệt:
```bash
python3 -m http.server 8181
# Truy cập: http://localhost:8181/preview.html
```

### 2. Cấu trúc thư mục
```text
├── assets/wallpapers/            # Ảnh nền gốc (tự động nhúng base64 khi build)
├── src/
│   ├── assets/                   # SVG artwork cho Pet, Mascot, Sticker
│   ├── presets/                  # Mẫu bong bóng, khung nhập, theme preset
│   ├── core/                     # CSS Styles, Canvas FX, DOM Adapter, Storage
│   ├── ui/                       # Bảng Settings, Khung Pet, Khung Sticker
│   └── index.js                  # Điểm khởi chạy chính
├── scripts/
│   ├── build.mjs                 # Script đóng gói không phụ thuộc thư viện
│   └── create-launcher.mjs       # Script tạo macOS .app Launcher 1-click
├── dist/
│   └── antigravity-theme-injector.js  # File bundle duy nhất hoàn chỉnh
├── inject.mjs                    # Bộ điều khiển tiêm CDP và đồng bộ cấu hình
└── preview.html                  # File HTML test giao diện
```

### 3. Đóng gói lại (Build bundle)
Nếu bạn thay đổi mã nguồn trong `src/` hoặc thêm hình nền vào `assets/wallpapers/`:
```bash
node scripts/build.mjs
# hoặc: npm run build
```

---

## 🔒 Cam kết an toàn & Quyền riêng tư

- **100% Hoạt động Offline**: Không gửi bất kỳ dữ liệu nào ra máy chủ bên ngoài.
- **Không thay đổi nhị phân hệ thống**: Không can thiệp mã nguồn nhị phân hay file cài đặt gốc của Antigravity.
- **Cấu hình độc lập**: Toàn bộ cấu hình người dùng được lưu trữ cục bộ tại thư mục `user-data/` (đã được cấu hình loại trừ qua `.gitignore`).
- **Dễ dàng gỡ bỏ**: Chỉ cần đóng ứng dụng hoặc chạy `node inject.mjs --reset`, mọi thứ sẽ quay về trạng thái mặc định ban đầu của Antigravity.
