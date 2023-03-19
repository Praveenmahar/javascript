//Map
//store data
//iterable
//also has its own method
//No index based access
//order is not guarnteed
//Unique items only string-number ( can have duplicate arrays)
const person1 = {name:"Praveen1",age:15}

let extraInfo = new Map();
extraInfo.set(person1,{something:"else"})

console.log(extraInfo.get(person1).something)