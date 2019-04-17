export const config = {
	OTP:{
		byteLength: 4, // split message for each 4 bytes.(4 chars in ASCII code)
		key: "12345678",
		IV: "a7c5b3ff",
		plainText: "She has gone SoMewhere, but i don't know where she has gone.",
		encrypted: "e69980a79ccca5ffe9979de2dbf0a4d7acb39acacce2e092bca3c2cac7b7f0ddbba4d285c2feeb8af0bdd59790eca39ceabdd58c99faa393e4a090c5",
	}
};

export type Config ={
	byteLength: number, // split message for each 4 bytes.(4 chars in ASCII code)
	key: string,
	IV: string,
	plainText: string,
	encrypted: string,
}