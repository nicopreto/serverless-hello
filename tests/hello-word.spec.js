const helloWorld = require('../index');

describe('HelloWorld', () => {

    it('should return a 200 status code', () => {
        return helloWorld.handler({ name: 'nico' }).then(data => expect(data.statusCode).toBe(200));
    });

    it('should return the correct message', () => {
        return helloWorld.handler({ name: 'nico'}).then(data => expect(JSON.parse(data.body).message).toBe('hello nico!'));
    });
});
