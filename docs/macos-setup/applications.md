# 📦 Applications Setup

Panduan instalasi aplikasi development, produktivitas, dan utilitas yang essential untuk development di macOS.

## 1. Development Tools

Essential tools untuk programming dan development:

```bash
brew install git
brew install node
brew install python3
brew install --cask visual-studio-code
brew install --cask sublime-text
```

## 2. Productivity Applications

Aplikasi untuk meningkatkan produktivitas:

```bash
brew install --cask google-chrome
brew install --cask firefox
brew install --cask slack
brew install --cask notion
brew install --cask figma
```

## 3. Version Management

Tools untuk manage berbagai versi:

```bash
# Node Version Manager
brew install nvm

# Python Version Management
brew install pyenv

# Ruby Version Manager
brew install rbenv
```

## 4. Database Tools

```bash
brew install --cask datagrip
brew install --cask mongodb-compass
brew install mysql@8.0
brew install postgresql
```

## 5. Container & DevOps

```bash
brew install docker
brew install docker-compose
brew install kubernetes-cli
```

## 6. Configure Git

Setup Git global configuration:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "nano"
git config --global core.pager "bat"
```

### Git Configuration File

Edit `~/.gitconfig` untuk custom settings:

```bash
[user]
  name = Your Name
  email = your.email@example.com
[core]
  editor = nano
  pager = bat
[init]
  defaultBranch = main
[pull]
  rebase = true
```

## 7. Setup SSH Keys

Generate SSH key untuk GitHub/GitLab:

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Display public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy dan paste ke GitHub/GitLab settings.

### Test SSH Connection

```bash
ssh -T git@github.com
```

## 8. Code Editors & IDEs

Pilih sesuai preferensi:

```bash
# IDEs
brew install --cask jetbrains-toolbox
brew install --cask intellij-idea
brew install --cask webstorm

# Lightweight Editors
brew install --cask sublime-text
brew install --cask neovim
```

## 9. Additional Utilities

```bash
brew install --cask zoom
brew install --cask discord
brew install --cask spotify
brew install --cask vlc
brew install --cask 7zip
```

## Checklist Applications Setup

- [ ] Development tools installed (Git, Node, Python)
- [ ] Code editor/IDE installed
- [ ] Productivity apps installed
- [ ] Git configured with user info
- [ ] SSH keys generated & added to GitHub/GitLab
- [ ] Version managers installed (NVM, Pyenv, Rbenv)
- [ ] Database tools installed
- [ ] Docker installed

Selamat! Development environment Anda sudah siap dengan semua tools yang diperlukan!
