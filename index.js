
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseOptions = ['MIT', 'Apache', 'GPL', 'None'];

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: function (answer) {
            if (answer.length < 1) {
                return 'A valid GitHub username is required.';
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
                return 'A valid Email address is required.';
            }
            return true;
        }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
      validate: function (answer) {
        return answer.length > 0 || 'A valid Project Name is required.';
      },
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

async function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    console.log('Readme Generated Successfully!');
    return true;
  } catch (err) {
    console.error('Error writing to file:', err.message);
    return false;
  }
}

async function promptUser() {
  console.log('Welcome to the Professional README Generator!\n');
  try {
    const answers = await inquirer.prompt(questions);
    console.log('Chosen license:', answers.license);
    return answers;
  } catch (error) {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment.');
    } else {
      console.error('An error occurred:', error.message);
    }
    return null;
  }
}

async function generateReadme() {
  const answers = await promptUser();

  console.log('Answers:', answers);

  if (answers !== null) {
    const content = generateMarkdown(answers);
    const success = await writeToFile('README.md', content);
    if (success) {
      console.log('Readme Generated Successfully!');
    } else {
      console.log('Failed to generate Readme.');
    }
  }
}

generateReadme();
