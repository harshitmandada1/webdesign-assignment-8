'use strict';
//import Todo service.
const TodoService = require('../services/Todo-service');
/**
 * Returns a list of Todo in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (todos) => {
        response.status(200);
        response.json(todos);
    };
    TodoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new Todo with the request JSON and
 * returns Todo JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    TodoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * Updates and returns a Todo object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    TodoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a Todo object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'Todo Successfully deleted'
        });
    };
    TodoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};