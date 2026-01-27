import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Wiki Ade Ramdani",
  description: "Knowledge Base & Personal Wiki",
  
  // Penting untuk SEO dan meta tags
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  
  // Custom theme
  theme: './.vitepress/theme',

  themeConfig: {
    // Logo di navbar (simpan file logo di folder public/)
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dokumentasi', link: '/docs/intro' },
      { text: 'Portfolio', link: 'https://aderamdani.web.id' }
    ],

    sidebar: [
      {
        text: 'Panduan Awal',
        collapsed: false,
        items: [
          { text: '📖 Pengenalan', link: '/docs/intro' },
          { text: '💻 Setup Guides', link: '/docs/setup-guides' }
        ]
      },
      {
        text: 'macOS Setup',
        collapsed: false,
        items: [
          { text: '⌨️ Terminal Setup', link: '/docs/macos-setup/' },
          { text: '📦 Applications Setup', link: '/docs/macos-setup/applications' },
          { text: '⚙️ System Configuration', link: '/docs/macos-setup/system' }
        ]
      },
      {
        text: 'Windows Setup',
        collapsed: false,
        items: [
          { text: '⌨️ Terminal Setup', link: '/docs/windows-setup/' },
          { text: '📦 Applications Setup', link: '/docs/windows-setup/applications' },
          { text: '⚙️ System Configuration', link: '/docs/windows-setup/system' }
        ]
      },
      {
        text: 'Linux Setup',
        collapsed: false,
        items: [
          { text: '⌨️ Terminal Setup', link: '/docs/linux-setup/' },
          { text: '📦 Applications Setup', link: '/docs/linux-setup/applications' },
          { text: '⚙️ System Configuration', link: '/docs/linux-setup/system' }
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: '🖥️ Setup Server', link: '/docs/development/server' },
          { text: '🐍 Snippet Python', link: '/docs/development/python' }
        ]
      },
      {
        text: 'Utilitas Online',
        collapsed: false,
        items: [
          { text: '🔍 Regex Tester', link: '/docs/utilitas/regex' },
          { text: '📋 JSON Formatter', link: '/docs/utilitas/json' },
          { text: '🔐 Password Generator', link: '/docs/utilitas/password' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aderamdani' } // Sesuaikan username
    ],

    footer: {
      message: 'Dirilis di bawah lisensi MIT.',
      copyright: 'Copyright © 2026 Ade Ramdani'
    },
    
    // Mengaktifkan fitur pencarian bawaan
    search: {
      provider: 'local'
    }
  }
})