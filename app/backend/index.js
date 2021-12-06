const app = require('express')();
const User = require('./db/model/User');

const PORT = 3001;

/* Add headers that allow access to the resource */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => {
    res.send(`Hello world! Node.js version is ${process.version}`);
})

app.get('/api/users', (async (req, res) => {
    res.json(await User.asJson());
}))

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
