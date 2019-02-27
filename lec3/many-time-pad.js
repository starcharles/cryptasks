const msgs = require("./msgs");

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
    let buflen;
    if (buf1.length <= buf2.length) {
        buflen = buf1.length;
    }
    if (buf1.length > buf2.length) {
        buflen = buf2.length;
    }
    const buffer = Buffer.alloc(buflen);

    for (let i = 0; i < buflen; ++i) {
        buffer[i] = buf1[i] ^ buf2[i];
    }

    return buffer;
};

const target = msgs[10];
const targetBuf = Buffer.from(target, "hex");
const map = new Map();
for (let i = 1; i < 10; i++) {
    const msg = msgs[i];
    const buf1 = Buffer.from(msg, "hex");

    const arr = xor(buf1, targetBuf);

    for (const pair of arr.entries()) {
        const res = pair[1].toString(16).match(/4\w|6\w/);
        if (res) {
            // sort pair
            console.log(pair[1].toString(16));
            console.log(pair);
            console.log(String.fromCharCode(pair[1]));
            if(!map.has(pair[0])){
                map.set(pair[0],String.fromCharCode(pair[1]));
            }
        }
    }
}

console.log(map);

let str='';
for(let i=0; i < map.size;i++){
    if(map.has(i)){
        str+=map.get(i);
        continue;
    }
    str += '*';
}

console.log(str);
