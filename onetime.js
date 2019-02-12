const fromAsciiToBuf = (str) => {
    const length = str.length;
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        const hex = str.charCodeAt(i).toString(16);
        const buf = Buffer.from(hex, "hex");
        arr.push(buf);
    }
    return Buffer.concat(arr, length);
};

const xor = (buf1, buf2) => {
    if (buf1.length !== buf2.length) {
        throw new Error('key length and plain text length is different!!!');
    }
    const buffer = Buffer.alloc(buf1.length);

    for (let i = 0; i < buf1.length; ++i) {
        buffer[i] = buf1[i] ^ buf2[i];
    }

    return buffer;
};

const key = 'Wiki';
const plainText = 'ring';

const keyBuf = fromAsciiToBuf(key);
const plainBuf = fromAsciiToBuf(plainText);

console.log(`key: ${keyBuf.toString("ascii")}`);
console.log(`plain text: ${plainBuf.toString("ascii")}`);

const cipher = xor(keyBuf, plainBuf);
console.log(`Cipher in hex:  0x${cipher.toString("hex")}`);
const decrypt = xor(keyBuf, cipher);
console.log(`decrypted plain text: ${decrypt.toString("ascii")}`);
