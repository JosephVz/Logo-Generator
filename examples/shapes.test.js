const {Circle, Square, Triangle} = require("./shapes.js");


    
    describe("Circle", () => {
        it("should return back green circle", () => {
            const shape = new Circle();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`green`);
        });
    });
    
    describe("Square", () => {
        it("should return back green square", () => {
            const shape = new Square();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`green`);
        });
    });

    describe("Triangle", () => {
        it("should return back green triangle", () => {
            const shape = new Triangle();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`green`);
        });
    });