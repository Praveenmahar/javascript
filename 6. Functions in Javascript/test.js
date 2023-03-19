function findTarget(array,target)
{
    if(!Array.isArray(array))
        return -1;
    for(i=0;i<array.length;i++)
    {
        if(array[i] === target)
            return i;
    }
    return -1;
}
const arrayNumbers = [1,2,5,8,10,13]; 
// const arrayNumbers = "hello"; 
console.log(findTarget(arrayNumbers,8))

//function expression
const addNumbers =  function (num1,num2)
    {
        return num1+num2;
    }
console.log(addNumbers(2,4))

let sum =  (...theArgs) => {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
console.log(sum(2,4,5,23))

