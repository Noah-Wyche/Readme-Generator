// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Readme Generated Sucessfully!')
    );
}

// TODO: Create a function to initialize app
function init(ReadmeGenerator) {

}

// Function call to initialize app
init();
