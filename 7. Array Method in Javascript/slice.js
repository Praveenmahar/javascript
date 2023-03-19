//slice
//creates new array with 
//start, end
const userCart = [
    {id:1,amount:10},
    {id:2,amount:20},
    {id:3,amount:30},
    {id:4,amount:40},
]
const n1 = userCart.slice(0).sort((a,b) => b.amount - a.amount)
console.log(n1)