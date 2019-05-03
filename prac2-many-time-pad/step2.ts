import {XOR, getXorWithAlphabet} from "./common";
import {ciphers} from "./msgs";

const decodeAll = (keyHex: string, printhex: boolean = false) => {
	for (let i = 0; i < ciphers.length; i++) {
		console.log(`No.${i + 1}: `);
		const xor = XOR(Buffer.from(keyHex, "hex"), Buffer.from(ciphers[i], "hex"));
		console.log(xor.toString("ascii"));
		if(printhex){
			console.log(xor.toString("hex"));
		}
	}
};

let keyHex = "66396e89c9dbd8cc9874352acd6395012eafce78aa00ed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";

let dec = XOR(Buffer.from(keyHex, "hex"), Buffer.from(ciphers[10], "hex"));
// console.log(Buffer.from(ciphers[10],"hex"));
// console.log(Buffer.from(keyHex,"hex"));
// console.log(dec);
// console.log(dec.toString("ascii"));

// const dec1 = "The secret message is  Wht us,eR:jtr%{qMcipherO^never use the key more than ony";
//
//
// const xor2 = XOR(Buffer.from(dec1,"ascii"), Buffer.from(ciphers[10], "hex"));
// const key2 = xor2.toString("hex");
//
// console.log(keyHex);
// console.log(key2);
//
// const xor3 = XOR(Buffer.from(key2,"hex"), Buffer.from(ciphers[0], "hex"));
// const str1 = xor3.toString("ascii");
// const xor4 = XOR(Buffer.from("We can factor the number","ascii"), Buffer.from(ciphers[0], "hex"));
// console.log(str1); // =>  "We can factor the number"
// console.log(xor4.toString("hex"));
// // =>  "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28"


const keyHex2 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";
// "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28"

// const dec2 = XOR(Buffer.from(keyHex2, "hex"), Buffer.from(ciphers[10], "hex"));
// console.log(dec2);
// console.log(dec2.toString("ascii"));
// // => "The secret message is: Wht us,eR:jtr%{qMcipherO^nev-r use the key more than ony"
//
// const dec3 = "The secret message is: Wht us,eR:jtr%{qMcipherO^never use the key more than once";
//
// const xor2 = XOR(Buffer.from(dec3, "ascii"), Buffer.from(ciphers[10], "hex"));
// const key3 = xor2.toString("hex");
//
// console.log(key3);
// // => 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e259c8b76c93734fa26c84ff7a96818983d7b8382e75ddb2aa8fb056758cc9dbd05dd1efd84776a16a6eabeddd345372a3cc36ebf0dfa
//
// const keyHex3 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e259c8b76c93734fa26c84ff7a96818983d7b8382e75ddb2aa8fb056758cc9dbd05dd1efd84776a16a6eabeddd345372a3cc36ebf0dfa3c0000";
// // => 			 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e259c8b76c93734fa26c84ff7a96818983d7b8382e75ddb2aa8fb056758cc9dbd05dd1efd84776a16a6eabeddd345372a3cc36ebf0dfa


// for (let i = 0; i < ciphers.length; i++) {
// 	console.log(`No.${i+1}: `);
// 	const xor3 = XOR(Buffer.from(keyHex2, "hex"), Buffer.from(ciphers[i], "hex"));
// 	console.log(xor3.toString("ascii"));
// 	console.log(xor3.toString("hex"));
// }

// We can factor the number  ^ wi1cIAF{wtu-:mputerP Wehcan also factor the number:P
// 	Euler would probably enjohKtha1+_D:qis`norem bome; a corner stone of crypto 7A
// The nice thing about Keey}q i6+_D:ne #hetograp
//                                               s +an drive a lot of fancy cah
// The ciphertext produced bhKa w jVtzry0nun algothmhlooks as good as ciphertexnA
// You don't want to buy a st ofeBq|ys`|nm a gu^whohspecializes in stealing cah
// 	There are two types of crhog7jXJ:4 t({hMwhich ll #eep secrets safe from your:
// 		There are two types of cyaogr${I        :vne`nt
//  th- Government to use brute fu                t allo
// We can see the point whertKtheehYC:ps 5tt
//                                          ppy ifC wr'ng bit is sent and consumeiA
// A (private-key)  encrypti~ sc-nUimat%i<^ algor
//
// hmsd namely a procedure for get
//  The Concise OxfordDictio
// ry m9Y39de/6es cry
// o a; the art of  writing o r su
// The secret message is: Wht us,eR:jtr%{qMcipherO^nev-r use the key more than ony

// We can factor the number  ^ wi1cIAF{wtu-:mputerP Wehcan also factor the number:P
// The secret message is: Wht us,eR:jtr%{qMcipherO^nev-r use the key more than ony

const c1 = "We can factor the number  ^ wi1cIAF{wtu-:mputerP Wehcan also factor the number P";
const c1Hex = "57652063616e20666163746f7220746865206e756d62657220205e207769b16349c146fb7774752d3aff026d707574657210d02057656863616e20616c736f20666163746f7220746865206e756d626572ba50";
console.log(c1Hex);
console.log(Buffer.from(c1, "ascii").toString("hex"));

