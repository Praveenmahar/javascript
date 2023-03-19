//Methods
//function inside a object

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
person.firstName = "Praveen Kumar";//update value of object key 
person.age = 29;//update value of object key 
person.someother = "he is chill kinda guy"; 
console.log(person.about())

//Big example


