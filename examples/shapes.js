class Shapes {
    text;
    textColor;
    shapeColor;
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

setText() {
    return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" fill="${this.textColor}">${this.text}</text>`;
}
};

class Circle extends Shapes {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    renderCircle() {

        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>
        ${super.setText()}
        </svg>`
    }
}

class Polygon extends Shapes {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    renderPolygon() {

        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <polyogon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>
        ${super.setText()}
        </svg>`
    }
}

class Square extends Shapes {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    renderSquare() {

        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>
        ${super.setText()}
        </svg>`
    }
}

module.exports = {Shapes, Circle, Square, Polygon}

