"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XOR = function (buf1, buf2) {
    // console.log(buf1);
    // console.log(buf2);
    if (buf1.length !== buf2.length) {
        throw new Error("length mismatch");
    }
    var buffer = Buffer.alloc(buf1.length);
    for (var i = 0; i < buf1.length; i++) {
        buffer[i] = buf1[i] ^ buf2[i];
    }
    // console.log(buffer);
    return buffer;
};
//# sourceMappingURL=index.js.map