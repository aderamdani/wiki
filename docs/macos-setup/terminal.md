# ⌨️ Terminal Setup

Panduan lengkap setup terminal dan shell di macOS untuk development yang optimal.

## 1. Install Command Line Tools

```bash
xcode-select --install
```

## 2. Install Homebrew

Package manager esensial untuk macOS:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Tambahkan Homebrew ke PATH
```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Verify installation:

```bash
brew --version
brew doctor
```

## 3. Install iTerm2

Terminal emulator yang lebih powerful dari Terminal bawaan macOS:

```bash
brew install --cask iterm2
```

## 4. Install Oh My Posh

Prompt engine dengan customizable themes:

```bash
brew install jandedobbeleer/oh-my-posh/oh-my-posh
```

Apply changes:

```bash
source ~/.zshrc
```

## 5. Install Plugins ZSH

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 6. Essential Application

```bash
brew install fastfetch
brew install btop
brew install --cask visual-studio-code
brew install node
brew install python3
brew install pipx
pipx ensurepath
brew install jdownloader
brew install obsidian
brew install orbstack
brew install gemini-cli
```

## 7. Create Custom Aliases and Setup ~/.zshrc

Edit `~/.zshrc` dan tambahkan:

```zsh
# === Prompt & UI ===

# Inisialisasi Oh My Posh dengan tema "material"
eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/material.omp.json)"


# === Sistem & Maintenance (dijalankan sekali per sesi terminal) ===  

# Jalankan softwareupdate sekali per sesi terminal (hindari looping)

if [ -z "$SOFTWAREUPDATE_SESSION" ]; then
	
	# Flag bahwa softwareupdate sudah dijalankan di sesi ini
	export SOFTWAREUPDATE_SESSION="ran"
	
	# Menjalankan update macOS (update sistem & apps dari Apple)
	# Catatan: ini blok terminal sampai selesai.
	
	# Kalau mau di-background, pakai `softwareupdate -i -a &`
	softwareupdate -i -a

fi

# Jalankan Homebrew update & fastfetch sekali per sesi terminal

if [ -z "$FASTFETCH_SESSION" ]; then
	# Flag bahwa blok ini sudah dijalankan di sesi ini
	export FASTFETCH_SESSION="ran"
	
	# Update formula Homebrew, upgrade paket, lalu bersihkan cache
	brew update && brew upgrade && brew cleanup
	
	# Bersihkan layar lalu tampilkan info sistem dengan fastfetch
	clear && fastfetch
fi

# === Zsh Plugins ===

# Zsh Autosuggestions: memberi saran perintah berdasarkan history saat mengetik
source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# Zsh Syntax Highlighting: mewarnai sintaks perintah (error/valid) di shell
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# === PATH & Environment ===

# Tambah path Antigravity ke depan PATH (prioritas lebih tinggi)
export PATH="/Users/aderamdani/.antigravity/antigravity/bin:$PATH"

# Jadikan Python 3.12 dari Homebrew sebagai default `python3`
alias python3="/opt/homebrew/bin/python3.12"

# Jadikan pip 3.12 sebagai default `pip3`
alias pip3="/opt/homebrew/bin/pip3.12"

# Tambah ~/.local/bin ke PATH (biasanya untuk script user-level: pipx, dll)
export PATH="$PATH:/Users/aderamdani/.local/bin"

# === Aliases Utilitas ===

# List dengan exa (pengganti ls) + mode detail + human-readable + hidden
alias ll='exa -lah'

# List semua file (termasuk hidden) dengan format panjang
alias la='exa -la'

# List dengan format panjang tapi tidak sedetail `ll`
alias l='exa -l'

# Gunakan bat (cat dengan syntax highlight & paging) menggantikan cat
alias cat='bat'

# Tambahkan warna pada output grep secara default
alias grep='grep --color=auto'

# Navigasi cepat naik satu dan dua level direktori
alias ..='cd ..'
alias ...='cd ../..'

# === Shortcuts Projek ===

# Shortcut ke direktori utama projek
alias projects='cd ~/Developer'

# Shortcut ke personal wiki
alias wiki='cd ~/Developer/wiki'

# === Shortcut Development ===

# Shortcut untuk menjalankan `npm run dev`
alias dev='npm run dev'

# Shortcut untuk menjalankan `npm run build`
alias build='npm run build'
```

Apply changes:

```bash
source ~/.zshrc
```
