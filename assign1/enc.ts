import {config} from "./config";
import * as fs from "fs";
import * as crypto from "crypto";

const encrypt = (mode: string, key: Buffer, iv: Buffer, message: Buffer) => {
	const cipher = crypto.createCipheriv(mode, key, iv);
	// cipher.setAutoPadding(false);
	let enc: Buffer;
	enc = cipher.update(message);
	const final = cipher.final();
	// return enc;
	return Buffer.concat([enc,final], enc.length + final.length);
};

const fileBuf = fs.readFileSync("tension.png");
console.log(fileBuf);

const enc = encrypt("DES-CBC", Buffer.from(config.keys[0], "hex"), Buffer.from(config.iv, "hex"), fileBuf);
console.log(enc);
fs.writeFileSync("cipher.txt", enc.toString("hex"));
