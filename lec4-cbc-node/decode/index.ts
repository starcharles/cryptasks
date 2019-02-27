// procedure

// 1. split cipher(Ci = text/m, m: n bits to be divided.)
// 2. decrypt by block cipher algorithm.
// 	=> pre-text : Pre i(i=0...)
// 3. xor with previous input(or IV) and Pre i. => Plain text : Pi
// 4. loop 1-3 until Pi ends.
// 5. concat all Pi

import {Config, config} from "../config";
import {XOR} from "../common";

const decodeCBC = (mode: string, config: Config) => {
	const splitLength = config.byteLength;
	const IV = Buffer.from(config.IV, "hex");
	const key = Buffer.from(config.key, "hex");
	const cipherBuf = Buffer.from(config.encrypted, "hex");
	console.log("enc text: " + config.encrypted);

	// // allocate memory for cipher text
	const plainBuf = Buffer.alloc(cipherBuf.length);
	let decryptedPart: Buffer;

	for (let i = 0; i < cipherBuf.length; i += splitLength) {
		const buf = cipherBuf.slice(i, i + splitLength);
		if (mode === "OTP") {
			decryptedPart = decryptByOTP(key, buf);
		} else {
			// TODO: impl
			decryptedPart = decrypt(key, buf);
		}

		let prev: Buffer;
		i === 0 ? prev = IV : prev = cipherBuf.slice(i - splitLength, i);
		XOR(decryptedPart, prev).copy(plainBuf, i, 0, splitLength);
	}
	// TODO?: remove padding by 0x00
	// if (plainBuf.slice(-1).compare(Buffer.from("00", "hex")){
	//
	// }

	return plainBuf;
};


// const paddingPlainBuf = (plainBuf: Buffer, splitLength: number): Buffer => {
// 	if (plainBuf.length % splitLength !== 0) {
// 		const rest = plainBuf.length % splitLength;
// 		const pad = Buffer.alloc(splitLength - rest);
// 		return Buffer.concat([plainBuf, pad], plainBuf.length + pad.length);
// 	}
// 	return plainBuf;
// };

const decrypt = (key: Buffer, xored: Buffer) => {
	// TODO:feistel
	if (key.length !== xored.length) {
		throw new Error("length mismatch.");
	}
	return XOR(key, xored)
};

const decryptByOTP = (key: Buffer, xored: Buffer) => {
	// encryption by one-time-pad
	if (key.length !== xored.length) {
		throw new Error("length mismatch.");
	}
	return XOR(key, xored)
};

const plain = decodeCBC("OTP", config.OTP);
// console.log(plain.length);
console.log("plain text: " + plain.toString("ascii"));