// const xor3 = XOR(Buffer.from(c1Hex, "hex"), Buffer.from(ciphers[0], "hex"));
// console.log(xor3.toString("hex"));
// => 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000
// = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";

// const keyHex2 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a06e00c98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";

// "The ciphertext produced bhKa w jVtzry0nun algothmhlooks as good as ciphertexnA"
// "We can factor the number  ^ wi1cIAF{wtu-:mputerP Wehcan also factor the number P";
// " The Concise OxfordDictionary m9Y39de/6es cry o a; the art of  writing o r su
// "A (private-key)  encryption
// "The secret message is: Wht us,eR:jtr%{qMcipherO^nev-r use the key more than ony

// " The Concise OxfordDictionary m9Y39de/6es cry o a; the art of  writing o r su
// const partialNo10 = "2054686520436f6e63697365204f78666f726444696374696f6e617279";
// const xor3 = XOR(Buffer.from(partialNo10, "hex"), Buffer.from(ciphers[9], "hex"));
// console.log(xor3.toString("hex"));
// // => 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d
//
// const keyHex3 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d2900000000000000f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";
// 		   // => 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d
// const dec3 = XOR(Buffer.from(keyHex3, "hex"), Buffer.from(ciphers[10], "hex"));
// console.log(dec3.toString("ascii"));
// // The secret message is: When us,eR:jtr%{qMcipherO^nev-r use the key more than ony
//
// for (let i = 0; i < ciphers.length; i++) {
// 	console.log(`No.${i+1}: `);
// 	const xor3 = XOR(Buffer.from(keyHex3, "hex"), Buffer.from(ciphers[i], "hex"));
// 	console.log(xor3.toString("ascii"));
// 	console.log(xor3.toString("hex"));
// }

// No.6:
// There are two types of cryptog7jXJ:4 t({hMwhich ll #eep secrets safe from your:
// There are two types of cryptographer
//
// 5468657265206172652074776f207479706573206f662063727970746f67b76a19d84aba342074287be84d77686963682014976c6c2023656570207365637265747320736166652066726f6d20796f7572ba0d
// 54 68 65 72 65 20 61 72 65 20 74 77 6f 20 74 79 70 65 73 20 6f 66 20 63 72 79 70 74 6f 67 72 61 70 68 79

// const partial2 = "5468657265206172652074776f207479706573206f662063727970746f6772617068657220";
// const xor3 = XOR(Buffer.from(partial2, "hex"), Buffer.from(ciphers[5], "hex"));
// console.log(xor3.toString("hex"));
//
const keyHex4 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814f8aa00000000708f80c066c70000f0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";
//               // 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814
// const dec3 = XOR(Buffer.from(keyHex3, "hex"), Buffer.from(ciphers[10], "hex"));
// console.log(dec3.toString("ascii"));

// for (let i = 0; i < ciphers.length; i++) {
// 	console.log(`No.${i+1}: `);
// 	const xor3 = XOR(Buffer.from(keyHex4, "hex"), Buffer.from(ciphers[i], "hex"));
// 	console.log(xor3.toString("ascii"));
// 	console.log(xor3.toString("hex"));
// }

// No.9:
// A (private-key)  encryption scheme<!yat%i<^ algorithm
// 	412028707269766174652d6b6579292020656e6372797074696f6e 20 736368656d653c217961742569bc5e 20616c676f726974686d
//  4120287072 69 76 61 74 65 2d 6b 65 79 29 20 20  65 6e 63 72 79 70 74 69 6f 6e 20 736368656d653c21 79 61 74 25 69 bc5e20 616c676f726974686d
//
// const partial3 = "412028707269766174652d6b6579292020656e6372797074696f6e20736368656d653c217961742569bc5e20616c676f726974686d";
// const xor3 = XOR(Buffer.from(partial3, "hex"), Buffer.from(ciphers[8], "hex"));
// console.log(xor3.toString("hex"));
// // => 66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814f8aa00000000708f80c066c763fef012
//
// const keyHex5 = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814f8aa00000000708f80c066c763fef0123100cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c0000";
// // =>            66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814f8aa00000000708f80c066c763fef012
// const dec3 = XOR(Buffer.from(keyHex5, "hex"), Buffer.from(ciphers[10], "hex"));
// console.log(dec3.toString("ascii"));
//
// for (let i = 0; i < ciphers.length; i++) {
// 	console.log(`No.${i+1}: `);
// 	const xor3 = XOR(Buffer.from(keyHex5, "hex"), Buffer.from(ciphers[i], "hex"));
// 	console.log(xor3.toString("ascii"));
// 	console.log(xor3.toString("hex"));
// }


// No.3:
// The nice thing about Keeyloq is nokrze #hetographers +an drive a lot of fancy cah
// 546865206e696365207468696e672061626f7574204b6565796c6f71206973206e6f6b727a65202368e51d746f6772617068657273202b616e2064726976652061206c6f74206f662066616e6379206361e812

