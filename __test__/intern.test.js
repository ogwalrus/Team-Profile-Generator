const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should set the school info of the intern properly', () => {
        let testSchool = 'Rutgers'
        let testIntern = new Intern('John', 7, 'some@email.com', testSchool)
        expect(testIntern.school === testSchool).toBe(true)
    });

    it('should retrieve the school info of the intern properly using the .getSchool method', () => {
        let testSchool = 'Rutgers'
        let testIntern = new Intern('John', 7, 'some@email.com', testSchool)
        expect(testIntern.getSchool()).toBe(testSchool)
    });

    it('should retireve the role of the intern properly', () => {
        let testIntern = new Intern('John', 7, 'some@email.com', 'Rutgers')
        expect(testIntern.getRole() === 'Intern').toBe(true)
    });
});