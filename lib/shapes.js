class Shape {

    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color=(color);
    }
}

class Circle extends Shape {
    render() {`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${shapeColor}"/>`
        return 
    }
}

class Square extends Shape {
    render() {`<rect x="50" height="100%" width="100%" fill="${shapeColor}"/>`
        return 
    }
}

class Triangle extends Shape {
    render() {`<triangle height="100%" width="100%" points="0,200 300,200 150,0" fill="${shapeColor}"/>`
        return 
    }
};

module.exports = {Circle, Square, Triangle}

