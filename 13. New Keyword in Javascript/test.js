//New

// 1) creates empty object within scope
// 2) returns object within scope
// 3) assigns prototype to __proto__ 


function createUser(firstName, age, someother)
{
    this.firstName =  firstName;
    this.age =  age;
    this.someother =  someother;
}

createUser.prototype.about = function()
{
    let $string = `name is ${this.firstName}`;
    $string += ` and age is ${this.age}`;
    if(typeof this.someother !== 'undefined')
        $string += ` and ${this.someother}`;
        
    return $string;
};

const user1 = new createUser("praveen",18)
const user2 = new createUser("kanta",17,"something")
console.log(user1.about())
console.log(user2.about())