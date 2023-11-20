// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

// Other Variables
const licenseOptions = ['MIT', 'Apache', 'GPL', 'None'];

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project:',
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines for your project:',
      },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instiructions for the project:',
      },
    {
        type: 'list',
        name: 'liscense',
        message: 'Choice a liscense from the provided choices:',
        choices: licenseOptions,
      },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log('Chosen license:', answers.license);
    // Do something with the selected license
  });

// Function to write README file
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
