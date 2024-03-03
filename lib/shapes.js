
class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);

    }
    render() {}
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);

    }
    render() {}
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);

    }
    render() {}
} 