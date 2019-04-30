const key = [1, 2, 3, 6];
const P = [1, 2, 2, 2]; // plain text
const C = [1, 2, 2, 2]; // cipher

const S = [0, 1, 2, 3, 4, 5, 6, 7];
const T = [1, 2, 3, 6, 1, 2, 3, 6];

function swap(S: number[], i: number, j: number) {
	const tmp = S[i];
	S[i] = S[j];
	S[j] = tmp;
	// console.log(`swap i=${i}, j = ${j}`);
	// console.log(S);
}

let j = 0;
for (let i = 0; i < S.length; i++) {
	j = (j + S[i] + T[i]) % S.length;

	// swap(S[i], S[j]);
	swap(S, i, j);
}

let i = 0;
j = 0;

for (let n=0; n < P.length; n++) {
	i = (i + 1) % S.length;
	j = (j + S[i]) % S.length;
	swap(S, i, j);
	const t = (S[i] + S[j]) % S.length;
	const k = S[t];
	C[n] = P[n]^k;
}

console.log(`P = [${P}]`);
console.log(`C = [${C}]`);
