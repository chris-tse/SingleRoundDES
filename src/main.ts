import * as util from './util';
import {inputPermOrder, keyInitialPermOrder} from './constants';
import {initialPermutation, keyInitialPermutation} from './permutations';

const input: string = process.argv[2];
const key: string = process.argv[3];

const binaryInput = input.split('').map(util.hexToBin).join('').split('');
const keyBinary = key.split('').map(util.hexToBin).join('').split('');

const permedInput = initialPermutation(inputPermOrder, binaryInput);
const permedKey = keyInitialPermutation(keyInitialPermOrder, keyBinary);

console.log(permedInput, permedKey);