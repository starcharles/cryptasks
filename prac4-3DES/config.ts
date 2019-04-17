export const config = {
	enc_mode: "DES-CBC",
	iv: "a7a7a7a7a7a7a7a7", // 8 bytes in hex
	keys: [
		// 8 bytes in hex
		"a7c5b3ff21a7c5b3",
		"b7c5b3ff21a7c5b3",
		"c7c5b3ff21a7c5b3",
	],
	plainText: "She has gone Somewhere, but i don't know where she has gone.",
	// encrypted: "8bc4de6b0ddd62e3ee6882294c53fb72d1b716f7bd7c8eac15f6a7cdbed7fcc408d43bed725713d797252d4d38eb85beadba2086240d95c1a613681b239585f8dc3dd34ba44ea654"
	// encrypted: "6c7c5c0e400e8f348ed3fc80761cb17d7c9b3c1e9bb5a7145892331d4927f7d44ab07872fc74bac20ad121aa3b7029378174de4db8478aeb48e3c24a61b4fd0857b0501656b8ccc7c7bc1ed6af371c822fedcbb4bc296ea13a3415c20c6b04cda4afa1f5015a3ff8bdb38578653c88792715b1ab02160393783522f2e0bcf8a3"
	encrypted: "6b610c4a4070173f7f077c6c42565e3121594e7e18514d467c24395f335c02522f6e2b0c592e6046453e311b565f66640c4c3d583a31147a666b79235154602e"
};

export type Config = {
	enc_mode: string,
	iv: string,
	keys: string[],
	plainText: string,
	encrypted: string,
}