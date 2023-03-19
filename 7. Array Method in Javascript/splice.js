//splice 
//start delete-untill insert-new-items n number 
const userCart = [
    {id:1,amount:10},
    {id:2,amount:20},
    {id:3,amount:30},
    {id:4,amount:40},
]
userCart.splice(2,2,{id:32,amount:56},{id:31,amount:57}) //updates itself
console.log(userCart)