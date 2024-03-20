const { Circle, Square, Triangle} = require("./shapes");

describe("Shape", () => {
    describe("Circle", () => {
        it("Should generate a circle with the given shape color (blue)", () => {
            
            const circle = new Circle();

            circle.setColor("blue");

            expect(circle.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
    })
})


describe("Shape", () => {
    describe("Square", () => {
        it("Should generate a square with the given color(blue)", () => {
            const square = new Square();

            square.setColor("blue");

            expect(square.render()).toContain('<rect x="10" y="10" width="80" height="80" fill="blue" />');
        })
    })
})


describe("Shape", () => {
    describe("Triangle", () => {
        it("Should generate a triangle with given color (blue)", () => {
            const triangle = new Triangle();

            triangle.setColor("blue");

            expect(triangle.render()).toContain('<polygon points="50 15, 100 100, 0 100" fill="blue" />');
        })
    })
})



 