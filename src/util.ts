/**
 * Returns a 4 bit binary string from a hexadecimal digit
 * @param hex Single hexadecimal digit
 */
export function hexToBin(hex: string): string {
    if (hex.length !== 1) {
        throw new TypeError('Parameter should be single character');
    }
    return parseInt(hex, 16).toString(2).padStart(4, '0');
}

/**
 * Returns a hexadecimal digit from a 4 bit binary string
 * @param bin 4 bit binary string
 */
export function binToHex(bin: string): string {
    if (bin.length !== 4) {
        throw new TypeError('Input should be 4 bit binary string');
    }
    
    return parseInt(bin, 2).toString(16);
}

/**
 * Performs XOR operation on two arrays of binary bits
 * @param a First input
 * @param b Second input
 */
export function XOR(a: string[], b: string[]): string[] {
    if (a.length !== b.length) {
        throw new TypeError('Input arrays must be same lenght');
    }
    
    let output = [];
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            output.push('0');
        } else {
            output.push('1');
        }
    }
    
    return output;
}

/**
 * Splits an array into an array of smaller arrays
 * @param input Input array
 * @param chunkSize Desired size of chunk
 */
export function chunk(input: string[], chunkSize: number): string[][] {
    let remaining = input.slice();
    let output = [];
    
    while (remaining.length > chunkSize) {
        output.push(remaining.splice(0, chunkSize));
    }
    
    output.push(remaining);
    
    return output;
}

/**
 * Converts array of binary characters to hex string. Only used for debugging
 * @param input Array of binary characters
 */
export function binArrToHex(input: string[]): string {
    let chunks = chunk(input, 4);
    
    return chunks.map(chunk => {
        return binToHex(chunk.join(''));
    }).join('')
}

/**
 * Prints contents only if verbose flag is true. Only used for debugging
 * @param verbose Verbose flag
 * @param content Content to print to console
 */
export function verboseLog(verbose: boolean, content: string): void {
    if (verbose) {
        console.log(content);
    }
}