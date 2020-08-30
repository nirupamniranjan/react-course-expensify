import * as firebase from 'firebase';
import expnses from '../tests/Fixtures/expenses'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENTID


  };
 //console.log(firebaseConfig)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const database = firebase.database();

  export {firebase,database as default};


//   database.ref('expenses').on('child_removed',(snapshot)=>{
    
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_changed',(snapshot)=>{
    
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
    
//     console.log(snapshot.key,snapshot.val());
// })
//   database.ref('expenses').once('value').then((snapshot)=>{
//       const expenses =[];
//       snapshot.forEach((childSnapshot)=>{
//         expenses.push({
              
//               ...childSnapshot.val(),
//               id:childSnapshot.key
//           });
//       })
//       console.log(expenses);
//   })

//    database.ref('expenses').push(expnses[0]);
//    database.ref('expenses').push(expnses[1]);
//    database.ref('expenses').push(expnses[2]);
//   database.ref().set({
//       name:'Nirupam',
//       age : 30,
//       isSingle : true,
//       stressLevel:6,
//       job:{
//           title:'Software Engineer',
//           company:'Google'
//       }
//       ,
//        location:{
//            city:'Pune',
//            country:'INDIA'
//        }

//   }).then(()=>{
//       console.log('Data is Saved') 
//   }).catch((error)=>{
//       console.log('This failed',error)
//   });

//   database.ref('/attribute').set({
//       heignt:'5\'9',
//       weight: '68'

//   })

//   database.ref().update({
//       'job/company':'Amazon',
//        stressLevel:9,
//        'location/city':'Bangalore'

//   })
  //firebase.database().ref().set("This is a stirng data")

  //database.ref('/isSingle').remove()

//   database.ref()
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val)
//   }).catch((e)=>{
//    console.log('Error fetching data',e)
// //   })


// database.ref()
// .on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(val.name +' is a '+ val.job.title +' at '+val.job.company)
//   })


//   setTimeout(()=>{
//       database.ref('name').set('test1')
//   },3500)

// const note =[{
//     id:'12',
//     title:'Fire Note!',
//     body:'This is my note'
// },
// {
//     id:'13',
//     title:'Fire Noteeee!',
//     body:'This is my noteeee'
// }
// ]

// database.ref().set(note);