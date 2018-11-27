const express = require("express");
const bodyParser = require("body-parser"); // parser
const Post = require('./models/post')
const path = require('path');
const mongoose = require("mongoose");
const config = require('./config');


//database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.connection
    .on('erroe', error => console.log(error))
    .on('close', () => console.log('Database connection closed'))
    .once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Database ${info.host} ${info.port}`);
    });
mongoose.connect(config.MONGO_URL, {useMongoClient: true});

//express
const app = express();


//sets and uses
app.set('view engine', 'ejs'); // templates
app.use(bodyParser.urlencoded({extended: true})); // parser
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static('node-modules', 'jquery', 'dist'))



//routers
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

app.listen(config.PORT, () => console.log(`App listen on ${config.PORT}`))

module.exports = app;

