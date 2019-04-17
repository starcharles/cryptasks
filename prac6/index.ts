import {BigNumber as BN} from "bignumber.js";

// # Enc

//Alice
const p = 283;
const q = 47;
const g = 60;
const k = 36;
const m = 101;

console.log(`m= ${m}`);

// Bob's public key,
const pubB = 216;

const c1 = new BN(g).pow(k).mod(p);
const c2 = new BN(m).multipliedBy(new BN(pubB).pow(k)).mod(p);
console.log(`(c1, c2) = (${c1}, ${c2})`);
// (c1, c2) = (78, 218)


// # DEC


// Bob

const privBob = 7;

const m2 = new BN(c1).pow(p - privBob - 1).multipliedBy(c2).mod(p);
console.log(`decrypted m= ${m2}`);
