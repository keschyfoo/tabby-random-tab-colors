# tabby-random-tab-colors

[![Build status](https://github.com/keschyfoo/tabby-random-tab-colors/actions/workflows/build.yml/badge.svg)](https://github.com/keschyfoo/tabby-random-tab-colors/actions/workflows/build.yml)

A [Tabby](https://tabby.sh) plugin that automatically assigns a random color from a curated vibrant palette to every newly opened tab.

- Terminal, SSH, serial, web, and settings tabs all get a random color on open.
- Tabs that already have a color (set by a profile, restored from a saved session, or picked manually via the right-click menu) keep their existing color.
- Consecutive tabs avoid perceptually similar hues (configurable).

## Requirements

For building from source: Node.js 22+ and Yarn 1.x.

## Install

### From the Plugin Manager

Open Tabby → **Settings → Plugins → Catalog** → search for `tabby-random-tab-colors` → **Install**. Tabby handles updates automatically.

### From a local build

1. Clone this repository and build it:
   ```bash
   git clone https://github.com/keschyfoo/tabby-random-tab-colors.git
   cd tabby-random-tab-colors
   yarn install
   yarn build
   ```
2. In Tabby, open **Settings → Plugins → Open Plugins Directory**. A file manager window opens at the correct location for your install. Copy the path from the file manager's address bar.
3. Create a `node_modules` subfolder inside it (if it doesn't exist) and symlink this repo into it. Paste the path you copied into the command below:
   ```bash
   TABBY_PLUGINS_DIR="/path/you/copied/in/step/2"
   mkdir -p "$TABBY_PLUGINS_DIR/node_modules"
   ln -s "$(pwd)" "$TABBY_PLUGINS_DIR/node_modules/tabby-random-tab-colors"
   ```
4. Quit and reopen Tabby.

To uninstall, remove the symlink and restart Tabby:
```bash
rm "$TABBY_PLUGINS_DIR/node_modules/tabby-random-tab-colors"
```

## Configuration

Add to Tabby's user config (open from **Settings → Config file**):

- `randomTabColors.enabled` (boolean, default `true`) — toggle the plugin without uninstalling.
- `randomTabColors.minHueDelta` (number 0–180, default `25`) — minimum hue distance, in degrees, between two consecutive tabs. Set to `0` to disable the check.

## Development

```bash
yarn watch      # incremental rebuild on file changes
```

After each rebuild, quit and reopen Tabby to pick up the new bundle (Tabby does not live-reload external plugins).

## Disclaimer

This project was developed with AI assistance using [opencode](https://opencode.ai) and the MiniMax-M3 model. All source code, configuration, and documentation in this repository were produced through AI-assisted development and reviewed by the author.

## License

MIT