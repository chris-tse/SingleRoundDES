import * as util from './util';
import mangle from './mangle';

// Get input and key from command line args
const input: string = process.argv[2];
const key: string = process.argv[3];

if (input.length !== 16 || key.length !== 12) {
    console.error('Input must be 64 bits (16 hex characters) and key must be 48 bits (12 hex characters)');
    process.exit(1)
} 

export let verbose = false;
if (process.argv.length >= 5 && process.argv[4] === '-v') {
    verbose = true;
}

util.verboseLog(verbose, 'Input: ' + input);
util.verboseLog(verbose, 'Key: ' + key);
util.verboseLog(verbose, '');

// Convert input and key to string of binary '0' and '1'
const binaryInput: Array<string> = input.split('').map(util.hexToBin).join('').split('');
const roundKey: Array<string> = key.split('').map(util.hexToBin).join('').split('');

util.verboseLog(verbose, 'Binary input: ' + binaryInput.join(''));
util.verboseLog(verbose, 'Round key: ' + roundKey.join(''));
util.verboseLog(verbose, '');


//Construction of output
// Get halves of input
const halfLength = Math.ceil(binaryInput.length / 2);
const leftInput = binaryInput.slice(0, halfLength);
const rightInput = binaryInput.slice(halfLength, binaryInput.length);

// Left output half is copy of right input half
const leftOutput = rightInput.slice();

// Right output half is mangled right input half then XOR with left input half
const mangledHalf = mangle(rightInput, roundKey);
const rightOutput = util.XOR(mangledHalf, leftInput);

// Combine output halves
const output = leftOutput.concat(rightOutput);

const outputChunks = util.chunk(output, 4);

const final = outputChunks.map(chunk => {
    return util.binToHex(chunk.join(''));
}).join('');
util.verboseLog(verbose, 'Output:');
console.log(final);