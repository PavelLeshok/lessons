const express = require("express");
const bodyParser = require("body-parser"); // parser
const Post = require('./models/post')
const path = require('path');
const app = express();

app.set('view engine', 'ejs'); // templates
app.use(bodyParser.urlencoded({extended: true})); // parser
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static('node-modules', 'jquery', 'dist'))

app.get('/qwe', (req, res) => {
    Post.find({}).then(
        posts => res.render('index', {posts : posts})
    )
});


app.get('/', (req, res) => res.sendFile(__dirname + '/registration.html'));
app.get('/table', (req, res) => res.sendFile(__dirname + '/table.html'));


app.post('/', (req, res) => {
    const {billType, userName, userSurname, passportID} = req.body;
    console.log(req.body)
    Post.create({
        billType: billType,
        userName: userName,
        userSurname: userSurname,
        passportID: passportID
    }).then( post => console.log(post.userName))

});


module.exports = app;

