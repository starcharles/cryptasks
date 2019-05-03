export const XOR = (buf1: Buffer, buf2: Buffer): Buffer => {
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

export const getXorWithAlphabet = (targetChar: string) => {
	const A = 0x41;
	const Z = 0x5a;
	const a = 0x61;
	const z = 0x7a;
	const space = 0x20;

	if (targetChar.length !== 1) {
		throw new Error("error");
	}
	const arr = [];
	const target = targetChar.charCodeAt(0);
	// console.log(target.toString(16));

	const xored = target ^ space;
	arr.push(xored.toString(16));

	let ascii = "A".charCodeAt(0);
	while (ascii < Z + 0x01) {
		const xored = target ^ ascii;
		arr.push(xored.toString(16));
		ascii++;
	}

	ascii = "a".charCodeAt(0);
	while (ascii < z + 0x01) {
		const xored = target ^ ascii;
		arr.push(xored.toString(16));
		ascii++;
	}

	return arr;
};

