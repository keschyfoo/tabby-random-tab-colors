export interface PaletteEntry {
    color: string
    hue: number
}

function hexToHue (hex: string): number {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    if (d === 0) {
        return 0
    }
    let hue: number
    if (max === r) hue = ((g - b) / d) % 6
    else if (max === g) hue = (b - r) / d + 2
    else hue = (r - g) / d + 4
    hue *= 60
    if (hue < 0) hue += 360
    return hue
}

const RAW_COLORS = [
    '#ff6b6b',
    '#ff8c69',
    '#ffa940',
    '#ffc75f',
    '#ffd93d',
    '#f9f871',
    '#a3cb38',
    '#6bcf7f',
    '#00c9a7',
    '#4ecdc4',
    '#5eaaa8',
    '#3e92cc',
    '#4d96ff',
    '#786fa6',
    '#845ec2',
    '#c34a36',
    '#ff5e78',
    '#ff6fb5',
    '#ee6c4d',
    '#f95738',
]

export const PASTEL_COLORS: PaletteEntry[] = RAW_COLORS.map(c => ({ color: c, hue: hexToHue(c) }))
