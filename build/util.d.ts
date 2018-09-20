/**
 * Returns a 4 bit binary string from a hexadecimal digit
 * @param hex Single hexadecimal digit
 */
export declare function hexToBin(hex: string): string;
/**
 * Returns a hexadecimal digit from a 4 bit binary string
 * @param bin 4 bit binary string
 */
export declare function binToHex(bin: string): string;
/**
 * Performs XOR operation on two arrays of binary bits
 * @param a First input
 * @param b Second input
 */
export declare function XOR(a: string[], b: string[]): string[];
/**
 * Splits an array into an array of smaller arrays
 * @param input Input array
 * @param chunkSize Desired size of chunk
 */
export declare function chunk(input: string[], chunkSize: number): string[][];
/**
 * Converts array of binary characters to hex string. Only used for debugging
 * @param input Array of binary characters
 */
export declare function binArrToHex(input: string[]): string;
/**
 * Prints contents only if verbose flag is true. Only used for debugging
 * @param verbose Verbose flag
 * @param content Content to print to console
 */
export declare function verboseLog(verbose: boolean, content: string): void;
