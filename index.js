// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Other Variables
const licenseOptions = ['MIT', 'Apache', 'GPL', 'None'];

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Email address is required.");
            }
            return true;
        }
      },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Project Name is required.");
            }
            return true;
        }
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
        message: 'Enter the test instructions for the project:',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Choice a liscense from the provided choices:',
        choices: licenseOptions,
      },
];

inquirer.prompt(questions).then((answers) => {
    console.log('Chosen license:', answers.license);
    // Calling function to write README file
    writeToFile('README.md', answers);
  });

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Readme Generated Sucessfully!')
    );
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
