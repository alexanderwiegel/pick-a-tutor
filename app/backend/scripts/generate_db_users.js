const User = require('../db/model/User');

async function run() {
    await User.sync({force: true});

    await User.build({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password',
        dateOfBirth: new Date('05.08.1985'),
        gender: 0,
        isStudent: true,
        isTutor: true,
        isAdmin: true,
        status: 0,
    }).save();

    await User.build({
        firstName: 'Johnny',
        lastName: 'Doh',
        email: 'johnnyd@example.com',
        password: 'password',
        dateOfBirth: new Date('08.05.1995'),
        gender: 0,
        isStudent: true,
        isTutor: false,
        isAdmin: false,
        status: 0,
    }).save();

    /* Example of soft-delete:
    let user = await User.findOne({where: {firstName: 'John'}});
    await user.destroy();
    */
}

run().then(() => console.log('Users were created'));
