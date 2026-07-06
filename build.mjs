import * as esbuild from 'esbuild'
import * as url from 'url'
import { execSync } from 'child_process'
import { rmSync } from 'fs'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const watch = process.argv.includes('--watch')

function compile () {
    execSync('node_modules/.bin/tsc -p tsconfig.build.json', {
        stdio: 'inherit',
        cwd: __dirname,
    })
}

/** @type {esbuild.BuildOptions} */
const bundle = {
    entryPoints: ['build/index.js'],
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
    compile()
    const ctx = await esbuild.context(bundle)
    await ctx.watch()
    console.log('Watching for changes...')
} else {
    rmSync('build', { recursive: true, force: true })
    compile()
    await esbuild.build(bundle)
}
