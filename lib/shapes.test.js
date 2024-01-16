const {Circle, Square, Triangle} = require("./shapes.js");


    
    describe("Circle", () => {
        it("should return back circle was filled in correctly", () => {
            const shape = new Circle();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${shapeColor}"/>`);
        });
    });
    
    describe("Square", () => {
        it("should return back square was filled in correctly", () => {
            const shape = new Square();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`<rect x="50" height="100%" width="100%" fill="${shapeColor}"/>`);
        });
    });

    describe("Triangle", () => {
        it("should return back triangle was filled in correctly", () => {
            const shape = new Circle();
            var color = ("green");
            shape.setColor(color);
            expect(shape.render()).toEqual(`<triangle height="100%" width="100%" points="0,200 300,200 150,0" fill="${shapeColor}"/>`);
        });
    });