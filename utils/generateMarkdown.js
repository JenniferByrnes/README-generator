// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdownContent  = (name, desc) => 

`#Program Name is: ${name}, 
##Description:
  ${desc}
  
  
  `;
/*function generateMarkdown(data) {
  return `# ${data.title}

`;
}
*/
module.exports = generateMarkdownContent 
/*
=> {
  // destructure page data by section
  const { data } = readmeData;
  console.log("readmeData= ", readmeData);
  console.log("data= ", data);

  return `
  # ${data.programName}
  <br>
  # ${data.description}

  
    "$generateAbout(about)}
      $generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} </h3>
    </footer>
  </body>
  </html>
  `;
};
*/
