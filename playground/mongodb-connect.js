// DOCUMENTAÇÃO OFICIAL DA API: http://mongodb.github.io/node-mongodb-native/3.1/api/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => { // Esse método recebe 2 argumentos: O primeiro é uma string, 
// a URL de onde a base de dados está (pode ser local ou remota). O segundo argumento é uma função callback
// o callback será disparado se a conxão tiver sido feita ou nao.
   if (err) {
      console.log('Unable to connect to Mongo DB server');
   }
   console.log('Connected to MongoDB Server');
   
   db.collection('To-Dos').insertOne({
      text: 'Something to do',
      completed: false
   }, (err, result) => {
      if (err) {
         return console.log('Unable to insert to-do', err);
      }
      console.log(JSON.stringify(result.ops));
      
   });
    

   db.collection('Users').insertOne({
      name: 'Italo',
      age: 20,
      location: 'Riacho Fundo'
   }, (err, result) => {
      if (err) {
         return console.log('Unable to insert to-do', err);
      }
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
   })
   db.close();
}); 