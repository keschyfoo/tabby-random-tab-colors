import { ConfigProvider } from 'tabby-core'

export class RandomTabColorConfigProvider extends ConfigProvider {
    defaults = {
        randomTabColors: {
            enabled: true,
            minHueDelta: 25,
        },
    }
    platformDefaults = {}
}
