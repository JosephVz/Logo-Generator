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
            // expect(shape.shapeColor).toBe('green');
            expect(shape.shapeColor).toBe('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green"/>');
        });
    });
    
    describe("Square", () => {
        test("should return back green square", () => {
            const shape = new Square('green');
            expect(shape.shapeColor).toBe('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"/>');
        });
    });

    describe("Triangle", () => {
        test("should return back green triangle", () => {
            const shape = new Polygon('green');
            expect(shape.shapeColor).toBe('<rect height="100%" width="100%" points="0,200 300,200 150,0" fill="green"/>');
        });
    });

