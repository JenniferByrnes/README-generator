// Packages need for the application

// inquirer contains prompt()
const inquirer = require('inquirer');

// fs contains writeFileSync()
const fs = require('fs');

//Next line might not be needed (tutor)
//const { generate } = require('rxjs');


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
      message: "Please, provide a description of your program (Required)"
    },
    {
      type: "input",
      name: "installInstructions",
      message: "Please, provide installation instructions for your program (Required)"
    },
    {
      type: "input",
      name: "usageInformation",
      message: "Please, provide usage information for your program (Required)"
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Please, provide contribution guidelines for your program (Required)"
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Please, provide test instructions for your program (Required)"
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license that you used.',
      choices: ['No license','BSD', 'MIT', 'GPL', 'GNU GPLv3', 'Apache', 'Boost', 'Creative Commons']
    },
    {
      type: "input",
      name: "githubUserName",
      message: "Please, provide your github user name. (Required)"
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Please, provide your email address. (Required)"
    }
  ])
};

const mockData =
{
  programName: 'Amazing Program',
  description: 'It will knock your socks off!',
  installInstructions: 'Press the red button',
  usageInformation: 'then press the blue one',
  contributionGuidelines: 'just slam the code in there.  its OK.',
  testInstructions: 'dont bother testing - just wing it',
  license: 'BSD',
  githubUserName: 'GithubUsername',
  emailAddress: 'myEmailaddress@comcast.net'
};

const someContent = "some content"

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
//  fs.writeFileSync(fileName, generateMarkdown(data))
//}



// Function to initialize app
promptUser()
  .then( readmeData => {
    //const pageREADME = generateMarkdown(readmeData);
    console.log(generateMarkdown(mockData));
  //  fs.writeFile('testme.md', generateMarkdown("Jenn Project name", "Jenn //project description"), err => {
  //    if (err) throw new Error(err);

  //    console.log('Whoop whoop writeFile!');
  //  });
});

