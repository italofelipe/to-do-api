// DOCUMENTAÇÃO OFICIAL DA API: http://mongodb.github.io/node-mongodb-native/3.1/api/
// PARA MAIS INFORMAÇÕES, PESQUISAR POR "MONGO DB UPDATE OPERATORS"


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if (err) {
      console.log('Unable to connect to Mongo DB server');
   }
   console.log('Connected to MongoDB Server');

   // Find one and update



//    db.collection('To-Dos').findOneAndUpdate({
//       _id: new ObjectID('5b7093780fb1bcd2fdbcaab7')
//    }, {
//          $set: {
//             completed: true
//          }
//       }, {
//          returnOriginal: false
//       }).then((result) => {
//          console.log(result);
//       });
   
// 


/* ------ DESAFIO: LISTAR UMA TAREFA(TO-DO) DENTRO DO DOCUMENTO 'To-Dos', 
   --------E ALTERAR ALGUMA DE SUAS PROPRIEDADES E IMPRIMIR NO CONSOLE */

db.collection('To-Dos').findOneAndUpdate({
   _id: new ObjectID('5b7093780fb1bcd2fdbcaab7')
}, {
      $set: {
         text: 'Pegar essa Patrícia de jeito, ela parece uma delicinha'
      }
   }, {
      returnOriginal: false
   }).then((result) => {
      console.log(result);
      
   })

   // db.close()
});