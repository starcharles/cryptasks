import {config} from "./config";
import * as crypto from "crypto";

const NS_PER_SEC = 1e9;
// let time;

const generateHashWithTime = (mode: string, text: string, salt: string) => {
	const hash = crypto.createHash(mode);
	const time = process.hrtime();

	hash.update(text + salt);
	const hex = hash.digest().toString("hex");
	const diff = process.hrtime(time);
	// console.log("diff");
	// console.log(diff);

	return {
		hex,
		time: diff
		// time: end - start
	}
};

function benchmark(text: string, salt: string) {
	const md5hash = generateHashWithTime("md5", text, salt);
	const sha1hash = generateHashWithTime("sha1", text, salt);
	const sha256hash = generateHashWithTime("sha256", text, salt);

	// console.log(`text: ${text}`);
	// console.log(`salt: ${salt}`);
	console.log(`md5: ${md5hash.hex}`);
	// console.log(`md5 time: ${md5hash.time[0] * NS_PER_SEC + md5hash.time[1]} nanoseconds`);

	console.log(`sha1: ${sha1hash.hex}`);
	// console.log(`sha1 time: ${sha1hash.time[0] * NS_PER_SEC + sha1hash.time[1]} nanoseconds`);
	console.log(`sha256: ${sha256hash.hex}`);
	// console.log(`sha256 time: ${sha256hash.time[0] * NS_PER_SEC + sha256hash.time[1]} nanoseconds`);

	return {
		md5: md5hash.time[0] * NS_PER_SEC + md5hash.time[1],
		sha1: sha1hash.time[0] * NS_PER_SEC + sha1hash.time[1],
		sha256: sha256hash.time[0] * NS_PER_SEC + sha256hash.time[1],
	}
	// return {
	// 	md5: md5hash.time,
	// 	sha1: sha1hash.time,
	// 	sha256: sha256hash.time
	// }
}

function order(t1: number, t2: number) {
	return Math.log10(t2 / t1)
}

console.log("----------------------------------------");
const bench1 = benchmark(config.text, "");
console.log("----------------------------------------");
const bench2 = benchmark(config.text.repeat(10), "");
const bench3 = benchmark(config.text.repeat(100), "");


console.log("order estimation");
console.log("compare1=============");
// console.log(`md5: ${bench1.md5}`);
// console.log(`md5: ${bench2.md5}`);
// console.log(`md5: ${bench3.md5}`);
console.log(`md5: ${bench2.md5 / bench1.md5}`);
console.log(`sha1: ${bench2.sha1 / bench1.sha1}`);
console.log(`sha256: ${bench2.sha256 / bench1.sha256}`);

console.log("compare2=============");

console.log(`md5: ${bench3.md5 / bench1.md5}`);
console.log(`sha1: ${bench3.sha1 / bench1.sha1}`);
console.log(`sha256: ${bench3.sha256 / bench1.sha256}`);

// order estimation
// compare1=============
// 	md5: 0.9143150871745379
// sha1: 0.5592740822522771
// sha256: 0.93160409556314
// compare2=============
// 	md5: 0.5514969682982607
// sha1: 0.8968396356610544
// sha256: 2.1425255972696244


// => O(1) constant
