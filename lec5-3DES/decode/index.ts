import * as crypto from "crypto";
import {config} from "../config";

const execDecryption = (mode: string, message: string, keys: string[]): string => {
	console.log("cipher text: " + message);
	let target: string;

	target = decryptDES(mode, Buffer.from(keys[0], "hex"), message);
	console.log(target);
	target = encryptDES(mode, Buffer.from(keys[1], "hex"), target);
	console.log(target);
	// target = decryptDES(mode, Buffer.from(keys[2], "hex"), target);
	// console.log(target);

	return target;
};

const encryptDES = (mode: string, key: Buffer, message: string) => {
	const cipher = crypto.createCipheriv(mode, key, Buffer.from(config.iv, "hex"));
	let enc: string;
	enc = cipher.update(message, "utf8", "hex");
	enc += cipher.final("hex");
	return enc;
};

const decryptDES = (mode: string, key: Buffer, message: string) => {
	const decipher = crypto.createDecipheriv(mode, key, Buffer.from(config.iv, "hex"));
	// decipher.setAutoPadding(false);
	let dec ;
	dec = decipher.update(message, "hex", "ascii");
	dec += decipher.final("ascii");
	// dec = decipher.update(message, "hex", "utf8");
	// dec += decipher.final("utf8");
	return dec;
};

const m = execDecryption(config.enc_mode, config.encrypted, config.keys);
console.log("decrypted: " + m);
// console.log("decrypted: " + Buffer.from(m,"utf8").toString("ascii"));

