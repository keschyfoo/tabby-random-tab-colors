# tabby-random-tab-colors

A [Tabby](https://tabby.sh) plugin that automatically assigns a random color from a curated vibrant palette to every newly opened tab.

- Terminal, SSH, serial, web, and settings tabs all get a random color on open.
- Tabs that already have a color (set by a profile, restored from a saved session, or picked manually via the right-click menu) keep their existing color.
- A toggle in `Settings → Plugins → Random tab colors` lets you disable the behavior without uninstalling.

## Install (user)

Either install via Tabby's Plugin Manager (search for `tabby-random-tab-colors` on npm) or build from source — see below.

## Build from source

```bash
yarn install
yarn build
```

This produces `dist/index.js` and `typings/index.d.ts`.

## Development

The plugin lives outside the Tabby repo, so it references Tabby via relative paths. Start Tabby with the `TABBY_PLUGINS` environment variable pointing at the plugin directory:

```bash
# shell 1 — rebuild on file changes
cd /Users/kevin/Projects/tabby-random-tab-colors
yarn watch

# shell 2 — run Tabby with the plugin loaded
cd /Users/kevin/Projects/tabby
TABBY_DEV=1 TABBY_PLUGINS=/Users/kevin/Projects/tabby-random-tab-colors yarn start
```

Restart Tabby after each rebuild (there is no live reload for external plugins).

## Files

- `src/index.ts` — Angular `NgModule` entry
- `src/randomTabColor.service.ts` — subscribes to `AppService.tabOpened$` and assigns colors
- `src/palette.ts` — the curated vibrant palette
- `src/config.ts` — `ConfigProvider` adding the `randomTabColors.enabled` toggle
- `webpack.config.mjs` — wraps Tabby's `webpack.plugin.config.mjs`, with module resolution pointing at the sibling checkout

## License

MIT
