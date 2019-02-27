export const XOR = (buf1: Buffer, buf2: Buffer): Buffer => {
	// console.log(buf1);
	// console.log(buf2);
	if (buf1.length !== buf2.length) {
		throw new Error("length mismatch");
	}
	const buffer = Buffer.alloc(buf1.length);
	for (let i = 0; i < buf1.length; i++) {
		buffer[i] = buf1[i] ^ buf2[i];
	}
	// console.log(buffer);
	return buffer;
};

