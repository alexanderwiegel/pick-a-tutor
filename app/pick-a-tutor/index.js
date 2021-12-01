const app = require('express')();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Hello world! Node.js version is ${process.version}`);
})

app.listen(PORT);
console.log(`Listening on port ${PORT}`);