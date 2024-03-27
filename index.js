//Requiring all nessesary files
// Importing the 'fs' module to work with the filesystem
const fs = require("fs");
// Importing custom shape classes
const { Circle, Triangle, Square } = require("./lib/shapes");
// Importing the 'inquirer' library for user prompts
const inquirer = require("inquirer");

//Using inquirer to prompt the user for all the logo criteria 
inquirer
  .prompt([
    // Prompting the user to enter the 3 letters for the logo
    {
      type: "input",
      name: "logoText",
      message: "Enter the 3 letters you want for your logo.",
    },
    // Prompting the user to choose the color for the logo text
    {
      type: "input",
      name: "textColor",
      message: "What color do you want the logo text to be?",
    },
    // Prompting the user to choose the shape for the logo
    {
      type: "list",
      name: "shape",
      choices: ["circle", "triangle", "square"],
      message: "What shape do you want your logo to be?",
    },
    // Prompting the user to choose the color for the selected shape
    {
      type: "input",
      name: "shapeColor",
      message:
        "What color do you want this shape to be? (this will be different from the text color!)",
    },
  ])
  //using a .then function to make sure the users selected shape is generated
  .then((response) => {
    // Variable to store the selected shape
    let shape;
    // Creating an instance of the selected shape based on user input
    if (response.shape === "circle") {
      shape = new Circle(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
    }
    if (response.shape === "triangle") {
      shape = new Triangle(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
    }
    if (response.shape === "square") {
      shape = new Square(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
    }
    //using a writefile function to generate a svg of the logo.
    fs.writeFile("logo.svg", shape.render(), (err) =>
      err
        ? console.log(err)
        : console.log("Initialization of Logo Generation is Complete. <3")
    );
  });
