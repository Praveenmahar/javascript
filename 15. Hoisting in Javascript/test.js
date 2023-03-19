//Hoisting

// Can use varibles before defining 
console.log(firstName);
var firstName = "Praveen";
console.log(firstName);

// Are let and cost hoisted 
// Yes but we have to initialize them earlier

console.log(firstName1);//comment this and error will be gone
//error because firstName1 is not initialized in Global Memory
let firstName1 = "Praveen";//same for const
console.log(firstName1);
