// reduce
const userCart = [
    {id:1,amount:10},
    {id:2,amount:20},
    {id:3,amount:30},
    {id:4,amount:40},
]

let totalamount1 = userCart.reduce( (totalAmount, cart) => {
    return totalAmount + cart.amount
},0)
console.log(totalamount1)

const getMax = (a, b) => Math.max(a, b);

console.log([1,5,101, 100].reduce(getMax, 0)); // 100
