
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
};

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
};

function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  } else {
    return '';
  }
};

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## ${licenseSection}

## Questions
For any questions, please contact [${data.github}](https://github.com/${data.github}) via email at ${data.email}.
`;
};

module.exports = generateMarkdown;
