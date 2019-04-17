import {config} from "./config";
import * as crypto from "crypto";

const generateHash = (mode: string, text: string, salt: string) => {
	const hash = crypto.createHash(mode);
	hash.update(text + salt);
	return hash.digest().toString("hex");
};


const md5hash = generateHash("md5", config.text, config.salt);
const sha1hash = generateHash("sha1", config.text, config.salt);
const sha256hash = generateHash("sha256", config.text, config.salt);

console.log(`text: ${config.text}`);
console.log(`salt: ${config.salt}`);
console.log(`md5: ${md5hash}`);
console.log(`sha1: ${sha1hash}`);
console.log(`sha256: ${sha256hash}`);
