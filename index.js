const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoText",
      message: "Enter the 3 letters you want for your logo.",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color do you want the logo text to be?",
    },
    {
      type: "list",
      name: "shape",
      choices: ["circle", "triangle", "square"],
      message: "What shape do you want your logo to be?",
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "What color do you want this shape to be? (this will be different from the text color!)",
    },
  ])
  .then((response) => {
    let shape;
    if (response.shape === "circle") {
      shape = new Circle(
        response.logotext,
        response.textColor,
        response.shapeColor
      );
    }
    if (response.shape === "triangle") {
      shape = new Triangle(
        response.logotext,
        response.textColor,
        response.shapeColor
      );
    }
    if (response.shape === "square") {
      shape = new Square(
        response.logotext,
        response.textColor,
        response.shapeColor
      );
    }
    fs.writeFile("logo.svg", shape.render(), (err) =>
      err
        ? console.log(err)
        : console.log("Initialization of Logo Generation is Complete. <3")
    );
  });
