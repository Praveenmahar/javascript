//Prototype

//gives free space or object while creating a function
//we can treat prototype as a object


function createUser(firstName, age, someother)
{
    let user = Object.create(createUser.prototype);
    //also known as __proto__
    user.firstName =  firstName;
    user.age =  age;
    user.someother =  someother;
    // user.about =  function(){
    //     return "something"
    // };
    return user;
}

createUser.prototype.about = function()
{
    let $string = `name is ${this.firstName}`;
    $string += ` and age is ${this.age}`;
    if(typeof this.someother !== 'undefined')
        $string += ` and ${this.someother}`;
        
    return $string;
};

const user1 = createUser("praveen",18)
const user2 = createUser("kanta",17,"something")
console.log(user1.about())
console.log(user2.about())