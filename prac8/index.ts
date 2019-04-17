import {config} from "./config";
import {BigNumber as BN} from "bignumber.js";

const P = config.pub.P;
const G = config.pub.G;
const a = config.priv.a;
const b = config.priv.b;

// key generation
// 1. Alice
const x = new BN(G).pow(a).mod(P);
// 2. Bob
const y = new BN(G).pow(b).mod(P);

// key exchange
// 1. Alice receive y
const ka = new BN(y).pow(a).mod(P);
// 2. Bob receive x
const kb = new BN(x).pow(b).mod(P);

console.log(ka.toNumber() === kb.toNumber());
