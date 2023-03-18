//Arrays are reference data types

//reference data types are stored in heap with address in stack 0x11 pointer

const fruits = ["apple","banana"];
const fruits1 = fruits;

console.log(fruits)

fruits.push("grapes")
console.log(fruits1); // https://prnt.sc/NSf5HK_tD5tr
//Value is updated because of refrence data types

//premitive data types are stored in stack 

let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50

//https://prnt.sc/PVlJ_ocHdv5d

//Value not updated because it is a primitive data type

//Methods of array 

//some popular methods in  array

fruits[5] = "mango";
console.log(fruits); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6


//Array destructring
const newfruits =  ['apple', 'banana', 'grapes', 'mango']
let [fruit1,fruit2,...otherfruits] = newfruits;

console.log(fruit1, fruit2, otherfruits,otherfruits.length) 
console.log(fruit1, fruit2, otherfruits,otherfruits.length) 
//otherfruits length is still 4

//fruits =  ['apple', 'banana', 'grapes', 'mango']
let [fruit11, ,fruit21] = fruits;
console.log( fruit11, fruit21 )

//