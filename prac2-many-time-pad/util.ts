import {XOR} from "./common";
import {ciphers} from "./msgs";

// A-Z: 0x41-0x5a
// a-z: 0x61-0x7a

// const e = 0x65;
const A = 0x41;
const Z = 0x5a;
const a = 0x61;
const z = 0x7a;

function getXorWithAlphabet(targetChar: string){
	if(targetChar.length !== 1){
		throw new Error("error");
	}
	const arr=[];
	const target =targetChar.charCodeAt(0);
	console.log(target.toString(16));
	let ascii = "A".charCodeAt(0);
	while (ascii < Z + 0x01) {
		const xored = target^ascii;
		arr.push(xored.toString(16));
		ascii++;
	}

	ascii = "a".charCodeAt(0);
	while (ascii < z + 0x01) {
		const xored = target^ascii;
		arr.push(xored.toString(16));
		ascii++;
	}

	return arr;
}

// const arr = getXorWithAlphabet("e");
// console.log(arr);
// getXorWithAlphabet("a");

export {
	getXorWithAlphabet
};
