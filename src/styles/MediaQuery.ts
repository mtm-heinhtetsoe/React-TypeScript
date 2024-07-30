export const breakpoints = [320, 960, 1024]

export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`)
// 一番小さいSP(〜320px)
export const xsp = 0
// 通常のSPサイズ(321px〜767px)
export const sp = 1
// 通常の小さいPCサイズ(768px〜1024px)
export const xpc = 2