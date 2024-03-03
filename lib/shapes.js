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
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />   
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
  }
}

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
    <text x="150" y="125" font-size="60" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>   
    </svg>`;
  }
}

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
    <rect = x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />   
    <text x="150" y="125" font-size="60" text-anchor="middle" 
    fill="${this.textColor}">${this.logoText}</text>   
    </svg>`;
  }
}
