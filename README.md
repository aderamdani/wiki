# Wiki Ade Ramdani

Knowledge Base & Personal Wiki - Dokumentasi, Panduan, dan Tools Utility untuk Development

![Website](https://img.shields.io/website?url=https%3A%2F%2Fwiki.aderamdani.web.id&up_message=online&down_message=offline)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Tentang Project

Wiki Ade Ramdani adalah knowledge base pribadi yang berisi panduan setup development environment, dokumentasi teknis, dan tools utility online untuk memudahkan proses development di berbagai platform.

## 🎯 Konten

### Setup Guides
- **macOS Setup** - Panduan lengkap setup environment di macOS
  - Terminal Setup (iTerm2, Oh My Posh, Zsh utilities)
  - Applications Setup (Git, Node.js, Python, VSCode, Docker)
  - System Configuration (Finder, Dock, Keyboard, Security)
  
- **Windows Setup** - Panduan untuk Windows (Coming Soon)
- **Linux Setup** - Panduan untuk Linux (Coming Soon)

### Development
- Setup Server
- Python Snippets

### Utilitas Online
- 🔍 Regex Tester
- 📋 JSON Formatter
- 🔐 Password Generator

## 🚀 Quick Start

### Prasyarat
- Node.js >= 16
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/aderamdani/wiki.git
cd wiki

# Install dependencies
npm install

# Run development server
npm run docs:dev
```

Server akan berjalan di `http://localhost:5173`

### Build

```bash
# Build untuk production
npm run docs:build

# Preview build result
npm run docs:preview
```

Output akan tersimpan di folder `.vitepress/dist`

## 🌐 Deployment

Project ini menggunakan **VitePress** dan di-deploy di **Vercel**.

### Deploy di Vercel

1. Push repository ke GitHub
2. Buat project baru di [Vercel](https://vercel.com)
3. Import repository GitHub
4. Vercel akan auto-detect `vercel.json` configuration
5. Deploy selesai!

**Link Live:** https://wiki.aderamdani.web.id

## 🛠️ Tech Stack

- **VitePress** v1.6.4 - Static site generator berbasis Vue.js
- **Vue.js** 3.5.27 - Progressive JavaScript framework
- **Markdown** - Format penulisan konten
- **TypeScript** - Custom theme configuration
- **CSS** - Custom styling untuk features section

## 📁 Struktur Folder

```
wiki/
├── .vitepress/
│   ├── config.mts          # VitePress configuration
│   ├── theme/
│   │   ├── index.ts        # Custom theme entry point
│   │   └── custom.css      # Custom styling
│   └── dist/               # Build output
├── docs/
│   ├── intro.md
│   ├── setup-guides.md
│   ├── macos-setup/
│   │   ├── index.md
│   │   ├── applications.md
│   │   └── system.md
│   ├── windows-setup/
│   ├── linux-setup/
│   ├── development/
│   └── utilitas/
├── public/                 # Static assets (logo, favicon)
├── index.md               # Homepage
├── package.json
├── vercel.json            # Vercel deployment config
└── README.md
```

## 🎨 Custom Theme

Wiki ini menggunakan custom VitePress theme dengan styling khusus:
- Features grid layout responsif
- Hover effects dengan smooth transitions
- Drop shadow pada hero image
- Mobile-friendly design

## 📝 Cara Menambah Content

1. Buat file markdown baru di folder `docs/`
2. Update sidebar di `.vitepress/config.mts` jika perlu menambah menu
3. Run `npm run docs:dev` untuk preview
4. Commit dan push ke GitHub

Contoh membuat page baru:

```typescript
// Di config.mts sidebar
{
  text: 'Kategori Baru',
  items: [
    { text: '📄 Page Baru', link: '/docs/kategori/page-baru' }
  ]
}
```

Kemudian buat file: `docs/kategori/page-baru.md`

## 🔍 Search

Wiki dilengkapi dengan fitur search lokal yang berjalan di sisi client. Search akan mencari di semua markdown files.

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE)

## 🤝 Kontribusi

Kontribusi, issues, dan suggestions welcome! Silakan buat issue atau pull request.

## 📧 Kontak

- **Website:** https://aderamdani.web.id
- **GitHub:** https://github.com/aderamdani
- **Email:** Lihat profil GitHub

---

Made with ❤️ by [Ade Ramdani](https://github.com/aderamdani)
