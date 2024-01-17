const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./questions')

const {Circle, Square, Polygon} = require("./shapes.js");

const init = () => {
    inquirer.prompt(questions)
    .then((answers) => {

    switch (`${answers.shape}`) {
        case "Square":
            const square = new Square(answers.text, answers.textColor, answers.shapeColor)
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
                    console.log("Circle is made.")
                }
            });
            break;
        case "Triangle":
            const polygon = new Polygon(answers.text, answers.textColor, answers.shapeColor)
            fs.writeFile("./logo.svg", polygon.renderPolygon(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Triangle is made.")
                }
            });
            break;
        }
    });
}

init();
