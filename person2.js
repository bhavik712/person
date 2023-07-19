class Person{
    constructor(firstName,lastName,age,hobbies=[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbies = hobbies;
    } 

    getBio(){
        let bio = `${this.firstName} ${this.lastName} is ${this.age}.`;

        this.hobbies.forEach((hobby)=>{
            bio += ` ${this.firstName} likes ${hobby}`;
        })

        return bio;
    }

    setName(fullName){
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

}

const person1 = new Person('Bhavik','Barad',22,['reading','writing']);

console.log(person1.getBio());
person1.setName('Rohit Sharma');
console.log(person1.getBio());

console.log(person1.firstName);
