//find 
//finds first occurence in array

const userCart = [
    {id:1,amount:10},
    {id:2,amount:20},
    {id:3,amount:30},
    {id:4,amount:40},
]
const n2 = userCart.find((cart) => cart.id === 3)
console.log(n2)