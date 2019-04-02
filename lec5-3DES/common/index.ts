export const XOR = (buf1: Buffer, buf2: Buffer): Buffer => {
	if (buf1.length !== buf2.length) {
		throw new Error("length mismatch");
	}
	const buffer = Buffer.alloc(buf1.length);
	for (let i = 0; i < buf1.length; i++) {
		buffer[i] = buf1[i] ^ buf2[i];
	}
	return buffer;
};

// const paddingPlainBuf = (plainBuf: Buffer, splitLength: number): Buffer => {
// 	if (plainBuf.length % splitLength !== 0) {
// 		const rest = plainBuf.length % splitLength;
//
// 		const pad = Buffer.alloc(splitLength - rest);
// 		return Buffer.concat([plainBuf, pad], plainBuf.length + pad.length);
// 	}
// 	return plainBuf;
// };

