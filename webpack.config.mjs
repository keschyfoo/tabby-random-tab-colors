import * as path from 'path'
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

import config from '../tabby/webpack.plugin.config.mjs'

const tabbyDir = path.resolve(__dirname, '..', 'tabby')

export default () => config({
    name: 'random-tab-colors',
    dirname: __dirname,
    modules: [
        path.join(__dirname, 'node_modules'),
        path.join(tabbyDir, 'app', 'node_modules'),
        path.join(tabbyDir, 'node_modules'),
    ],
})
