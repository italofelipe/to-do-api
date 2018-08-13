const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => { // Permite rodar alguns códigos antes de cada teste ser executado
   Todo.remove({}).then(() => done());
}); 


describe('POST /todos', () => {
   it('Should create a new to-do', () => {
      var text = 'Some text here';

      request(app)
         .post('/todos')
         .send({ text })
         .expect(200)
         .expect((res) => {
            expect(res.body.text).toBe(text);
         })
         .end((err) => {
            if (err) {
               return done(err);
            }

            Todo.find().then(() => {
               expect(todos.length).toBe(1);
               expect(todos[0].text).toBe(text);
               done();
            }).catch((e) => done (e))
         });
   });

   it('Should not create a To-Do with invalid body data', (done) => {
      request(app)
         .post('/todos')
         .send({})
         .expect(400)
         .end((err, res) => {
            if (err) {
               return done(err);
            }
            Todo.find().then((todos) => {
               expect(todos.length).toBe(0);
               done();
            }).catch((e) => done(e))
      });
   });






});