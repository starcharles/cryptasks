import {config} from "./config";
import {BigNumber as BN} from "bignumber.js";

const P = config.P;
const Q = config.Q;

const n = P * Q;
const pn = (P - 1) * (Q - 1);
// console.log(n);
// console.log(`pn = ${pn}`);

const alphabetToInt = (char: string) => {
	return char.charCodeAt(0) - 64;
};

const intToAlphabet = (int: number) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return alphabet[int - 1];
};

const wordToInt = (word: string) => {
	const arr = [];
	for (let i = 0; i < word.length; i++) {
		const num = alphabetToInt(word[i]);
		arr.push(num);
	}
	return arr.join('');
};

const intToWord = (i: number) => {
	const nums = i.toString().split('');
	const word = [];

	for(let j=0; j < nums.length; j++){
		const alph = intToAlphabet(+nums[j]);
		// console.log(alph);
		word.push(alph)
	}
	return word.join('');
};
// const i = wordToInt("HIA");
// console.log(i);
// const w = intToWord(891);
// console.log(w);

const getE = (pn: number) => {
	let i = 1;
	for (; i < pn; i++) {
		if (pn % i === 0) {
			continue;
		}
		break
	}
	return i;
};

const getPriv = (e: number, k: number, pn: number) => {
	return (k * pn + 1) / e;
};

const enc = (n: number, e: number, message: string) => {
	const m = wordToInt(message);
	let m2 = new BN(m);
	let e2 = new BN(e);

	return m2.pow(e2).modulo(n);
};

const dec = (n: number, d: number, c: BN) => {
	let d2 = new BN(d);
	const num = c.pow(d2).modulo(n).toNumber();

	return intToWord(num);
};

const e = getE(pn);
// console.log(e);
const message = "HIA";
console.log(`message = ${message}`);
console.log(`Public Key: n = ${n}, e = ${e}`);
const d = getPriv(e, 2, pn);
const c: BN = enc(n, e, message);
const decrypted = dec(n, d, c);
// console.log(d);
console.log(`Private Key: d = ${d}`);
console.log(`encrypted:    c = ${c}`);
console.log(`decrypted: message = ${decrypted}`);

// console.log(`decrypted message:    ${intArrayToWord()decrypted.toString()}`);
