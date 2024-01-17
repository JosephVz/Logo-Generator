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