const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

// used for req.body otherwise it'll be undefined
var bodyParser = require('body-parser')

// parse application/x-www-contact-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance',{useNewUrlParser:true,useUnifiedTopology: true})


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'html') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{

    // this is an object
    const params = {}

    res.sendFile(__dirname + "/views/home.html");
})

app.get('/articles', (req, res)=>{
    res.sendFile(__dirname + "/views/articles.html");
})

app.get('/blogs', (req, res)=>{
    res.sendFile(__dirname + "/views/blogs.html");
})

app.get('/humour', (req, res)=>{
    res.sendFile(__dirname + "/views/humour.html");
})

app.get('/music', (req, res)=>{
    res.sendFile(__dirname + "/views/music.html");
})

app.get('/books', (req, res)=>{
    res.sendFile(__dirname + "/views/books.html");
})

app.get('/yoga_meditation', (req, res)=>{
    res.sendFile(__dirname + "/views/yoga_meditation.html");
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
