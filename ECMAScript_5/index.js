const config = require('./config');
const app = require('./app');
const database = require('./database');

database().then(info => {
    console.log(`Database ${info.host} ${info.port}`);
    app.listen(config.PORT, () => console.log(`App listen on ${config.PORT}`));
}).catch(() => {
    console.log('Unable to connect to database');
})

