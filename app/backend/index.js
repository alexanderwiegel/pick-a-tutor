const app = require("express")();
const endpoints = require("./endpoints/base");

// TODO: probably move somewhere else
require("./db/associations");

app.use(endpoints);

app.listen(3001);
console.log("Listening on port 3001");
