console.log("Welcome Back");
// trying to see prototype chain 
// person --> prototype (object) -->null
const person= {
    name: 'Bhavik'
}

console.log(person);

//teams --> prototype (array) --> prototype(object)-->null
teams = ['CSK','Mi'];
console.log(teams);

//string, number & booleans have object wrappers

const city = 'Ahmedabad'; //displaying just primitive string 
console.log(city.split('')); //when we try to access the meathod it converts into an object 

//string with null primitive value
// new string - place --> prototype(string) -->prototype(object)
const place = new String('Bhavik');
String.prototype.SayHello = function (){
    console.log("Say hello");
}
console.log(place);

// added a property to place like length 
place.AddName = 'Shivdhara Resort';
console.log(place)
//null and undefined can't be an object 