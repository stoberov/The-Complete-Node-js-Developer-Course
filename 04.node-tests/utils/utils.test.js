const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#random', () => {
        it('should square a number', () => {
            var res = utils.square(5);

            expect(res).toBe(25).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9).toBeA('number');
                done();
            });
        });

        it('should verify first and last names are set', () => {
            var user = {
                age: 25,
                location: 'Gabrovo'
            }

            var res = utils.setName(user, 'Stoyan Berov');

            expect(res).toInclude({
                firstName: 'Stoyan',
                lastName: 'Berov'
            }).toBeA('object');
        });
    });
});