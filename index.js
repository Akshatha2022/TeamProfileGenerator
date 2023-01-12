const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");
const team = [];
const Manager = require("./lib/Manager");

const questions = [
  {
    type: "list",
    message: "What is your role?",
    choices: ['Intern','Engineer', 'Manager', 'Employee']
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What university did you attend?",
    name: "school",
  },
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "github",
  }
];
// TODO: Create a function to write to html, will place this in function init
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
  
  // TODO: Create a function to initialize app
  function init() {
    // prompt method calls in array of questions
    inquirer
      .prompt(questions)
      // promise, answers function takes answer responses and writes to readme
      .then((answers) => {
        console.log(answers);
        const response = pageTemplate(answers);
        writeToFile("index.html", response);
    }
    function manager() {
        inquirer.prompt(questions)
          .then((data) => {
            cosnt newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
            team.push(newManager);
          });
    // Function call to initialize app
    init();
}


//     fs.writeFile("index.html", generateTeam(data), (err) =>
//        err ? console.log(err) : console.log('Success!')
//  );