const User = require("../db/model/User");

require("../db/associations");

const NAMES = [
  "Ben",
  "Leon",
  "Paul",
  "Jonas",
  "Finn",
  "Lukas",
  "Luis",
  "Luca",
  "Noah",
  "Elias",
];
const LASTNAMES = [
  "Ludwig",
  "Böhm",
  "Winter",
  "Kraus",
  "Martin",
  "Schumacher",
  "Krämer",
  "Vogt",
  "Stein",
  "Jäger",
];

async function run() {
  await generateTutors(10);
}

async function generateTutors(n) {
  for (let i = 0; i < n; i++) {
    let name0 = NAMES[Math.floor(Math.random() * NAMES.length)];
    let name1 = LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)];
    let gender = Math.floor(Math.random() * 4);
    await generate_user(name0, name1, gender, true);
  }
}

async function generate_user(name0, name1, gender, isTutor) {
  let email = `${name0}.${name1}@ai.hs-fulda.de`.toLowerCase();
  let isStudent = !isTutor;
  await User.build({
    firstName: name0,
    lastName: name1,
    email: email,
    password: "$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy",
    dateOfBirth: new Date("08.05.1995"),
    gender: gender,
    isStudent: isStudent,
    isTutor: isTutor,
    isAdmin: false,
    status: 0,
  }).save();
}

run().then(() => console.log("Data was added"));
