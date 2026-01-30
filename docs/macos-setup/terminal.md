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

### Install Nerd Fonts

```bash
brew tap homebrew/cask-fonts
brew install --cask font-meslo-lg-nerd-font
brew install --cask font-fira-code
```

Configure iTerm2:
- Preferences → Profiles → Text → Font: MesloLGS NF
- Preferences → Profiles → Colors → Pilih color scheme

## 4. Install & Configure Oh My Posh

Prompt engine dengan customizable themes:

```bash
brew install jandedobbeleer/oh-my-posh/oh-my-posh
```

Edit `~/.zshrc`:

```bash
nano ~/.zshrc
```

Tambahkan di akhir:

```bash
eval "$(oh-my-posh init zsh --config ~/AppData/Local/oh-my-posh/themes/powerlevel10k_rainbow.omp.json)"
```

Apply changes:

```bash
source ~/.zshrc
```

## 5. Install Oh My Zsh (Optional)

Framework untuk manage Zsh configuration:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Setup Plugins

Edit `~/.zshrc`:

```bash
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  npm
)
```

Install plugins:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

source ~/.zshrc
```

## 6. Essential Terminal Utilities

```bash
brew install exa        # ls improvement
brew install bat        # cat alternative
brew install tree       # tree command
brew install ripgrep    # search tool
brew install jq         # JSON processor
brew install httpie     # HTTP client
```

## 7. Create Custom Aliases

Edit `~/.zshrc` dan tambahkan:

```bash
alias ll='exa -lah'
alias la='exa -la'
alias l='exa -l'
alias cat='bat'
alias grep='grep --color=auto'
alias ..='cd ..'
alias ...='cd ../..'

# Project shortcuts
alias projects='cd ~/Developer'
alias wiki='cd ~/Developer/wiki'

# Development
alias dev='npm run dev'
alias build='npm run build'
```

Apply changes:

```bash
source ~/.zshrc
```
