const app = require('express')();

const PORT = 3001;

let users_example = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        email_verified_at: null,
        password: 'password',
        date_of_birth: new Date('05.08.1985'),
        gender: 0,
        is_student: true,
        is_tutor: true,
        is_admin: true,
        mobile_country_code: '+1',
        mobile_no: '123456789',
        house_no: '18B',
        street_name: 'Bahnhofstr',
        city: 'Fulda',
        state: 'Hessen',
        country: 'Germany',
        status: null,
        confirmation_code: null,
        created_at: 1638528125,
        updated_at: 1638529125,
        deleted_at: null,
    },
    {
        id: 2,
        first_name: 'Johnny',
        last_name: 'Doh',
        email: 'johnnyd@example.com',
        email_verified_at: null,
        password: 'password',
        date_of_birth: new Date('08.05.1995'),
        gender: 0,
        is_student: true,
        is_tutor: false,
        is_admin: false,
        mobile_country_code: '+39',
        mobile_no: '123456789',
        house_no: '8',
        street_name: 'Leipzigerstr',
        city: 'Fulda',
        state: 'Hessen',
        country: 'Germany',
        status: null,
        confirmation_code: null,
        created_at: 1638530000,
        updated_at: 1638531000,
        deleted_at: null,
    }
]

/* Add headers that allow access to the resource */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => {
    res.send(`Hello world! Node.js version is ${process.version}`);
})

app.get('/api/users', ((req, res) => {
    res.json(users_example);
}))

app.listen(PORT);
console.log(`Listening on port ${PORT}`);