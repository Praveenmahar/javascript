class Person
{

    constructor(firstName,lastName , age)
    {
        this.firstName =  firstName;
        this.lastName =  lastName;
        this.age =  age;
    } 

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name)
    {
        let [firstName,lastName] = name.split(" ")
        this.firstName =  firstName;
        this.lastName =  lastName;
    }

}

const person1 = new Person( "Praveen", "Kumar", 29 );
console.log(person1.fullName);
person1.fullName = "Kanta Kumawat";
console.log(person1.fullName);