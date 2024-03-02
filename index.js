const fs = require("fs")
const inquirer = require("inquirer")

const generateSvg = ({})


inquirer.prompt([
    {
        type: 'input',
        name: 'logo-text',
        message: 'Enter the 3 letters you want for your logo.'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color do you want the logo text to be?'
    },
    {
        type: 'list',
        name: 'logo-shape',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'What shape do you want your logo to be?'
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color do you want this shape to be? (this will be different from the text color!)'
    },
])