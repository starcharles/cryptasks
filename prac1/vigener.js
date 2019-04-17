const alphabetToInt = (char) => {
    return char.charCodeAt(0) - 64;
};

const intToAlphabet = (integer) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[integer - 1];
};

const wordToIntArray = (word) => {
    const arr = [];
    for (let i = 0; i < word.length; i++) {
        const num = alphabetToInt(word[i]);
        arr.push(num);
    }
    return arr;
};

const intArrayToWord = (intArr) => {
    let s = '';
    for (let i = 0; i < intArr.length; i++) {
        s += intToAlphabet(intArr[i]);
    }
    return s;
};
const add = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        throw new Error('array length and plain text length is different!!!');
    }
    const arr = [];
    for (let i = 0; i < arr1.length; ++i) {
        arr[i] = (arr1[i] + arr2[i]) % 26;
    }

    return arr;
};

const decryptVigener = (cipher, key) => {

    const decrypted = cipher;

    for (let i = 0; i < cipher.length; ++i) {
        decrypted[i] += 26 - key[i];
        decrypted[i] %= 26;
    }

    return decrypted;
};


const add26 = (arr) => {

    for (let i = 0; i < arr.length; ++i) {
        arr[i] += 26;
    }

    return arr;
};
const key = 'XMHJO';
// const plainText = 'ABCDE';
const plainText = 'HELLO';
console.log('----plain text--------');
console.log(plainText);
console.log('----key--------');
console.log(key);

const plainArr = wordToIntArray(plainText);
const keyArr = wordToIntArray(key);
// console.log(plainArr);
// console.log(keyArr);

const added = add(plainArr, keyArr);
const cipher = intArrayToWord(added);
console.log('-----cipher----------');
console.log(cipher);

const cipherArr = wordToIntArray(cipher);
const decryptedInt = decryptVigener(cipherArr, keyArr);

// console.log(decryptedInt);
const plain2 = intArrayToWord(decryptedInt);
console.log('------decrypted--------');
console.log(plain2);

