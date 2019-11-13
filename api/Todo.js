const mongoose = require('mongoose');

// Define schema for todo items
const todoSchema = new mongoose.Schema({

  title: {
    type: String,
    required: "title is required"
},
/**
 * Todo created date.
 */
createdDate: {
    type: Date,
    default: Date.now
},
/**
 * Todo content.
 */
content: {
    type: String
},
/**
 * Last modified date.
 */
modifiedDate: {
    type: Date,
    default: Date.now
}
}, {
versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
todoSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
todoSchema.set('toJSON', {
  virtuals: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;