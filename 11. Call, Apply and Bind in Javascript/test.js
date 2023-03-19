//Methods
//function inside a object
function about1(arg1, arg2)
{
    let $string = `name is ${this.firstName}`;
    $string += ` and age is ${this.age}`;
    if(typeof this.someother !== 'undefined')
        $string += ` and ${this.someother}`;
    if(typeof arg1 !== 'undefined')
        $string += ` and ${arg1}`;
    if(typeof arg2 !== 'undefined')
        $string += ` and ${arg2}`;
        
    return $string;
}

const person = {
    firstName: "Praveen",
    age: 30,
    about: function()
    {
        let $string = `name is ${this.firstName}`;
        $string += ` and age is ${this.age}`;
        if(typeof this.someother !== 'undefined')
            $string += ` and ${this.someother}`;
            
        return $string;
    }
}
const person1 = {
    firstName: "kanta",
    age: 25,
    someother: "She is lazy"
}

//call
//we can use another object's function with call method by passing this object as another
console.log(person.about.call(person1))
console.log(person.about.call())//need to pass object any

console.log(about1.call(person))
console.log(about1.call(person1,"new","some"))

//apply

// Almost like call but arguments should be passed in array

console.log(about1.apply(person,["new"]))
console.log(about1.apply(person1,["new","some"]))

//bind
//returns a function 
console.log(about1.bind(person,["new"]))
const aboutFunc = about1.bind(person,"new")
const aboutFunc1 = about1.bind(person,"new","extra")
console.log(aboutFunc())
console.log(aboutFunc1())