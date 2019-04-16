import {config} from "./config";
import * as fs from "fs";
import * as crypto from "crypto";

const decrypt = (mode: string, key: Buffer, iv: Buffer, message: string) => {
	const decipher = crypto.createDecipheriv(mode, key, iv);
	let dec = decipher.update(message, "hex").toString("hex");
	dec += decipher.final("hex");
	return dec;
};

const cfile = fs.readFileSync("./cipher.txt", {encoding: "utf8", flag: "r"});
// console.log(cfile);
console.log(Buffer.from(cfile, "hex"));
const dec = decrypt("DES-CBC", Buffer.from(config.keys[0], "hex"), Buffer.from(config.iv, "hex"), cfile);
console.log(Buffer.from(dec, "hex"));
fs.writeFileSync("dec.png", dec, {encoding: "hex"});

