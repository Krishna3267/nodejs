//import express
const express = require('express')

//express app instantiate
const app = express()

//register view engine
app.set('view engine' , 'ejs')

// let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`


//create a server and listen to requests
app.listen(3000)

//respond to requests
//for get requests 
app.get('/' , (req,res) => {
    //1. automatically infers the type of content we are sending as a response
    // so booof! no need to setHeaders for context
    //2. No need to manually set statusCode either 
    // res.send('<p>Home page</p>');

    //sendFile requires the absolute path of the file to be sent
    // so if we dont sepcify the dir_name as an arg, it will assume it to be the root dir of the computer i.r /krish
    // __dirname is the directory this app.js lies in
    res.sendFile('./views/index.html' , {root : __dirname})
});

app.get('/about' , (req,res) => { 
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html' , {root : __dirname})
});

//redirect
app.get('/about-us' , (req,res) => { 
    // res.send('<p>About page</p>');
    res.redirect('/about')
});


//404 page -- put this at the end 
//use is for middleware -- use it for every single request. But if a response is sent before itslef, it wont fire 
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root : __dirname})

})