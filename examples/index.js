const inquirer = require("inquirer");
const fs = require("fs");

const {Circle, Square, Polygon} = require("./shapes.js");

function prompt() {
    inquirer
    .prompt([
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
        name: "shapeType",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        message: "What is the color of the shape? (Can enter hexadecimal number).",
        name: "shapeColor",
    },
])

.then((data) => {

    switch (`${data.shapeType}`) {
        case "Square":
            const square = new Square(data.text, data.textColor data.shapeColor)
            fs.writeFile("./logo.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        case "Square":
            const square = new Square(data.text, data.textColor data.shapeColor)
            fs.writeFile("./logo.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;
        case "Square":
            const square = new Square(data.text, data.textColor data.shapeColor)
            fs.writeFile("./logo.svg", square.renderSquare(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Square is made.")
                }
            });
            break;

})
.catch((error) => {
    console.log("An error occurred.", error);
});
}


//     const svgContent = `<svg width="300" height="200">
//     <rect width="300" height="200" fill="${shapeColor}" />
//     <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${textColor}">${text}</text>
//   </svg>`;

fs.writeFile("logo.svg", svgContent,(error) => {
    if (error) {
        console.log("An error occured while saving the SVG file:", error);
    } else {
        console.log("Logo created Succesfully!");
    }
});
}

prompt();