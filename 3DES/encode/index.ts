// procedure

// 1. split plainText(Pi = text/m, m: n bits to be divided.)
// 2. xor(previous input + split text Pi)
// 3. encrypt by block cipher argolism.
// 	=> cipher text : Ci
// 4. loop 1-3 until Pi ends.
// 5. concat all cipher text C0-Ci

import {Config, config} from "../config";
import {XOR} from "../common";

const encodeCBC = (mode: string, config: Config): Buffer => {
	const splitLength = config.byteLength;
	const IV = Buffer.from(config.IV, "hex");
	const plainBuf = Buffer.from(config.plainText, "ascii");
	console.log("plain text: " + config.plainText);

	// padding by 0x00
	const paddedBuf = paddingPlainBuf(plainBuf, splitLength);
	// allocate memory for cipher text
	const cipherBuf = Buffer.alloc(paddedBuf.length);
	let encryptedPart: Buffer;

	for (let i = 0; i < paddedBuf.length; i += splitLength) {
		const buf = paddedBuf.slice(i, i + splitLength);
		let prev: Buffer;
		i === 0 ? prev = IV : prev = cipherBuf.slice(i - splitLength, i);

		switch (mode) {
			case "OTP":
				encryptedPart = encryptByOTP(Buffer.from(config.key, "hex"), XOR(buf, prev));
				break;
			case "DES":
				encryptedPart = encryptByDES(Buffer.from(config.key, "hex"), XOR(buf, prev), config);
				break;
			default:
				encryptedPart = encryptByOTP(Buffer.from(config.key, "hex"), XOR(buf, prev));
		}
		encryptedPart.copy(cipherBuf, i, 0, encryptedPart.length);
	}
	return cipherBuf;
};

const paddingPlainBuf = (plainBuf: Buffer, splitLength: number): Buffer => {
	if (plainBuf.length % splitLength !== 0) {
		const rest = plainBuf.length % splitLength;
		const pad = Buffer.alloc(splitLength - rest);
		return Buffer.concat([plainBuf, pad], plainBuf.length + pad.length);
	}
	return plainBuf;
};

const encrypt = (key: Buffer, xored: Buffer) => {
	// feistel
	if (key.length !== xored.length) {
		throw new Error("length mismatch.");
	}
	return XOR(key, xored)
};

const encryptByOTP = (key: Buffer, xored: Buffer) => {
	// encryption by one-time-pad
	if (key.length !== xored.length) {
		throw new Error("length mismatch.");
	}
	return XOR(key, xored)
};

const encryptByDES = (key: Buffer, xored: Buffer, config: Config) => {
	// encryption by DES
	if (key.length !== xored.length) {
		throw new Error("length mismatch.");
	}
	const splitlen = config.byteLength;

	let i = 0;
	let l: Buffer = xored.slice(i, i + splitlen / 2 - 1);
	let r: Buffer = xored.slice(i + splitlen / 2, i + splitlen - 1);

	// loop round
	for (i; i < xored.length; i += splitlen) {
		const tmp = r;
		r = XOR(feistelFunc(key, r), l);
		l = r;
	}
	return Buffer.from("1212");
};

const feistelFunc = (key: Buffer, buf: Buffer): Buffer => {
	return Buffer.from("1212");
};

const encrypted = encodeCBC("OTP", config.OTP);
// console.log(config.plainText);
// console.log(encrypted.length);
console.log("enc: " + encrypted.toString("hex"));

