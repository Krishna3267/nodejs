
const Blog = require('../models/blog')

const blog_index = (req,res)=>{
    Blog.find().sort({createdAt : -1}) // here find not applied on any instance of Blog but on Blog model itself
    .then((result) => {
        res.render('index', {title: 'All blogs', blogs: result})
    })
    .catch((err)=>{
        console.log(err)
    })
}

const blog_post = (req,res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })
} 

const blog_details = (req,res) => {
    Blog.findById(req.params.id_from_url)
    .then((result) => {
        res.render('details' , {blog : result , title: 'Single blog'})
    })
    .catch((err)=>{
        res.status(404).render('404' , {title: 'Blog not found'})
        console.log(err);
    })
}

const blog_create_get = (req, res) =>{
    res.render('create', {title : 'Create'})
}

const blog_delete = (req,res) => {
    const id = req.params.id_from_url;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs'});
    })
    .catch((err) => {
        console.log(err)
    })
}
module.exports = {
    blog_index,
    blog_post,
    blog_details,
    blog_create_get,
    blog_delete
}