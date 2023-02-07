const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should set the github info of the engineer properly', () => {
        let testGithub = 'github.com/testuser'
        let testEngineer = new Engineer('John', 7, 'some@email.com', testGithub)
        expect(testEngineer.github === testGithub).toBe(true)
    });

    it('should retrieve the github info of the engineer properly using the .getGithub method', () => {
        let testGithub = 'github.com/testuser'
        let testEngineer = new Engineer('John', 7, 'some@email.com', testGithub)
        expect(testEngineer.getGithub() === testGithub).toBe(true)
    });

    it('should retireve the role of the engineer properly', () => {
        let testEngineer = new Engineer('John', 7, 'some@email.com', 'github.com/testuser')
        expect(testEngineer.getRole() === 'Engineer').toBe(true)
    });
});