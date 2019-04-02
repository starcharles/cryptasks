import * as crypto from "crypto";
import {config} from "../config";

const execEncryption = (mode: string, message: string, keys: string[]): string => {
	console.log("plain text: " + message);
	let target: string;

	target = encryptDES(mode, Buffer.from(keys[0], "hex"), message);
	// console.log(target);
	target = decryptDES(mode, Buffer.from(keys[1], "hex"), target);
	// console.log(target);
	// target = encryptDES(mode, Buffer.from(keys[2], "hex"), target);
	// console.log(target);
	target = Buffer.from(target, "ascii").toString("hex");

	return target;
};

const encryptDES = (mode: string, key: Buffer, message: string) => {
	const cipher = crypto.createCipheriv(mode, key, Buffer.from(config.iv, "hex"));
	let enc: string;
	enc = cipher.update(message, "ascii", "hex");
	enc += cipher.final("hex");
	return enc;
};

const decryptDES = (mode: string, key: Buffer, message: string) => {
	const decipher = crypto.createDecipheriv(mode, key, Buffer.from(config.iv, "hex"));
	decipher.setAutoPadding(true);
	let dec ;
	dec = decipher.update(message, "hex", "ascii");
	dec += decipher.final("ascii");
	return dec;
};

const m = execEncryption(config.enc_mode, config.plainText, config.keys);
console.log("enc: " + m);
// console.log("enc: " + Buffer.from(m, "hex").toString("utf8"));

