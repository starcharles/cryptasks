export const config = {
	P: 53,
	Q: 59,
	enc_mode: "DES-CBC",
	iv: "a7a7a7a7a7a7a7a7", // 8 bytes in hex
	keys: [
		// 8 bytes in hex
		"a7c5b3ff21a7c5b3",
		"b7c5b3ff21a7c5b3",
		"c7c5b3ff21a7c5b3",
	],
	plainText: "She has gone Somewhere, but i don't know where she has gone.",
};

export type Config = {
	enc_mode: string,
	iv: string,
	keys: string[],
	plainText: string,
	encrypted: string,
}