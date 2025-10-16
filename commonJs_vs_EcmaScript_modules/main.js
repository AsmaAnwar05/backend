// import {a,b,c} from './mymodule.js';
// import asma from "./mymodule.js";//default export obj can be import using any name

// console.log(asma);
// console.log(a,b,c);

const a=require('./mymodule2.js');
console.log(a.a,a.b,a.c);
console.log(a,__filename);