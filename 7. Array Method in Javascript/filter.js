
//filter
const numbers = [1,2,3,4,5,6,7];

const newNumbers = numbers.filter(function(value,index){
    return value < 5
})
console.log(newNumbers)