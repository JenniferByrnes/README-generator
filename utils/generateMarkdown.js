module.exports = inputData => { 
  //console.log(inputData);

  // Function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    var badge = ``
    switch(license){
      case 'Apache-2.0':
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'BSD':
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 'GPL-3.0':
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT':
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
    }
    return badge
  }

  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'No license') {
      lowerLicense = license.toLowerCase();
      return `[${(license)}](https://choosealicense.com/licenses/${(lowerLicense)}/)`
    } else {
      return ``
  }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'No license') {
      return `licensed under the ${renderLicenseLink(license)} license`;
    } 
    return ``;
  }

// Function to generate markdown for README
return`
# ${inputData.programName}
 ${renderLicenseBadge(inputData.license)}

## Description:

${inputData.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#How-to-Contribute)
- [Tests](#Tests)
- [Questions?](#Questions)

## Installation

${inputData.installInstructions}

## Usage

${inputData.usageInformation}

## License

${renderLicenseSection(inputData.license)}

## How to Contribute

${inputData.contributionGuidelines}

## Tests

${inputData.testInstructions}

## Questions?

GitHub profile: https://github.com/${inputData.githubUserName}

Please address any questions to me at ${inputData.emailAddress}
  
  `;
}
