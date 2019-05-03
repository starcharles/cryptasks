import {XOR, getXorWithAlphabet} from "./common";
import {ciphers} from "./msgs";

const targetLength = ciphers[10].length;
console.log(`target length: ${targetLength / 2}`);
const key = Buffer.alloc(targetLength / 2);

function xorAll(target: string, targetNum: number): string[] {
	const targetBuf = Buffer.from(target, "hex");
	const arr: string[] = [];
	for (let i = 0; i < ciphers.length; i++) {
		if (i === targetNum) {
			continue;
		}
		const buf: Buffer = XOR(Buffer.from(ciphers[i], "hex"), targetBuf);
		arr.push(buf.toString("hex"));
	}
	return arr;
}

function checkHexSpace(index: number, buf: Buffer) {
	const res = buf[index].toString(16).match(/[4-7]\w/);
	if (res) {
		return true;
	}
	return false;
}

function checkHexSmallE(index: number, buf: Buffer, array: string[]) {
	if (array.indexOf(buf[index].toString(16)) !== -1) {
		return true;
	}
	return false;
}

// xor with SP
for (let k = 0; k < ciphers.length; k++) {
	const idx: number[] = [];
	const target = ciphers[k];
	const targetBuf = Buffer.from(ciphers[k], "hex");
	const arr = xorAll(target, k);
	// console.log(arr.length);

	for (let i = 0; i < targetBuf.length; i++) {
		let j;
		for (j = 0; j < arr.length; j++) {
			if (arr[j].length / 2 <= i) {
				break;
			}
			if (!checkHexSpace(i, Buffer.from(arr[j], "hex"))) {
				break;
			}
		}
		if (j === arr.length) {
			// console.log(`index: ${i} maybe space.`);
			idx.push(i);
		}
	}

	console.log(idx);
	for (let index of idx) {
		console.log("--------------");
		console.log(index);
		console.log(targetBuf[index].toString(16));
		const xor = targetBuf[index] ^ 0x20;
		console.log(xor);
		console.log(xor.toString(16));
		key[index] = xor;
	}
}

// console.log(`target : ${ciphers[10]}`);
// console.log(`key : ${key.toString("hex")}`);
// const dec = XOR(key, Buffer.from(ciphers[10], "hex"));
// console.log(dec);
// console.log(dec.toString("ascii"));


function xorDecodeWithAlphabet(key: Buffer, alphabet: string) {
	const charCode = alphabet.charCodeAt(0);
	for (let k = 0; k < ciphers.length; k++) {
		const idx: number[] = [];
		const target = ciphers[k];
		const targetBuf = Buffer.from(ciphers[k], "hex");
		const arr = xorAll(target, k);
		// console.log(arr.length);

		for (let i = 0; i < targetBuf.length; i++) {
			let j;
			for (j = 0; j < arr.length; j++) {
				if (arr[j].length / 2 <= i) {
					break;
				}
				if (!checkHexSmallE(i, Buffer.from(arr[j], "hex"), getXorWithAlphabet(alphabet))) {
					break;
				}
			}
			if (j === arr.length) {
				console.log(`index: ${i} maybe "e".`);
				idx.push(i);
			}
		}

		console.log(idx);
		for (let index of idx) {
			const xor = targetBuf[index] ^ charCode;
			if (key[index] === 0x00) {
				key[index] = xor;
			}
		}
	}
	console.log(`target : ${ciphers[10]}`);
	console.log(`key : ${key.toString("hex")}`);
	const dec = XOR(key, Buffer.from(ciphers[10], "hex"));
	console.log(dec);
	console.log(dec.toString("ascii"));
}


const str =["e", "a", "t","i","o", "s", "n", "r"];

// find "e"
// xorDecodeWithAlphabet(key, "e");
//
// // find "a"
// xorDecodeWithAlphabet(key, "a");
//
// // find "t"
// xorDecodeWithAlphabet(key, "t");

for(let s of str){
	xorDecodeWithAlphabet(key, s);
}

const keyHex = "66390089c9dbd8cb9874002acd6300102eafce78aa00ed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";
const keyHex2 = "66396e89c9dbd8cb9874012acd6300102eafce78aa00ed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";

const dec = XOR(Buffer.from(keyHex2,"hex"), Buffer.from(ciphers[10], "hex"));
console.log(dec);
console.log(dec.toString("ascii"));

// "The secretmessage isE Wht us,eR:jtr%{qMcipherO^never use the key more than once";
