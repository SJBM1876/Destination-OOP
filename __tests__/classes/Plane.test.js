const Plane = require(`../classes/Plane.js`)
const Person = require(`../classes/Person.js`)
const { describe, test, expect, beforeEach } = require("@jest/globals");

describe(`Test for Plane class:`, () => {
    
    let plane;

    beforeEach(() => {
        plane = new Plane(`MultiJet`, `John F. Kennedy International`, `London Heathrow`);
    })
    
    test(`Assigns compnay, origin and destination correctly`, () => {
        expect(plane.company).toBe(`MultiJet`);
        expect(plane.origin).toBe(`John F. Kennedy International`);
        expect(plane.destination).toBe(`London Heathrow`);
    })
    test(`passengers is initialized as an empty array`, () => {
        expect(plane.getPassengers()).toEqual([]);
    })
    test(`Assign a Person as a passenger of a plane`, () => {
        const person = new Person(`John`, `London Heathrow`);
        plane.addPassenger(person);
        expect(plane.getPassengers()).toEqual([person]);
    })
})

