const message = require('./message')

test('should return a string', () => {
    expect(message()).toBe('Hello World')
})