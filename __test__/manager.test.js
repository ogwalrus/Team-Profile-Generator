const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should set the office number of the manager properly', () => {
        let testNumber = 777
        let testManager = new Manager('John', 7, 'some@email.com', testNumber)
        expect(testManager.office === testNumber).toBe(true)
    });

    it('should retrieve the office number of the manager properly using the .getOffice method', () => {
        let testNumber = 777
        let testManager = new Manager('John', 7, 'some@email.com', testNumber)
        expect(testManager.getOffice() === testNumber).toBe(true)
    });

    it('should retireve the role of the Manager properly', () => {
        let testManager = new Manager('John', 7, 'some@email.com', 777)
        expect(testManager.getRole() === 'Manager').toBe(true)
    });
});