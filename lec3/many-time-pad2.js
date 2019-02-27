const msgs = require("./msgs");

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

const map = new Map();

for (let k = 1; k < 11; k++) {
    const msg1 = msgs[k];
    const buf1 = Buffer.from(msg1, "hex");

    for (let i = k + 1; i < 11; i++) {
        const msg2 = msgs[i];
        const buf2 = Buffer.from(msg2, "hex");
        const buf = xor(buf1, buf2);

        for (const pair of buf.entries()) {
            const res = pair[1].toString(16).match(/4\w|6\w/);
            if (res) {
                const idx = pair[0];
                const hex = buf1[idx].toString(16);

                if (!map.has(hex)) {
                    map.set(hex, 1);
                } else {
                    let i = map.get(hex);
                    map.set(hex, ++i);
                }
            }
        }
    }

}

for(let pair of map){
    if(pair[1]> 10){
        console.log(pair);
    }
}

// const keys = map.keys();
//
// const map2 = new Map();
// for (const k of keys) {
//     const hex = buf1[k].toString(16);
//     if (map2.has(hex)) {
//         let num = map2.get(hex);
//         map2.set(hex, ++num);
//     } else {
//         map2.set(hex, 1);
//     }
//     // console.log(buf1[k].toString(16));
// }
//
// console.log(map2);
// console.log(buf1);
// const arr = nums.sort();
//
// console.log(arr);
//
// let str='';
// for(let i=0; i < map.size;i++){
//     if(map.has(i)){
//         str+=map.get(i);
//         continue;
//     }
//     str += '*';
// }
//
// console.log(str);
