const Person = function (fName, lName,age,hobbies=[]){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.hobbies = hobbies;
} 

Person.prototype.getBio = function(){
    let bio = `${this.firstName} ${this.lastName} is ${this.age}.`

    this.hobbies.forEach((hobby)=> bio += ` ${this.firstName} likes ${hobby}.`);
    return bio;
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const person1 = new Person('Bhavik','Barad',21, ['reading','writing','playing cricket']);
console.log(person1.getBio());
const person2 = new Person('Chirag','Makwana',22);
person2.setName('Chirag Sharma');
console.log(person2.getBio());