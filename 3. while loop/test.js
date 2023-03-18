// syum n numbers

// let num = 10;
// let i = 1;
// let total = 0;
// while(i<=num)
// {
//     total = total+i
//     i++;
// }
// console.log(total)

// for loop
//difference between let and var is var will be accessble outside of loop 
// let will not 

// for (var j = 1; j<=10;j++)
// {
//     console.log(j);
// }
// console.log(`value of j is ${j}`) 

// for (let i = 1; i<=10;i++)
// {
//     if(i == 4)
//     {
//         continue; // takes the script to start of the loop
//     }
//     if(i ==7)
//     {
//         break;//stops the loop execution
//     }
//     console.log(i);
// }

//do while loop
let j = 5 // will run 1 time definatly
do{
    console.log(j);
    j++;
}while(j<=9);

function find_max(nums)
{
    let max_num = Number.NEGATIVE_INFINITY;
    for(let num of nums)
    {
        if(num>max_num)
        {
            max_num = num
        }
    }
    return max_num;
}
console.log(find_max([123,144,193,156,122,143]))
