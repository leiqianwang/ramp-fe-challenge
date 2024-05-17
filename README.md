Instructions
Welcome to Ramp's frontend interview challenge.

In this challenge, you will need to fix certain bugs within the starter code provided to you.

The bugs do not depend on each other, so you can solve them independently.

You will submit a CodeSandbox link with your response.

Prerequisites
node
npm or yarn
CodeSandbox
Coding
Since you need to submit a CodeSandbox link with your response (See Submission), we recommend that you create the CodeSandbox first, solve the bugs in your generated CodeSandbox, and then share the link with us. You can also work locally first, and upload at the end.

Upload the project to CodeSandbox
NOTE: We recommend you use this method to upload your project (with the CLI) rather than importing directly from Github to generate a CodeSandbox.

Run yarn install or npm install
Run yarn upload or npm run upload
If this is the first time using CodeSandbox CLI, it will ask you to log in with Github first
You might be prompted: We will upload XXX static files to your CodeSandbox upload storage and then a list of files (typically DS_Store or desktop.ini files). It's fine if you upload with these, or you can manually remove them before uploading.
Confirm that you want to proceed with deployment
Once it finishes, you will get the link for your CodeSandbox. Also, you can log in to the website with your Github account and see your projects to retrieve the link.
Start working directly on the CodeSandbox
Reference: https://codesandbox.io/docs/importing#import-local-projects-via-cli

Or

Run the server locally
Run yarn install or npm install
Run yarn start
The server will be available in http://localhost:3000
Special considerations
Typescript
At Ramp, we use React + Typescript in our codebase.

You are not required to know Typescript and using it in this challenge is optional. We have abstracted most of the Typescript code into its own files (types.ts), so feel free to ignore those. All of the bugs can be solved without Typescript.

If you work on the CodeSandbox, you can ignore any warnings on the code as long it works in the browser. However, feel free to write any Typescript code if your feel comfortable.

If you work locally, TSC_COMPLE_ON_ERROR flag is set to true by default. However, if you feel comfortable with Typescript, feel free to remove it on .env and to write any Typescript code.

API
We don't have a real API for this challenge, so we added some utilities to simulate API requests. To help you debug, we console.log the status of the ongoing simulated requests. You will not be able to see these requests in the network tab of your browser.

Solution
Solutions can be HTML, CSS or Javascript oriented, depending on the bug and your solution.
Modify any file inside the src folder as long as the expected result is correct.
The goal is to solve the bug as expected. Finding a clean and efficient solution is a nice to have, but not required.
Except for the last one, the first bugs don't depend on each other and can be solved in any order.
We recommend reading all the descriptions first. You might find the solution to one bug while trying to fix another.
The last bug will need other bugs to be fixed first in order to be reproduced.
You cannot add any external dependency to the project. The bugs can be solved with vanilla HTML, CSS and Javascript.
Bug 1: Select dropdown doesn't scroll with rest of the page
How to reproduce:

Make your viewport smaller in height. Small enough to have a scroll bar
Click on the Filter by employee select to open the options dropdown
Scroll down the page
Expected: Options dropdown moves with its parent input as you scroll the page

Actual: Options dropdown stays in the same position as you scroll the page, losing the reference to the select input

Bug 2: Approve checkbox not working
How to reproduce:

Click on the checkbox on the right of any transaction
Expected: Clicking the checkbox toggles its value

Actual: Nothing happens

Bug 3: Cannot select All Employees after selecting an employee
How to reproduce:

Click on the Filter by employee select to open the options dropdown
Select an employee from the list
Click on the Filter by employee select to open the options dropdown
Select All Employees option
Expected: All transactions are loaded

Actual: The page crashes

Bug 4: Clicking on View More button not showing correct data
How to reproduce:

Click on the View more button
Wait until the new data loads
Expected: Initial transactions plus new transactions are shown on the page

Actual: New transactions replace initial transactions, losing initial transactions

Bug 5: Employees filter not available during loading more data
This bug has 2 wrong behaviors that will be fixed with the same solution

Part 1
How to reproduce:

Open devtools to watch the simulated network requests in the console
Refresh the page
Quickly click on the Filter by employee select to open the options dropdown
Expected: The filter should stop showing "Loading employees.." as soon as the request for employees is succeeded

Actual: The filter stops showing "Loading employees.." until paginatedTransactions is succeeded

Part 2
How to reproduce:

Open devtools to watch the simulated network requests in the console
Click on View more button
Quickly click on the Filter by employee select to open the options dropdown
Expected: The employees filter should not show "Loading employees..." after clicking View more, as employees are already loaded

Actual: The employees filter shows "Loading employees..." after clicking View more until new transactions are loaded.

Bug 6: View more button not working as expected
This bug has 2 wrong behaviors that can be fixed with the same solution. It's acceptable to fix with separate solutions as well.

Part 1
How to reproduce:

Click on the Filter by employee select to open the options dropdown
Select an employee from the list
Wait until transactions load
Expected: The View more button is not be visible when transactions are filtered by user, because that is not a paginated request.

Actual: The View more button is visible even when transactions are filtered by employee. You can even click View more button and get an unexpected result

Part 2
How to reproduce:

Click on View more button
Wait until it loads more data
Repeat these steps as many times as you can
Expected: When you reach the end of the data, the View More button disappears and you are not able to request more data.

Actual: When you reach the end of the data, the View More button is still showing and you are still able to click the button. If you click it, the page crashes.

Bug 7: Approving a transaction won't persist the new value
You need to fix some of the previous bugs in order to reproduce

How to reproduce:

Click on the Filter by employee select to open the options dropdown
Select an employee from the list (E.g. James Smith)
Toggle the first transaction (E.g. Uncheck Social Media Ads Inc)
Click on the Filter by employee select to open the options dropdown
Select All Employees option
Verify values
Click on the Filter by employee select to open the options dropdown
Verify values
Expected: In steps 6 and 8, toggled transaction kept the same value it was given in step 2 (E.g. Social Media Ads Inc is unchecked)

Actual: In steps 6 and 8, toggled transaction lost the value given in step 2. (E.g. Social Media Ads Inc is checked again)

Submission
IMPORTANT: Before sharing your CodeSandbox, open the email.txt file and replace your email on the only line of the file. Don't use any prefix or suffix, just your email.

You will submit a link to a CodeSandbox with your responses. Make sure your CodeSandbox is not Read only and can be edited, otherwise you will be disqualified. See Coding

Callouts
Don't remove existing data-testid tags. Otherwise, your results will be invalidated.
Other than the bugs, don't modify anything that will have a different outcome. Otherwise, your results might be invalidated.
Plagiarism is a serious offense and will result in disqualification from further consideration.
