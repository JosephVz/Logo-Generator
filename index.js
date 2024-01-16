const inquirer = require("inquirer");
const fs = require("fs");

function prompt() {
inquirer
    .prompt ([
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
    }
])
.then((answers) => {
    makeLogo(answers);
})
.catch((error) => {
    console.log("Error, something went wrong.", error);
});
}

function makeLogo(answers) {

    const { text, textColor, shape, shapeColor } = answers;

    const svgContent = `<svg width="300" height="200">
    <rect width="300" height="200" fill="${shapeColor}"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size"48" fill="${textColor}">${text}</text>
    </svg>`;

fs.writeFile("logo.svg", svgContent, (error) => {
    if (error) {
        console.log("An error occured while saving the SVG file:", error);
    } else {
        console.log("Logo created Succesfully!");
    }
});
}

prompt();