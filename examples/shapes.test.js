const {Shapes, Circle, Square, Polygon} = require("./shapes.js");

    describe('Shapes', () => {
        test('should set text properly', () => {
            const shape = new Shapes('Hello');
            expect(shape.text).toBe('Hello')
        });
    });
    
    describe("Circle", () => {
        test("should return green circle", () => {
            const shape = new Circle('green');
            expect(shape.shapeColor).toBe('green');
        });
    });
    
    describe("Square", () => {
        test("should return back green square", () => {
            const shape = new Square('green');
            expect(shape.shapeColor).toBe('green');
        });
    });

    describe("Triangle", () => {
        test("should return back green triangle", () => {
            const shape = new Polygon('green');
            expect(shape.shapeColor).toBe('green');
        });
    });