// object Destructring

/* const person = {
    name :'Nirupam',
    age :0,
    location:{
        city:'Pune',
        temp:'34'
    }
};

const {name:firstName ='Anonymous',age} = person;

console.log(`${firstName} is ${age}`)

const {temp:temperature,city} = person.location;
if(temperature && city){
console.log(`it's ${temperature} in ${city}`)
}



const book = {
    title : 'ego is the enemy',
    author: 'Rayan Holiday',
    publisher :{
        name : 'Penguin'
    }
};


const {name:publisherName = 'Self-published'} = book.publisher;

console.log(publisherName) */


const address = ['1299 S Juniper Street','Pune','Maharashtra','4811048'];

const [,city,state='Ney York']= address

console.log(`You are in ${city} ${state}`)


const item =['coffee(hot)','$2.00','$2.50','$2.75']

const [name, ,mediumPrice,] = item;

console.log(`A medium ${name} costs ${mediumPrice}`)