// Objects 
let obj = { name:"Praveen Kumar", age: 30 };

for(let key in obj) // returns key in array or object
{
    console.log(`${key} is ${obj[key]}`); //if key is dynamic we can get the value with bracket notation 
}

for(let key of Object.keys(obj)) // returns value of array or object
{
    console.log(`${key} is ${obj[key]}`); //if key is dynamic we can get the value with bracket notation 
}


let object1 = "value1";
let object2 = "value2";
let objectkey1 = "key1";
let objectkey2 = "key2";

// print
// { key1:value1,key2:value1}

const newObj = { [objectkey1]:object1, [objectkey2]:object2  } 

console.log(newObj)
console.log(newObj[objectkey2])

//spread operator in objects
let obj1 = { name:"Praveen Kumar", age: 30 };
let obj2 = { village:"Patrora", nationility: "indian" };

const newObjT = { ...obj1, ...obj2, key5:"value5" };
console.log(newObjT)

//Object destructuring

let obj11 = { name:"Praveen Kumar", age: 30 };

let { name, age } = obj11;

console.log( name,age)
//nested destructuring
const users = [
    { name:"Praveen1", age: 27 },
    { name:"Praveen2", age: 28 },
    { name:"Praveen3", age: 29 },
    { name:"Praveen4", age: 30 }
];

let [{name:firstUserName},,,{age:lastUserAge}] = users
console.log(firstUserName,lastUserAge)