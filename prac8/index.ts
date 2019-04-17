import {config} from "./config";


const P = config.pub.P;
const G = config.pub.G;
const a = config.priv.a;
const b = config.priv.b;

// key generation
// 1. Alice
const x = G ** a % P;
// 2. Bob
const y = G ** b % P;

// key exchange
// 1. Alice receive y
const ka = y ** a % P;
// 2. Bob receive x
const kb = x ** b % P;

console.log(ka);
console.log(kb);
