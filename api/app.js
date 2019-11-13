'use strict';
module.exports = function (app) {
    let TodoModel = require('./models/Todo');

    //Initialize routes
    let TodoRoutes = require('./routes/Todo-route');
    TodoRoutes(app);
};