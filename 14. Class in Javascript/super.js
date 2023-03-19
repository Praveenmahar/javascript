//New

// 1) creates empty object within scope
// 2) returns object within scope
// 3) assigns prototype to __proto__ 

class Person
{
    constructor(firstName, age, someother)
    {
        this.firstName =  firstName;
        this.age =  age;
        this.someother =  someother;
    } 

    about(){
        let $string = `name is ${this.firstName}`;
        $string += ` and age is ${this.age}`;
        if(typeof this.someother !== 'undefined')
            $string += ` and ${this.someother}`;
            
        return $string;
    }
}


class User extends Person
{
    constructor(firstName, age, test, someother)
    {
        super( firstName, age, someother );
        this.test = test;
    } 
    testFunc()
    {
        return this.test;
    }
}

const user1 = new User("praveen",18,"chememe")
const user2 = new User("kanta",17,undefined,"something")
console.log(user1.testFunc())
console.log(user2.about())