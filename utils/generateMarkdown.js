module.exports = inputData => { 
  console.log(inputData);
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No license') {
    return `cool license badge`
  } else {
    return `boo - no license badge`
  }
}


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No license') {
    return `https//${(license)}.com`
  } else {
    return `boo - no license link`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ``
  }
}

// Function to generate markdown for README
return`
#<${inputData.programName}>

**********license badge*************
<img width="928" alt="license badge" src="https://user-images.githubusercontent.com/105435313/176179770-61f0203b-98d3-47de-8df7-de1b89dbe1e1.png">

## Description:

${inputData.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${inputData.installInstructions}

## Usage

${inputData.usageInformation}

## License

${renderLicenseSection(inputData.license)}
explaination...................

## How to Contribute

${inputData.contributionGuidelines}

## Tests

${inputData.testInstructions}

## Questions?

GitHub profile: https://${inputData.githubUserName}.github

Please address any questions to me at ${inputData.emailAddress}
  
  `;
}
