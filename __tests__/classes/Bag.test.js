const Bag = require(`../classes/Bag.js`)
const Person = require(`../classes/Person.js`)
const { describe, test, expect, beforeEach } = require("@jest/globals");

describe(`Test for Bad class:`, () => {
    
    let bag;

    beforeEach(() => {
        bag = new Bag(10, 1234)
    })
    
    test(`Creates an instance of the Bag class.`, () => {
        expect(bag instanceof Bag).toBeTruthy();
    })
    test(`Assigns weight and id correctly`, () => {
        expect(bag.weight).toBe(10);
        expect(bag.id).toBe(1234);
    })
    test(`Owner is initialized with a value of null`, () => {
        expect(bag.getOwner()).toBe(null);
    })
    test(`Assign a Person as the owner of the bag`, () => {
        const person = new Person();
        bag.assignOwner(person);
        expect(bag.getOwner()).toEqual(person);
    })
})