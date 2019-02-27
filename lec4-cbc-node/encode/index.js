"use strict";
// procedure
Object.defineProperty(exports, "__esModule", { value: true });
// 1. split plainText(Pi = text/m, m: n bits to be divided.)
// 2. xor(previous input + split text Pi)
// 3. encrypt by block cipher argolism.
// 	=> cipher text : Ci
// 4. loop 1-3 until Pi ends.
// 5. concat all cipher text C0-Ci
var config_1 = require("../config");
var common_1 = require("../common");
var encodeCBC = function (mode, config) {
    var splitLength = config.byteLength;
    var IV = Buffer.from(config.IV, "hex");
    var plainBuf = Buffer.from(config.plainText, "ascii");
    // padding by 0x00
    var paddedBuf = paddingPlainBuf(plainBuf, splitLength);
    // allocate memory for cipher text
    var cipherBuf = Buffer.alloc(paddedBuf.length);
    var encryptedPart;
    for (var i = 0; i < paddedBuf.length; i += splitLength) {
        var buf = paddedBuf.slice(i, i + splitLength);
        var prev = void 0;
        i === 0 ? prev = IV : prev = cipherBuf.slice(i - splitLength, i);
        if (mode === "OTP") {
            encryptedPart = encryptByOTP(Buffer.from(config.key, "hex"), common_1.XOR(buf, prev));
        }
        else {
            encryptedPart = encrypt(Buffer.from(config.key, "hex"), common_1.XOR(buf, prev));
        }
        encryptedPart.copy(cipherBuf, i, 0, encryptedPart.length);
    }
    return cipherBuf;
};
var paddingPlainBuf = function (plainBuf, splitLength) {
    if (plainBuf.length % splitLength !== 0) {
        var rest = plainBuf.length % splitLength;
        var pad = Buffer.alloc(rest);
        return Buffer.concat([plainBuf, pad], plainBuf.length + pad.length);
    }
    return plainBuf;
};
var encrypt = function (key, xored) {
    // feistel
    if (key.length !== xored.length) {
        throw new Error("length mismatch.");
    }
    return common_1.XOR(key, xored);
};
var encryptByOTP = function (key, xored) {
    // encryption by one-time-pad
    if (key.length !== xored.length) {
        throw new Error("length mismatch.");
    }
    return common_1.XOR(key, xored);
};
var encrypted = encodeCBC("OTP", config_1.config.OTP);
console.log(encrypted);
console.log(encrypted.length);
console.log("0x" + encrypted.toString("hex"));
//# sourceMappingURL=index.js.map