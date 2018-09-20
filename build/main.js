"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const mangle_1 = __importDefault(require("./mangle"));
// Get input and key from command line args
const input = process.argv[2];
const key = process.argv[3];
if (input.length !== 16 || key.length !== 12) {
    console.error('Input must be 64 bits (16 hex characters) and key must be 48 bits (12 hex characters)');
    process.exit(1);
}
exports.verbose = false;
if (process.argv.length >= 5 && process.argv[4] === '-v') {
    exports.verbose = true;
}
util.verboseLog(exports.verbose, 'Input: ' + input);
util.verboseLog(exports.verbose, 'Key: ' + key);
util.verboseLog(exports.verbose, '');
// Convert input and key to string of binary '0' and '1'
const binaryInput = input.split('').map(util.hexToBin).join('').split('');
const roundKey = key.split('').map(util.hexToBin).join('').split('');
util.verboseLog(exports.verbose, 'Binary input: ' + binaryInput.join(''));
util.verboseLog(exports.verbose, 'Round key: ' + roundKey.join(''));
util.verboseLog(exports.verbose, '');
//Construction of output
// Get halves of input
const halfLength = Math.ceil(binaryInput.length / 2);
const leftInput = binaryInput.slice(0, halfLength);
const rightInput = binaryInput.slice(halfLength, binaryInput.length);
// Left output half is copy of right input half
const leftOutput = rightInput.slice();
// Right output half is mangled right input half then XOR with left input half
const mangledHalf = mangle_1.default(rightInput, roundKey);
const rightOutput = util.XOR(mangledHalf, leftInput);
// Combine output halves
const output = leftOutput.concat(rightOutput);
const outputChunks = util.chunk(output, 4);
const final = outputChunks.map(chunk => {
    return util.binToHex(chunk.join(''));
}).join('');
util.verboseLog(exports.verbose, 'Output:');
console.log(final);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixzREFBOEI7QUFFOUIsMkNBQTJDO0FBQzNDLE1BQU0sS0FBSyxHQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsTUFBTSxHQUFHLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUZBQXVGLENBQUMsQ0FBQztJQUN2RyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQ2xCO0FBRVUsUUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ3RELGVBQU8sR0FBRyxJQUFJLENBQUM7Q0FDbEI7QUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQU8sRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFPLEVBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTdCLHdEQUF3RDtBQUN4RCxNQUFNLFdBQVcsR0FBa0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekYsTUFBTSxRQUFRLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXBGLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBTyxFQUFFLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQU8sRUFBRSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRzdCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVyRSwrQ0FBK0M7QUFDL0MsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXRDLDhFQUE4RTtBQUM5RSxNQUFNLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUVyRCx3QkFBd0I7QUFDeEIsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU5QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUzQyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9