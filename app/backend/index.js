const app = require("express")();
const endpoints = require("./endpoints/base");

app.use(endpoints);

app.listen(3001);
console.log("Listening on port 3001");
