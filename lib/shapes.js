//Created a parent class of Shape
class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

//Created a circle class that inherits shape
class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />   
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="120" font-size="65" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
  }
}

//Created a triangle class that inherits shape
class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />   
    <text x="50" y="72" font-size="20" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>   
    </svg>`;
  }
}

//Created a square class that inherits shape
class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />   
    <text x="50" y="60" font-size="30" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>   
    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
