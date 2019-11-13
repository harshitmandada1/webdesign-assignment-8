'use strict';
const mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

/**
 * Returns an array of Todo object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function () {
    const promise = Todo.find().exec();
    return promise;
};

/**
 * Saves and returns the new Todo object.
 *
 * @param {Object} Todo {Todo object}
 */
exports.save = function (todo) {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};


/**
 * Updates and returns the Todo object.
 *
 * @param {Object} Todo {Todo object}
 */
exports.update = function (todo) {
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};

/**
 * Deletes the Todo object matching the id.
 *
 * @param {string} TodoId {Id of the Todo object}
 */
exports.delete = function (TodoId) {
    const promise = Todo.remove({_id: TodoId});
    return promise;
};

