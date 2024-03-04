const { Circle, Square, Triangle} = require("./shapes");

describe("Shape", () => {
    describe("Circle", () => {
        it("Should generate a circle with the given shape color (blue)", () => {
            const shapeColor = blue;
            const circle = new Circle();

            const result = shape.shapeColor("blue");

            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
    })
})

describe("Shape", () => {
    describe("Square", () => {
        it("Should generate a square with the given color(blue)", () => {
            const shapeColor = blue;
            const square = new Square();

            const result = shape.shapeColor("blue");

            expect(shape.render()).toEqual('<rect = x="10" y="10" width="80" height="80" fill="blue" />');
        })
    })
})

describe("Shape", () => {
    describe("Triangle", () => {
        it("Should generate a triangle with given color (blue)", () => {
            const shapeColor = blue;
            const triangle = new Triangle();

            const result = shape.shapeColor("blue");

            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})