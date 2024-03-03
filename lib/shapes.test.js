const { Circle, Square, Triangle} = require("./shapes");

describe("Shape", () => {
    describe("Circle", () {
        it("Should generate a circle with the given shape color (blue)", () => {
            const shapeColor = blue;
            const Circle = new Circle;

            const result = shape.circle(blue);

            expect(result).tobe(shapeColor);
        })
    })
})

describe("Shape", () => {
    describe("Square", () {
        it("Should generate a square with the given color(blue)", () => {
            const shapeColor = blue;
            const square = new Square;

            const result = shape.square(blue);

            expect(result).tobe(shapeColor);
        })
    })
})

describe("Shape", () => {
    describe("Triangle", () {
        it("Should generate a triangle with given color (blue)", () => {
            const shapeColor = blue;
            const triangle = new Triangle;

            const result = shape.triangle(blue);

            expect(result).tobe(shapeColor);
        })
    })
})