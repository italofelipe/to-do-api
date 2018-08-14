const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [{
   _id: new ObjectID(),
   text: 'Fist test todo'
}, {
   _id: new ObjectID(),
   text: 'Second test todo'
}];

beforeEach((done) => { // Permite rodar alguns códigos antes de cada teste ser executado
   Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
   }).then(() => done());
});

describe('POST /todos', () => { // Esse Describe vem da biblioteca mocha, assim como a função abaixo "it"
   it('Should create a new to-do', () => {
      var text = 'Some text here';

      request(app) // esse request vem da biblioteca Supertest, importada acima
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

            Todo.find({text}).then(() => {
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
               expect(todos.length).toBe(2);
               done();
            }).catch((e) => done(e))
      });
   });
});

describe('GET To-Dos', () => {
   it('Should get all to-dos', (done) => {
      request(app)
         .get('/todos')
         .expect(200)
         .expect((res) => {
            expect(res.body.todos.length).toBe(2);
         })
      .end(done);
   });
});

describe('Get /todos/:id', () => {
      it('Should return to-do doc', (done) => {
				request(app)
					.get(`/todos/${todos[0]._id.toHexString()}`)
					.expect(200)
					.expect((res) => {
						expect(res.body.todo.text).toBe(todos[0].text);
					
					})
					.end(done)
			});
			
	it('Should return 404 if to-do not found', (done) => {
		var hexID = new ObjectID().toHexString();
		request(app)
			.get(`/todos/${hexID}`)
			.expect(404)
			.end(done)
	});

	it('Should return 404 for non-object ids', (done) => {
		request(app)
			.get('/todos/123abc')
			.expect(404)
			.end(done);
	});
});