export const XOR = (buf1: Buffer, buf2: Buffer) => {
	let buflen = 0;
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
