const Plane = require('../Plane');
const Person = require('../Person');

describe('Plane Class', () => {
    test('should assign company, origin, and destination correctly', () => {
        const plane = new Plane('JE2', 'LON', 'MAN');
        expect(plane.company).toBe('JET2');
        expect(plane.origin).toBe('LON');
        expect(plane.destination).toBe('MAN');
    });

    test('should initialize passengers as an empty array', () => {
        const plane = new Plane('JET2', 'MAN');
        expect(plane.getPassengers()).toEqual([]);
    });

    test('should add a person to the passengers array', () => {
        const plane = new Plane('JET2', 'MAN');
        const person = new Person('Ben');
        plane.addPassenger(person);
        expect(plane.getPassengers()).toContain(person);
    });
});