//
// ----
// The nice thing about Keeyloq is nokrze #hetographers can drive a lot of fancy cars
// 546865206e696365207468696e672061626f7574204b6565796c6f71206973206e6f6b727a65202368e51d746f67726170686572732063616e2064726976652061206c6f74206f662066616e63792063617273
let partial = "546865206e696365207468696e672061626f7574204b6565796c6f71206973206e6f6b727a65202368e51d746f67726170686572732063616e2064726976652061206c6f74206f662066616e63792063617273";
let k = XOR(Buffer.from(partial, "hex"), Buffer.from(ciphers[2], "hex")).toString("hex");
console.log(k);
// => "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b02fc814f8aa00000000708f80c066c763fef0123148cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c9a61"

decodeAll(k);
decodeAll(k,true);


//No.5:
// You don't want to buy a set of car<9hys`|nm a guy who specializes in stealing cars
// 596f7520646f6e27742077616e7420746f20627579206120736574206f66206361723c39687973607cee026d2061206775792077686f207370656369616c697a657320696e20737465616c696e672063617273

//=>  You don't want to buy a set of car 9hys`|nm a guy who specializes in stealing cars
// 596f7520646f6e27742077616e7420746f20627579206120736574206f66206361727320687973607cee026d2061206775792077686f207370656369616c697a657320696e20737465616c696e672063617273
// 596f7520646f6e27742077616e7420746f20627579206120736574206f66206361722039687973607cee026d2061206775792077686f207370656369616c697a657320696e20737465616c696e672063617273

// You don't want to buy a set of cars hys`|nm a guy who specializes in stealing cars

// partial = "596f7520646f6e27742077616e7420746f20627579206120736574206f66206361722039687973607cee026d2061206775792077686f207370656369616c697a657320696e20737465616c696e672063617273";
// k = XOR(Buffer.from(partial, "hex"), Buffer.from(ciphers[4], "hex")).toString("hex");
// console.log(k);
// // => ""
//
// decodeAll(k);
// decodeAll(k,true);

// No.6:
// There are two types of cryptographyr  t({hMwhich will keep secrets safe from your l
// 5468657265206172652074776f207479706573206f662063727970746f67726170687972202074287be84d77686963682077696c6c206b656570207365637265747320736166652066726f6d20796f7572206c

//=> There are two types of cryptography  t({h which will keep secrets safe from your l
// 5468657265206172652074776f207479706573206f662063727970746f67726170687920202074287be82077686963682077696c6c206b656570207365637265747320736166652066726f6d20796f7572206c

// partial = "5468657265206172652074776f207479706573206f662063727970746f67726170687920202074287be82077686963682077696c6c206b656570207365637265747320736166652066726f6d20796f7572206c";
// k = XOR(Buffer.from(partial, "hex"), Buffer.from(ciphers[5], "hex")).toString("hex");
// console.log(k);
// // => ""
//
// decodeAll(k);
// decodeAll(k,true);


//No.2:
// Euler would probably enjoy that now eis`nteorem becomes a corner stone of crypto -
// 45756c657220776f756c642070726f6261626c7920656e6a6f792074686174206e6f7720656973606ef4656f72656d206265636f6d6573206120636f726e65722073746f6e65206f662063727970746f202d20

// =>
// Euler would probably enjoy that now his theorem becomes a corner stone of crypto -

// 45756c657220776f756c642070726f6261626c7920656e6a6f792074686174206e6f7720686973207468656f72656d206265636f6d6573206120636f726e65722073746f6e65206f662063727970746f202d20

partial = "45756c657220776f756c642070726f6261626c7920656e6a6f792074686174206e6f7720686973207468656f72656d206265636f6d6573206120636f726e65722073746f6e65206f662063727970746f202d20";
k = XOR(Buffer.from(partial, "hex"), Buffer.from(ciphers[1], "hex")).toString("hex");
console.log(k);
// => "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b0339a19f8aa401a9c6d708f80c066c763fef0123148cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c9a61"

decodeAll(k);
// decodeAll(k,true);


// No.11:
// "The secret message is: When using a stream cipher, never use the key more than once"
let hex = "54686520736563726574206d6573736167652069733a205768656e207573696e6720612073747265616d206369706865722c206e657665722075736520746865206b6579206d6f7265207468616e206f6e6365"
let secret = "66396e89c9dbd8cc9874352acd6395102eafce78aa7fed28a07f6bc98d29c50b69b0339a19f8aa401a9c6d708f80c066c763fef0123148cdd8e802d05ba98777335daefcecd59c433a6b268b60bf4ef03c9a61"

let cipher = XOR(Buffer.from(hex, "hex"), Buffer.from(secret, "hex")).toString("hex");
console.log(cipher);

// let originalMsg = Buffer.from(ciphers[10],"hex");
// let decoded = Buffer.from(cipher,"hex");
//
// let result: number = originalMsg.compare(decoded);
if(cipher === ciphers[10]){
	console.log("success!");
}

