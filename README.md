# JupyterLab Nord Theme

An arctic, north-bluish clean and elegant JupyterLab theme based on the [Nord color palette](https://www.nordtheme.com/).

![JupyterLab version](https://img.shields.io/badge/JupyterLab-4.0+-blue.svg)
![PyPI](https://img.shields.io/pypi/v/jupyterlab-nord-theme)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Features

- **Nord Color Palette**: Authentic implementation of the 16-color Nord palette
- **Dark Theme**: Designed for comfortable coding in low-light environments  
- **Complete Coverage**: Themes all JupyterLab components including notebooks, file browser, terminals, and settings
- **Syntax Highlighting**: Beautiful Nord-based syntax highlighting for code cells
- **Perfect Compatibility**: Built using JupyterLab 4.0+ CSS variable system for full compatibility
- **Font Scaling Support**: Respects JupyterLab's font scaling settings
- **Layout Preservation**: Uses exact default theme layout and sizing, only changes colors

## Color Palette

This theme uses the official Nord color palette:

### Polar Night (Dark Backgrounds)
- `nord0` - `#2e3440` - Darkest background
- `nord1` - `#3b4252` - Dark background  
- `nord2` - `#434c5e` - Medium background
- `nord3` - `#4c566a` - Light background

### Snow Storm (Light Text)
- `nord4` - `#d8dee9` - Dark foreground
- `nord5` - `#e5e9f0` - Medium foreground
- `nord6` - `#eceff4` - Light foreground

### Frost (Blue Accents)
- `nord7` - `#8fbcbb` - Calm accent
- `nord8` - `#88c0d0` - Bright accent
- `nord9` - `#81a1c1` - Medium accent
- `nord10` - `#5e81ac` - Dark accent

### Aurora (Vibrant Colors)
- `nord11` - `#bf616a` - Red (errors)
- `nord12` - `#d08770` - Orange
- `nord13` - `#ebcb8b` - Yellow (warnings)
- `nord14` - `#a3be8c` - Green (success)
- `nord15` - `#b48ead` - Purple

## Installation

### From PyPI (Recommended)

```bash
pip install jupyterlab-nord-theme
```

### From Source

```bash
# Clone the repository
git clone https://github.com/carlyou/jupyterlab-nord-theme.git
cd jupyterlab-nord-theme

# Install in development mode
pip install -e .
```

## Usage

1. Install the extension using one of the methods above
2. Launch JupyterLab: `jupyter lab`
3. Go to **Settings** → **Theme** → **Nord Theme**
4. The theme will be applied immediately

## Development

### Requirements

- Python >= 3.8
- Node.js >= 16
- JupyterLab >= 4.0

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/carlyou/jupyterlab-nord-theme.git
cd jupyterlab-nord-theme

# Install Python dependencies
pip install -e .

# Install Node.js dependencies
npm install

# Build in development mode
npm run build

# Install for development
jupyter labextension develop . --overwrite
```

### Making Changes

1. Edit CSS variables in `style/index.css`
2. Modify TypeScript registration in `src/index.ts` 
3. Rebuild: `npm run build`
4. Refresh JupyterLab to see changes

### Project Structure

```
jupyterlab-nord-theme/
├── src/                    # TypeScript source code
│   └── index.ts           # Extension registration
├── style/                 # CSS theme files
│   ├── index.css         # Main theme CSS with Nord variables
│   └── index.js          # Style module entry point
├── jupyterlab_nord_theme/ # Python package
│   ├── __init__.py       # Extension metadata
│   └── labextension/     # Built extension files
├── package.json          # Node.js configuration
├── pyproject.toml        # Python packaging configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Building for Production

```bash
# Clean previous builds
npm run clean:all

# Build production version
npm run build:prod
```

## Publishing

### PyPI

```bash
# Build package
pip install build
python -m build

# Upload to PyPI
pip install twine
twine upload dist/*
```

### npm (for developers)

```bash
npm publish
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines

- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Add appropriate commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nord Theme](https://www.nordtheme.com/) by Arctic Ice Studio for the beautiful color palette
- [JupyterLab](https://github.com/jupyterlab/jupyterlab) team for the excellent extension system
- The JupyterLab community for inspiration and best practices

## Related Projects

- [Nord VSCode](https://github.com/arcticicestudio/nord-visual-studio-code)
- [Nord Vim](https://github.com/arcticicestudio/nord-vim)
- [Nord Terminal](https://github.com/arcticicestudio/nord-terminal-app)