const express = require('express')
const fs = require('fs')
const _ = require('lodash')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const blogRoutes = require('./routes/blogRoutes')
//to connect to mongoDB
const dbURI = 'mongodb+srv://krishna:krishna@nodetuts.vxg2vmj.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser : true , useUnifiedTopology: true })
.then(()=>{
    console.log('connected to db')
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})

//register view engine
app.set('view engine', 'ejs')


// app.use((req, res, next) => {
//     console.log('New request made:');
//     console.log('host: ' , req.hostname)
//     console.log('path: ' , req.path)
//     console.log('method: ' , req.method)
//     next();
// }); 
//express doesnot know what to proceed with after running the above middleware
//so we use the next() mehtod to make it do so

// middleware & static files
app.use(express.static('public'))

// for the post request from the form at create.ejs to be readable
// for parsing application/xwww-
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'));


// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title: 'Second Blog',
//         snippet:'A new blog to add',
//         body:'This is gonna work for sure hehe'
//     });
//     //blog is a object and Blog() is a constructor
//     blog.save() // we apply save method on the object instance blog
//     //this save method returns us a promise/result 
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.get('/' , (req , res) => {
    // res.render('index', {title : 'Home'});
    res.redirect('/blogs')
})

app.get('/about' , (req , res) => {
    // res.sendFile('./views/about.html' , {root : __dirname})
    res.render('about', {title : 'About'})
})

//blog routes
// app.use(blogRoutes)
//can scope out the above by the below and in blogRoutes replace '/blogs' with '/'
app.use('/blogs' , blogRoutes)

//404 page
app.use((req,res) =>{
    res.status(404).render('404', {title : 'Page not Found'})
})


