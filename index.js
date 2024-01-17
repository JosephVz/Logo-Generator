const inquirer = require("inquirer");
const fs = require("fs");

const {Circle, Square, Polygon} = require("./lib/shapes.js");

const questions = [
    {
        type: "input",
        message: "What is the text for your logo? (Enter 3 characters).",
        name: "text",
    },
    {
        type: "input",
        message: "What is the color of the text? (Can enter hexadecimal number).",
        name: "textColor",
    },
    {
        type: "list",
        message: "Select a shape.",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        message: "What is the color of the shape? (Can enter hexadecimal number).",
        name: "shapeColor",
    },
];

module.exports = questions

const init = () => {
    inquirer.prompt(questions)
    .then((answers) => {

    switch (`${answers.shape}`) {
        case "Square":
            const square = new Square(answers.text, answers.textColor, answers.shapeColor)
            fs.writeFile("examples/logo.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        case "Circle":
            const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
            fs.writeFile("examples/logo.svg", circle.renderCircle(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Circle is made.")
                }
            });
            break;
        case "Triangle":
            const polygon = new Polygon(answers.text, answers.textColor, answers.shapeColor)
            fs.writeFile("examples/logo.svg", polygon.renderPolygon(), (err) => {
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
