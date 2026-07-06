import { Injectable } from '@angular/core'
import { AppService, BaseTabComponent, ConfigService } from 'tabby-core'
import { PASTEL_COLORS } from './palette'

@Injectable()
export class RandomTabColorService {
    constructor (private app: AppService, private config: ConfigService) {
        this.app.tabOpened$.subscribe((tab: BaseTabComponent) => {
            const enabled = this.config?.store?.randomTabColors?.enabled
            if (enabled === false) {
                return
            }
            if (tab.color != null) {
                return
            }
            const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)]
            tab.color = color
        })
    }
}
