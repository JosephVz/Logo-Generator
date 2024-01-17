const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./questions')

const {Circle, Square, Polygon} = require("./shapes.js");

const init = () => {
    inquirer.prompt(questions)
    .then((answers) => {

    switch (`${answers.shape}`) {
        case "Square":
            // const square = new Square(data.text, data.textColor data.shapeColor)
            fs.writeFile("./logo.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        case "Circle":
            const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
            fs.writeFile("./logo.svg", circle.renderCircle(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        case "Triangle":
            // const polygon = new Polygon(data.text, data.textColor data.shapeColor)
            fs.writeFile("./logo.svg", polyogn.renderPolygon(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        }
    });
}

init();
