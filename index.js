// Packages need for the application

// inquirer contains prompt()
const inquirer = require('inquirer');

// fs contains writeFileSync()
const fs = require('fs');

// This function is contained in the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "programName",
      message: "What is your program name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Please, provide a description of your program."
    },
    {
      type: "input",
      name: "installInstructions",
      message: "Please, provide installation instructions for your program."
    },
    {
      type: "input",
      name: "usageInformation",
      message: "Please, provide usage information for your program."
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Please, provide contribution guidelines for your program."
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Please, provide test instructions for your program."
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license that you used.',
      choices: ['No license','Apache-2.0', 'BSD', 'GPL-3.0', 'MIT']
    },
    {
      type: "input",
      name: "githubUserName",
      message: "Please, provide your github user name."
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Please, provide your email address."
    }
  ])
};

// Function to initialize app
promptUser()
  .then( readmeData => {
    //function to write README file
    //console.log(generateMarkdown(mockData));
    fs.writeFile('./dist/README.md', generateMarkdown(readmeData), err => {
      if (err) throw new Error(err)
      else
      console.log('New README.md file is written successfully.');
    });
});

