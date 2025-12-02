export function fmt(price) {
    return '$' + price
}

export function trunc(str, len = 50) {
    return str.substring(0, len) + '...'
}

export function formatMoney(amount) {
    return '$' + amount.toFixed(2)
}

export function calc(a, b, op) {
    if (op === '+') return a + b
    if (op === '-') return a - b
    if (op === '*') return a * b
    if (op === '/') return a / b
}