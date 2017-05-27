var db = require('./db').db;

module.exports.handleSignup = (email, password) => {
    // Check if email already exists

    db.saveUser({
        email: email,
        password: password
    });

    // Send the welcome email
};