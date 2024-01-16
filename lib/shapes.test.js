const Shapes = require("./shapes.js");

describe("Shapes", () => {
    
    describe("Each shape", () => {
        it("should return back triangle", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

        it("should return back circle", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

        it("should return back triangle", () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});