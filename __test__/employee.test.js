const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an instance of the class Employee', () => {
        let testClass = new Employee('Tom', 7, 'tom@test.com')
        expect(typeof testClass).toBe('object')
    });

    it('should set the name of the employee properly in the employee class', () => {
        let testName = 'David';
        let testClass = new Employee(testName, 7, 'some@email.com')
        expect(testClass.name === testName).toBe(true)
    });

    it('should set the id of the employee properly in the employee class', () => {
        let testId = 12;
        let testClass = new Employee('John', testId, 'some@email.com')
        expect(testClass.id === testId).toBe(true)
    });

    it('should set the email of the employee properly in the employee class', () => {
        let testEmail = 'new@email.com';
        let testClass = new Employee('John', 7, testEmail)
        expect(testClass.email === testEmail).toBe(true)
    });

    it('should retrieve the name of the employee properly using the .getName method', () => {
        let testName = 'David';
        let testClass = new Employee(testName, 7, 'some@email.com')
        expect(testClass.getName() === testName).toBe(true)
    });

    it('should retrieve the id of the employee properly using the .getId method', () => {
        let testId = 12;
        let testClass = new Employee('John', testId, 'some@email.com')
        expect(testClass.getId() === testId).toBe(true)
    });

    it('should retrieve the email of the employee properly using the .getEmail method', () => {
        let testEmail = 'new@email.com';
        let testClass = new Employee('John', 7, testEmail)
        expect(testClass.getEmail() === testEmail).toBe(true)
    });

    it('should retrieve the role of the employee properly using the .getRole method', () => {
        let testClass = new Employee('John', 7, 'some@email.com')
        expect(testClass.getRole() === 'Employee').toBe(true)
    });
});