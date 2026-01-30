import { defineConfig } from 'vitepress'
import { getIcon } from './utils/icons'

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
          { text: `${getIcon('BookOpen', { class: 'v-icon' })} Pengenalan`, link: '/docs/intro' },
          { text: `${getIcon('Laptop', { class: 'v-icon' })} Setup Guides`, link: '/docs/setup-guides' }
        ]
      },
      {
        text: 'macOS Setup',
        collapsed: false,
        items: [
          { text: `${getIcon('Settings', { class: 'v-icon' })} System Configuration`, link: '/docs/macos-setup/system' },
          { text: `${getIcon('Keyboard', { class: 'v-icon' })} Terminal Setup`, link: '/docs/macos-setup/terminal' },
          { text: `${getIcon('Package', { class: 'v-icon' })} Applications Setup`, link: '/docs/macos-setup/applications' }

        ]
      },
      {
        text: 'Windows Setup',
        collapsed: false,
        items: [
          { text: `${getIcon('Keyboard', { class: 'v-icon' })} Terminal Setup`, link: '/docs/windows-setup/' },
          { text: `${getIcon('Package', { class: 'v-icon' })} Applications Setup`, link: '/docs/windows-setup/applications' },
          { text: `${getIcon('Settings', { class: 'v-icon' })} System Configuration`, link: '/docs/windows-setup/system' }
        ]
      },
      {
        text: 'Linux Setup',
        collapsed: false,
        items: [
          { text: `${getIcon('Keyboard', { class: 'v-icon' })} Terminal Setup`, link: '/docs/linux-setup/' },
          { text: `${getIcon('Package', { class: 'v-icon' })} Applications Setup`, link: '/docs/linux-setup/applications' },
          { text: `${getIcon('Settings', { class: 'v-icon' })} System Configuration`, link: '/docs/linux-setup/system' }
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: `${getIcon('Server', { class: 'v-icon' })} Setup Server`, link: '/docs/development/server' },
          { text: `${getIcon('FileCode', { class: 'v-icon' })} Snippet Python`, link: '/docs/development/python' }
        ]
      },
      {
        text: 'Utilitas Online',
        collapsed: false,
        items: [
          { text: `${getIcon('Search', { class: 'v-icon' })} Regex Tester`, link: '/docs/utilitas/regex' },
          { text: `${getIcon('ClipboardList', { class: 'v-icon' })} JSON Formatter`, link: '/docs/utilitas/json' },
          { text: `${getIcon('Lock', { class: 'v-icon' })} Password Generator`, link: '/docs/utilitas/password' }
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