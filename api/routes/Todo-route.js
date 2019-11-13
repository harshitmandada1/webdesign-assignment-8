'use strict';
module.exports = function (app) {
    const TodoController = require('../controllers/Todo-controller');
    //Todo Routes for search and create
    app.route('/todos')
    .get(TodoController.get)
    .post(TodoController.post);

    //Todo Routes for update and delete
    app.route('/todos/:todoId')
    .put(TodoController.put)
    .delete(TodoController.delete);
};
