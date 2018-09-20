"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a 4 bit binary string from a hexadecimal digit
 * @param hex Single hexadecimal digit
 */
function hexToBin(hex) {
    if (hex.length !== 1) {
        throw new TypeError('Parameter should be single character');
    }
    return parseInt(hex, 16).toString(2).padStart(4, '0');
}
exports.hexToBin = hexToBin;
/**
 * Returns a hexadecimal digit from a 4 bit binary string
 * @param bin 4 bit binary string
 */
function binToHex(bin) {
    if (bin.length !== 4) {
        throw new TypeError('Input should be 4 bit binary string');
    }
    return parseInt(bin, 2).toString(16);
}
exports.binToHex = binToHex;
/**
 * Performs XOR operation on two arrays of binary bits
 * @param a First input
 * @param b Second input
 */
function XOR(a, b) {
    if (a.length !== b.length) {
        throw new TypeError('Input arrays must be same lenght');
    }
    let output = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            output.push('0');
        }
        else {
            output.push('1');
        }
    }
    return output;
}
exports.XOR = XOR;
/**
 * Splits an array into an array of smaller arrays
 * @param input Input array
 * @param chunkSize Desired size of chunk
 */
function chunk(input, chunkSize) {
    let remaining = input.slice();
    let output = [];
    while (remaining.length > chunkSize) {
        output.push(remaining.splice(0, chunkSize));
    }
    output.push(remaining);
    return output;
}
exports.chunk = chunk;
/**
 * Converts array of binary characters to hex string. Only used for debugging
 * @param input Array of binary characters
 */
function binArrToHex(input) {
    let chunks = chunk(input, 4);
    return chunks.map(chunk => {
        return binToHex(chunk.join(''));
    }).join('');
}
exports.binArrToHex = binArrToHex;
/**
 * Prints contents only if verbose flag is true. Only used for debugging
 * @param verbose Verbose flag
 * @param content Content to print to console
 */
function verboseLog(verbose, content) {
    if (verbose) {
        console.log(content);
    }
}
exports.verboseLog = verboseLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDaEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQixNQUFNLElBQUksU0FBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUxELDRCQUtDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDaEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQixNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFORCw0QkFNQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixHQUFHLENBQUMsQ0FBVyxFQUFFLENBQVc7SUFDeEMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDdkIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFoQkQsa0JBZ0JDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLEtBQUssQ0FBQyxLQUFlLEVBQUUsU0FBaUI7SUFDcEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVoQixPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUMvQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFdkIsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVhELHNCQVdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLEtBQWU7SUFDdkMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNmLENBQUM7QUFORCxrQ0FNQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQUMsT0FBZ0IsRUFBRSxPQUFlO0lBQ3hELElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4QjtBQUNMLENBQUM7QUFKRCxnQ0FJQyJ9