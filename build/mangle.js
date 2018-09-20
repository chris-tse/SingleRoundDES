"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const constants_1 = require("./constants");
const main_1 = require("./main");
/**
 * Mangler function for main DES loop
 * @param input Right half from input
 * @param roundKey Round key
 */
function mangle(input, roundKey) {
    if (input.length !== 32) {
        throw new TypeError('Mangler function expects 32 bit input');
    }
    const expandedInput = expand(input);
    util.verboseLog(main_1.verbose, 'After expansion: ' + util.binArrToHex(expandedInput));
    const XORInput = util.XOR(expandedInput, roundKey);
    util.verboseLog(main_1.verbose, 'After XOR: ' + util.binArrToHex(XORInput));
    const subbedInput = SBoxSubstitution(XORInput);
    util.verboseLog(main_1.verbose, 'After SBox: ' + util.binArrToHex(subbedInput));
    const output = manglePermutation(subbedInput);
    util.verboseLog(main_1.verbose, 'After perm: ' + util.binArrToHex(output));
    util.verboseLog(main_1.verbose, '');
    return output;
}
exports.default = mangle;
/**
 * Expands 32 bit input to 48 bits with repetition
 * @param input 32 bit input from right half
 */
function expand(input) {
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
function SBoxSubstitution(input) {
    const inputChunks = util.chunk(input, 6);
    if (inputChunks.length !== constants_1.SBoxContents.length) {
        throw new TypeError('Number of chunks not the same as SBox length');
    }
    let output = [];
    for (let i = 0; i < inputChunks.length; i++) {
        output = output.concat(substitute(inputChunks[i], constants_1.SBoxContents[i]));
    }
    return output;
}
/**
 * Substitutes a chunk of bits for smaller chunk from specified SBox
 * @param chunk Chunk to substitute
 * @param SBox SBox to use for substitution
 */
function substitute(chunk, SBox) {
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
function manglePermutation(input) {
    if (input.length !== constants_1.manglePermOrder.length) {
        throw new TypeError('Input must be same order as perm length');
    }
    let output = new Array(constants_1.manglePermOrder.length);
    constants_1.manglePermOrder.forEach((pos, index) => {
        output[index] = input[pos - 1];
    });
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQTBEO0FBQzFELGlDQUErQjtBQUUvQjs7OztHQUlHO0FBQ0gsU0FBd0IsTUFBTSxDQUFDLEtBQWUsRUFBRSxRQUFrQjtJQUM5RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtLQUMvRDtJQUVELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQU8sRUFBRSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFaEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFPLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyRSxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQU8sRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBTyxFQUFFLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFN0Is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