// DOCUMENTAÇÃO OFICIAL DA API: http://mongodb.github.io/node-mongodb-native/3.1/api/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
   if (err) {
      console.log('Unable to connect to Mongo DB server');
   }
   console.log('Connected to MongoDB Server');
   
   // Delete Many
   //db.collection('To-Dos').deleteMany({ text: 'Eat lunch' }).then((result) => {
     // console.log(result);
      
   // });

   // Delete One

   // db.collection('To-Dos').deleteOne({ text: 'Eat lunch' }).then((result) => {
   //    console.log(result);
      
   // }) 

   // fineOneAndDelete

   // db.collection('To-Dos').findOneAndDelete({ completed: false }).then((result) => {
   //    console.log(result);
      
   // });


   /*  ---- RESULOÇÃO DA CHALLENGE: DELETAR ELEMENTOS IGUAIS USANDO O DELETE MANY, E DEPOIS, 
       ---- USAR O findOneAndDelete PARA DELETAR UM USER DO DOCUMENTO 'USERS' PELO SEU ID*/

   db.collection('Users').deleteMany({ name: 'Italo' }).then((result) => {
      console.log(result);
      
   });
   db.collection('Users').findOneAndDelete({ _id: 666 }).then((result) => {
      console.log(result);
      
   })

   // DESAFIO FEITO

   // db.close();
});

