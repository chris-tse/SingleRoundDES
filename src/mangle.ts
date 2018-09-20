import * as util from './util';
import {SBoxContents, manglePermOrder} from './constants';
import {verbose} from './main';

/**
 * Mangler function for main DES loop
 * @param input Right half from input
 * @param roundKey Round key
 */
export default function mangle(input: string[], roundKey: string[]): string[] {
    if (input.length !== 32) {
        throw new TypeError('Mangler function expects 32 bit input')
    }
    
    const expandedInput = expand(input);
    util.verboseLog(verbose, 'After expansion: ' + util.binArrToHex(expandedInput));
    
    const XORInput = util.XOR(expandedInput, roundKey);
    util.verboseLog(verbose, 'After XOR: ' + util.binArrToHex(XORInput));
    
    const subbedInput = SBoxSubstitution(XORInput);
    util.verboseLog(verbose, 'After SBox: ' + util.binArrToHex(subbedInput));
    
    const output = manglePermutation(subbedInput);
    util.verboseLog(verbose, 'After perm: ' + util.binArrToHex(output));
    util.verboseLog(verbose, '');
    
    return output;
}

/**
 * Expands 32 bit input to 48 bits with repetition
 * @param input 32 bit input from right half
 */
function expand(input: string[]): string[] {
    let expanded = [];
    let remaining = input.slice();
    
    expanded.push(input[31]);
    
    while (remaining.length > 0) {
        expanded = expanded.concat(remaining.splice(0, 4));
        if (remaining.length < 1)
            break;
        expanded.push(remaining[0]);
        expanded.push(expanded[expanded.length - 2]);
    }
    
    expanded.push(input[0]);
    
    return expanded;
}

/**
 * Performs SBox substitution according to the SBoxes given in the constants
 * @param input Binary array after expansion
 */
function SBoxSubstitution(input: string[]): string[] {
    const inputChunks = util.chunk(input, 6);
    
    if (inputChunks.length !== SBoxContents.length) {
        throw new TypeError('Number of chunks not the same as SBox length')
    }
    
    let output = [];
    
    for (let i = 0; i < inputChunks.length; i++) {
        output = output.concat(substitute(inputChunks[i], SBoxContents[i]));
    }
    
    return output;
}

/**
 * Substitutes a chunk of bits for smaller chunk from specified SBox
 * @param chunk Chunk to substitute
 * @param SBox SBox to use for substitution
 */
function substitute(chunk: string[], SBox: number[][]) {
    let chunkCopy = chunk.slice();
    const row = parseInt(chunkCopy.shift() + chunkCopy.pop(), 2);
    const col = parseInt(chunkCopy.join(''), 2);
    
    let subValue = SBox[row][col];
    
    return util.hexToBin(Number(subValue).toString(16)).split('');
}

/**
 * Permutes binary array to the specified order in the constants
 * @param input Binary array after performing other steps of mangle function
 */
function manglePermutation(input: string[]): string[] {
    if (input.length !== manglePermOrder.length) {
        throw new TypeError('Input must be same order as perm length');
    }
    
    let output = new Array(manglePermOrder.length);
    
    manglePermOrder.forEach((pos, index) => {
        output[index] = input[pos - 1];
    });
    
    return output;
}