# How to run the tests

## Prerequisites
- Node is installed on the machine.
- An IDE or text editor for viewing the tests.

### Note:
- Node version used: **v12.18.3**
- Npm version used: **6.14.8**

## Running the testsuite
1. In the commandline go to the project folder (todomvc-testsuite).
2. Run the command `npm install` to install all the dependencies.
3. To run the tests on the browsers use the below commands.
    - To run tests on chrome use `npm run cy:chrome`
    - To run tests on firefox use `npm run cy:firefox`
    - To run tests on microsoft edge use `npm run cy:edge`
4. After the tests are run, to generate the report run command `npm run cy:report`.
5. Reports can be viewed from html report generated at `cypress/reports/html/index.html`.
6. For failed steps, screenshots are added in the reports.

## More info on the project
1. You can see the tests organized in different files based on functionality in folder `cypress/integration`.
2. All the custom methods and assertions are defined as commands to call easily as `cy.command_name()`. And they are located at `cypress/support/commands.js`.
3. One of the test is designed to fail to just see if the reports are correct and for the failed cases screenshot is appended.
4. We can also watch videos of the tests run from `cypress/videos` folder.
5. We can see screeshots of the failed test from `cypress/screenshots` folder.
6. I have not written test cases as different document as the tests written are self explanatory.