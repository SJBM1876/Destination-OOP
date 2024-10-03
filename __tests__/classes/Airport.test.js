const Plane = require(`../classes/Plane.js`)
const Airport = require(`../classes/Airport.js`)
const { describe, test, expect, beforeEach } = require("@jest/globals");

describe(`Test for Airport class:`, () => {
    
    let airport;


    beforeEach(() => {
        airport = new Airport(`London Heathrow`)
    })
    
    test(`Assigns airport name correctly`, () => {
        expect(airport.name).toBe(`London Heathrow`);
    })
    test(`Static poperty airportCode is correct`, () => {
        expect(Airport.airportCode).toBe(`LHR`);
    })
    test(`planes is initialized as an empty array`, () => {
        expect(airport.getPlanes()).toEqual([]);
    })
    test(`Assigns a plane to the array of planes`, () => {
        const plane = new Plane(`MultiJet`, `John F. Kennedy International`, `London Heathrow`);
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
    })
})

    beforeEach(() => {
        airport = new Airport(`London Heathrow`)
    })
    
    test(`Assigns airport name correctly`, () => {
        expect(airport.name).toBe(`London Heathrow`);
    })
    test(`Static poperty airportCode is correct`, () => {
        expect(Airport.airportCode).toBe(`LHR`);
    })
    test(`planes is initialized as an empty array`, () => {
        expect(airport.getPlanes()).toEqual([]);
    })
    test(`Assigns a plane to the array of planes`, () => {
        const plane = new Plane(`MultiJet`, `John F. Kennedy International`, `London Heathrow`);
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
    })
})