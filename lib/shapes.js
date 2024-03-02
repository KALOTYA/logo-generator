
class Shape {
    constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor() {
        super(logoText);
        super(textColor);
        super(shapeColor);
    }
    render() {}
}