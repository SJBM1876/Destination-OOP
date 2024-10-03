const Bag = require('../classes/Bag.js')

beforeEach(() => {
    let bag = new Bag(50, 111)
})

test("can create an instance of the Bag class", () => {
    expect(bag instanceof Bag).toBe(true)
})

test("weight and id have been assigned correctly", () => {
    expect(bag.weight).toBe(50)
    expect(bag.id).toBe(111)
})

test("can get the initial owner (null) using getOwner", () => {
    expect(bag.getOwner()).toBe(null)
})

test("update owner with a Person assigned to a Bag using assignOwner()", () => {
    bag.assignOwner("Ben")
    expect(bag.getOwner()).toBe("Ben")
})
