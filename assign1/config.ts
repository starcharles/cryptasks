export const config = {
	enc_mode: "DES-CBC",
	iv: "a7a7a7a7a7a7a7a7", // 8 bytes in hex
	keys: [
		// 8 bytes in hex
		"a7c5b3ff21a7c5b3",
	],
};

export type Config = {
	enc_mode: string,
	iv: string,
	keys: string[],
}