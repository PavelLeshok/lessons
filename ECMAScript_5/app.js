const express = require("express");
const bodyParser = require("body-parser"); // parser

const app = express();

app.set('view engine', 'ejs'); // templates
app.use(bodyParser.urlencoded({extended: true})); // parser
app.use(express.static('public'));

app.get('/qwe', (req, res) => res.render('index', {arr : arr}));
app.get('/', (req, res) => res.sendFile(__dirname + '/registration.html'));

app.post('/', (req, res) => {
    console.log(req.body);
        arr.push(req.body.userName)
    res.redirect('/');
    console.log(arr);
});


module.exports = app;

