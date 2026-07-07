# tabby-random-tab-colors

[![Build status](https://github.com/keschyfoo/tabby-random-tab-colors/actions/workflows/build.yml/badge.svg)](.github/workflows/build.yml)

A [Tabby](https://tabby.sh) plugin that automatically assigns a random color from a curated vibrant palette to every newly opened tab.

- Terminal, SSH, serial, web, and settings tabs all get a random color on open.
- Tabs that already have a color (set by a profile, restored from a saved session, or picked manually via the right-click menu) keep their existing color.
- Consecutive tabs avoid perceptually similar hues (configurable via `randomTabColors.minHueDelta`).
- A toggle in `Settings → Plugins → Random tab colors` lets you disable the behavior without uninstalling.

## Install (user)

Either install via Tabby's Plugin Manager (search for `tabby-random-tab-colors` on npm) or build from source — see below.

## Build from source

```bash
yarn install
yarn build
```

Produces `dist/index.js` (one CJS bundle) and `typings/*.d.ts` (TypeScript declarations). Two-step build:
1. `tsc -p tsconfig.build.json` compiles `src/` → `build/`, emitting full decorator metadata that Angular's JIT runtime needs (`__metadata("design:paramtypes", ...)`)
2. `esbuild` bundles `build/index.js` → `dist/index.js`, with `@angular/*`, `rxjs`, `tabby-*`, etc. externalized for the host app to provide

## Install (local development build)

```bash
# build, then symlink into Tabby's user plugins directory
yarn build
mkdir -p "$HOME/Library/Application Support/tabby/plugins/node_modules"
ln -s "$(pwd)" "$HOME/Library/Application Support/tabby/plugins/node_modules/tabby-random-tab-colors"
```

Restart Tabby. To uninstall, remove the symlink.

## Development

For iteration, run `yarn watch` in the plugin directory and rebuild via `yarn build` after changes — then restart Tabby to pick up the new bundle (no live reload for external plugins).

## Files

- `src/index.ts` — Angular `NgModule` entry
- `src/randomTabColor.service.ts` — subscribes to `AppService.tabOpened$` and assigns colors
- `src/palette.ts` — the curated vibrant palette
- `src/config.ts` — `ConfigProvider` adding the `randomTabColors.enabled` toggle
- `webpack.config.mjs` — wraps Tabby's `webpack.plugin.config.mjs`, with module resolution pointing at the sibling checkout

## License

MIT
