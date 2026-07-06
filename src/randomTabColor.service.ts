import { Injectable } from '@angular/core'
import { AppService, BaseTabComponent, ConfigService } from 'tabby-core'
import { PASTEL_COLORS } from './palette'

const DEFAULT_MIN_HUE_DELTA = 25
const RECENT_HISTORY = 2

@Injectable()
export class RandomTabColorService {
    private previousHues: number[] = []

    constructor (private app: AppService, private config: ConfigService) {
        this.app.tabOpened$.subscribe((tab: BaseTabComponent) => {
            const enabled = this.config?.store?.randomTabColors?.enabled
            if (enabled === false) {
                return
            }
            if (tab.color != null) {
                return
            }
            tab.color = this.pickColor()
        })
    }

    private pickColor (): string {
        const minDelta = this.config?.store?.randomTabColors?.minHueDelta ?? DEFAULT_MIN_HUE_DELTA
        const valid = minDelta > 0
            ? PASTEL_COLORS.filter(c =>
                this.previousHues.every(prev => hueDistance(c.hue, prev) >= minDelta),
            )
            : PASTEL_COLORS
        const pool = valid.length > 0 ? valid : PASTEL_COLORS
        const pick = pool[Math.floor(Math.random() * pool.length)]

        this.previousHues.push(pick.hue)
        if (this.previousHues.length > RECENT_HISTORY) {
            this.previousHues.shift()
        }

        return pick.color
    }
}

function hueDistance (a: number, b: number): number {
    const d = Math.abs(a - b)
    return Math.min(d, 360 - d)
}
