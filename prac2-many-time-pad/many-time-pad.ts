import {XOR} from "./common";
import {ciphers} from "./msgs";

const fromAsciiToBuf = (str: string) => {
    const length = str.length;
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        const hex = str.charCodeAt(i).toString(16);
        const buf = Buffer.from(hex, "hex");
        arr.push(buf);
    }
    return Buffer.concat(arr, length);
};

const target = ciphers[10];
const targetBuf = Buffer.from(target, "hex");
const map = new Map();
for (let i = 1; i < 10; i++) {
    const arr = XOR(Buffer.from(ciphers[i], "hex"), targetBuf);

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
