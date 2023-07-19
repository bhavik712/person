//use of get & set 
// 1.storing names in lower case 
//2.storing given all the names to object property 

const details ={
    names :[],
    get name(){
        return this._name;
    },

    set name(name){
        this._name = name.toLowerCase();
        this.names.push(this._name);
        
    }
}

details.name='Bhavik';
details.name='Chirag';

console.log(details.names);