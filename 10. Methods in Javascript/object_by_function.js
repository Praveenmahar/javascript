//object by function
const userExtra = {
    about: function()
    {
        let $string = `name is ${this.firstName}`;
        $string += ` and age is ${this.age}`;
        if(typeof this.someother !== 'undefined')
            $string += ` and ${this.someother}`;
            
        return $string;
    }
}

function createUser(firstName,age)
{
    let user = {};
    
    user.firstName =  firstName;
    user.age =  age;
    user.about =  userExtra.about; 
    return user;
}

const user1 = createUser("praveen",18)
const user2 = createUser("kanta",17)
console.log(user1.about())
console.log(user2.about())