# 10 Object-Oriented Programming: Team Profile Generator:

The purpose of this Assignment is to build a Node.js command-line application that takes in information about employees on a (fictional) software engineering team and generates an HTML webpage that displays summaries for each team member. Because testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.

## User Story:

As a Manager of an engineering team, I want to be able to generate a webpage that displays my team's basic information so that I can have quick access to their employee id number, emial, GitHub profile, and in the case of interns, the university where they attend.

## User Experience:

Using the command-line application that accepts predefined input based on specific questions asked of the User, when prompted for team member information, an HTML file is generated that displays a nicely formatted team roster based on the input.

When I start the application, I am prompted to enter the team manager’s name, employee ID, email address, and office number. 

When I enter the team manager’s name, employee ID, email address, and office number, I am presented with a menu with the option to add an engineer or an intern or to finish building my team.

When I select the engineer option, then I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.

When I select the intern option, then I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

When I decide to finish building my team, then I exit the application, and the HTML is generated and a message is displayed stating: 'HTML file is written to "fileName" successfully!'

In the HTML file, when I click on an email address, then my default email program opens and populates the field of the email with the address. When I click on the GitHub username, the employee's GitHub profile opens in a new tab.

## Recommended Directory Structure & Libraries:

├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           

The Application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command: node index.js

## Walkthrough Video:


## Link to Executed Appplication:

https://github.com/rawc72/Challenge_No_10/issues/1#issue-1055694155

## Link to GitHub URL Repository:

https://github.com/rawc72/Challenge_No_10.git