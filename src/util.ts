export const hexToBin = (hex: string) => {
    if (hex.length !== 1) {
        throw new TypeError('Parameter should be single character');
    }
    return parseInt(hex, 16).toString(2).padStart(4, '0');
}