//Set
//store data
//iterable
//also has its own method
//No index based access
//order is not guarnteed
//Unique items only string-number ( can have duplicate arrays)
const names = ["praveen"]
const numbers = new Set([1,2,3])
numbers.add(names)
numbers.add(names)
numbers.delete(2)
console.log(numbers)
console.log(numbers.size) //equals to length