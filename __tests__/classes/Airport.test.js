const Airport = require('../Airport');
const Plane = require('../Plane');

describe('Airport Class', () => {
  test('should assign name and planes correctly', () => {
    const airport = new Airport('Manchester International');
    expect(airport.name).toBe('Manchester International');
    expect(airport.getPlanes()).toEqual([]);
  });

  test('should have the correct airportCode', () => {
    expect(Airport.airportCode).toBe('MAN');
  });

  test('should initialize planes as an empty array', () => {
    const airport = new Airport('Manchester International');
    expect(airport.getPlanes()).toHaveLength(0);
  });

  test('should add planes to the planes array', () => {
    const airport = new Airport('Manchester International');
    const plane = new Plane('JET2', 'MAN');
    airport.addPlane(plane);
    expect(airport.getPlanes()).toContain(plane);
  });
});

