const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Stoyan', 26);
        expect(spy).toHaveBeenCalledWith('Stoyan', 26);
    });

    it('should call saveUser with user object', () => {
        var email = 'stoyan.berov@gmail.com';
        var password = '123456'

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});