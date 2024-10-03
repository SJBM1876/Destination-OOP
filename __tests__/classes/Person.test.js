
const Bag = require("../classes/Bag.js")
const Person = require("../classes/Person.js")

let person

beforeEach(() => {
    person = new Person("Ben", "Paris")
})

test("can create an instance of the Person class", () => {
    expect(person instanceof Person).toBe(true)
})

test("name and destination have been assigned correctly", () => {
    expect(person.name).toBe("Ben")
    expect(person.destination).toBe("Paris")
})

test("can create an instance of the Person class", () => {
    expect(person instanceof Person).toBe(true)
})

test("bags initializes as an empty array", () => {
    expect(person.getBags()).toEqual([])
})

test("addBag() adds a bag to the bags array", () => {
    person.addBag("bag1")
    expect(person.getBags()).toBe(["bag1"])
})