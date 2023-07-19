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
//sub class created
class Students extends Person{
    constructor(firstName, lastName, age, grades,hobbies){
        super(firstName,lastName,age,hobbies)
        this.grades = grades;
    }
    //method override
    getBio(){
        let status;
        if(this.grades >= 70 ){
            status = 'Passed';
        }else{
            status = 'Failed';
        }

        return `${this.firstName} ${this.lastName} is ${status}.`
    }
    //new method for sub class
    updateGrade(grade){
        this.grades += grade;
        return `${this.firstName} ${this.lastName} - Final Grade = ${this.grades}`;
    }
}

const me = new Students('Bhavik','Barad',22,87,['reading','writing']);
console.log(me);
console.log(me.getBio());
console.log(me.updateGrade(3));
console.log(me.updateGrade(-5));