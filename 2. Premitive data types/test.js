// Total 7
// string
// number
// bigint
// boolean
// undefined
// symbol
// null

//undefined
let firstName;// or var
console.log(typeof firstName)// undefined untill assigend a value

//null
let secondName = null;
console.log(secondName)//null
//it is a bug in javascript typeof null is object
//can not rectify due to many people already used this 
console.log(typeof secondName) //object

//BigInt
let number =  123;
console.log(typeof number)
console.log(Number.MAX_SAFE_INTEGER) //max length integer possible
let bigNumber  = BigInt(123);
console.log(bigNumber) 
console.log(typeof bigNumber) 
let bigNumber1 = 123n;
console.log(bigNumber1) 
console.log(typeof bigNumber1) 
console.log(bigNumber+bigNumber1)


//Symbol 
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log( sym2 === sym3)//false always unique for same value
console.log( sym1, sym2, sym3)