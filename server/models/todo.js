var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
   text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true // Essa propriedade remove todos os espaços em branco ao processar valores
   },
   completed: {
      type: Boolean,
      default: false
   },
   completedAt: {
      type: Number,
      default: null
   }
});

module.exports = { Todo };