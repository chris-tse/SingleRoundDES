export function initialPermutation(permOrder: number[], input: string[]) {
    if (permOrder.length !== input.length) {
        throw new TypeError('Input should be same length as perm order array');
    }
    
    let output = new Array(permOrder.length);
    
    permOrder.forEach((pos, index) => {
        output[index] = input[pos - 1];
    });
    
    return output;
}

export function keyInitialPermutation(permOrder: number[], key: string[]) {        
    if (key.length - 8 !== permOrder.length) {
        throw new TypeError('Key should be same length as perm order array');
    }
    
    let output = new Array(permOrder.length);
    permOrder.forEach((pos, index) => {
        output[index] = key[pos - 1];
    });
    
    return output;
}