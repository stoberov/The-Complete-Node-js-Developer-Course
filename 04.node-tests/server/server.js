const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var users = [
        {
            name: 'Stoyan',
            age: 26
        },
        {
            name: 'Maria',
            age: 30
        },
        {
            name: 'Gosho',
            age: 40
        }
    ];

    res.send(users);
});



app.listen(3000, () => {
    console.log('Server is listening on port 3000.');
});

module.exports.app = app;