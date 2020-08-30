const { setTimeout } = require("timers")

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
 //   resolve('This is my resolved data')
    reject('There was an error!')

     },1500)
})
console.log('before');
promise.then((data)=>{
 console.log(data);
}).catch((error)=>{
    console.log(error);
});

//console.log('after');