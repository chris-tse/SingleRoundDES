# Single Round DES

Programming Assignment 1 for CS 4173  
Christopher Tse

This program performs a single round of DES encryption, excluding the initial and final permutations and with the 48 bit key already given.

Code documentation can be viewed at `doc/index.html`.

## Usage
**Required**: Node.js v8.11+

Optional: Install required tools and build the project
```
yarn install
npm run build
```

Go into `build/` folder
```
cd build
```

Run the program
```
node main.js <input> <key>
```

Optionally add verbose flag to see intermediary output
```
node main.js <input> <key> -v
```

## Examples
```
$ node main.js 87a8d09c67aeeeaa ef48f89bff66
67aeeeaa931f12a1

$ node main.js 87a8d09c67aeeeaa ef48f89bff66 -v
Input: 87a8d09c67aeeeaa
Key: ef48f89bff66

Binary input: 1000011110101000110100001001110001100111101011101110111010101010
Round key: 111011110100100011111000100110111111111101100110

After expansion: 30fd5d75d554
After XOR: dfb5a5ee2a32
After SBox: e5704ec6
After perm: 14b7c23d

Output:
67aeeeaa931f12a1
```
