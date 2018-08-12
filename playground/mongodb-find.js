// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if (err) {
      console.log('Unable to connect to Mongo DB server');
   }
   console.log('Connected to MongoDB Server');
   
   db.collection('Users').find({name: 'Italo'}).toArray().then((docs) => {
      console.log('Users: ');
      console.log(JSON.stringify(docs, undefined, 2))
      
   }, (err) => {
      console.log('Unable to fetch users', err)
   })


   db.collection('To-Dos').find().count().then((count) => {
      // console.log(`To-dos count: ${count}`);
      
   }, (err) => {
      console.log('Unable to fetch to-dos', err)
   })

   // db.close();
});

