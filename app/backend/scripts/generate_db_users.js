const User = require('../db/model/User');

async function run() {
    await User.sync({force: true});

    await User.build({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        emailVerifiedAt: null,
        password: 'password',
        dateOfBirth: new Date('05.08.1985'),
        gender: 0,
        isStudent: true,
        isTutor: true,
        isAdmin: true,
        mobileCountryCode: '+1',
        mobileNo: '123456789',
        houseNo: '18B',
        streetName: 'Bahnhofstr',
        city: 'Fulda',
        state: 'Hessen',
        country: 'Germany',
        status: null,
        confirmationCode: null,
    }).save();

    await User.build({
        firstName: 'Johnny',
        lastName: 'Doh',
        email: 'johnnyd@example.com',
        emailVerifiedAt: null,
        password: 'password',
        dateOfBirth: new Date('08.05.1995'),
        gender: 0,
        isStudent: true,
        isTutor: false,
        isAdmin: false,
        mobileCountryCode: '+39',
        mobileNo: '123456789',
        houseNo: '8',
        streetName: 'Leipzigerstr',
        city: 'Fulda',
        state: 'Hessen',
        country: 'Germany',
        status: null,
        confirmation_code: null,
    }).save();
}

run().then(() => console.log('Users were created'));
