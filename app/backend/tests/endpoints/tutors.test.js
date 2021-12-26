const supertest = require("supertest");
const app = require("../../endpoints/base");
const User = require("../../db/model/User");
const request = supertest(app);

const encodedPassword =
    "$2a$10$Uvz5XZSYwv/Weix3feQvreyFmVL9XjJzvDBfDSzjDcFWvbl3VDkEW";

let loginData = {};

let user1 = User.build({
    firstName: "student1",
    lastName: "student1",
    email: "user1@example.com",
    password: encodedPassword,
    dateOfBirth: new Date("02.18.1990"),
    gender: User.GENDER.MALE,
    isStudent: true,
    isTutor: false,
    status: 0,
});

let tutor1 = User.build({
    firstName: "some_tutor",
    lastName: "some_tutor",
    email: "tutor1@example.com",
    password: encodedPassword,
    dateOfBirth: new Date("02.18.1990"),
    gender: User.GENDER.MALE,
    isStudent: false,
    isTutor: true,
    status: 0,
});

let tutor2 = User.build({
    firstName: "other_tutor",
    lastName: "other_tutor",
    email: "tutor2@example.com",
    password: encodedPassword,
    dateOfBirth: new Date("02.18.1990"),
    gender: User.GENDER.MALE,
    isStudent: false,
    isTutor: true,
    status: 0,
});

beforeEach(async () => {
    await user1.save();
    await tutor1.save();
    await tutor2.save();

    let response = await request.post("/api/login").send({
        email: "user1@example.com",
        password: "password",
    });
    loginData.email = response.body.email;
    loginData.token = response.body.token;
});

afterEach(async () => {
    await user1.destroy();
    await tutor1.destroy();
    await tutor2.destroy();
});

test("GET all tutors", async () => {
    let response = await request
        .get("/api/tutors")
        .send({ token: loginData.token });

    let firstNames = [];
    response.body.data.forEach((e) => firstNames.push(e.firstName));

    expect(firstNames).not.toContain(user1.firstName);
    expect(firstNames).toContain(tutor1.firstName);
    expect(firstNames).toContain(tutor2.firstName);
});

test("GET tutors with 'some' in their name", async () => {
    let response = await request
        .get("/api/tutors?search=some")
        .send({ token: loginData.token });

    let firstNames = [];
    response.body.data.forEach((e) => firstNames.push(e.firstName));

    expect(firstNames).toContain(tutor1.firstName);
    expect(firstNames).not.toContain(tutor2.firstName);
});

test("GET tutors with 'tutor' in their name", async () => {
    let response = await request
        .get("/api/tutors?search=tutor")
        .send({ token: loginData.token });

    let firstNames = [];
    response.body.data.forEach((e) => firstNames.push(e.firstName));

    expect(firstNames).toContain(tutor1.firstName);
    expect(firstNames).toContain(tutor2.firstName);
});
