const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

//model name is important. The model is gonna go search for 'Blogs' collection in the db thru this name
// Model name is the singular of the collection name
const Blog = mongoose.model('Blog', blogSchema);

//module.export is the export statement of node
module.exports = Blog;

