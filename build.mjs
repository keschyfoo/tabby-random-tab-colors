import * as esbuild from 'esbuild'

const watch = process.argv.includes('--watch')

/** @type {esbuild.BuildOptions} */
const config = {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    format: 'cjs',
    target: 'es2016',
    platform: 'node',
    sourcemap: true,
    external: [
        '@angular/*',
        '@ng-bootstrap/*',
        'rxjs',
        'ngx-toastr',
        'tabby-core',
        'tabby-terminal',
    ],
    logLevel: 'info',
}

if (watch) {
    const ctx = await esbuild.context(config)
    await ctx.watch()
    console.log('Watching for changes...')
} else {
    await esbuild.build(config)
}
