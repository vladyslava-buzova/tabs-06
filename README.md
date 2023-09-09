
# React + Vite

## React Project "Tabs"
[ProjectLink](https://vladyslava-buzova.github.io/menu-05/)

## Figma URL
[Tabs](https://www.figma.com/file/Qa5rpK8oNbj7rb1ZW7fttX/Menu?type=design&node-id=0-1&mode=design&t=EbnlxWboMcLLKBfF-0)

## Steps
1. Fetched API to get job information from an external API, set up a loading state, and displayed a message to the user while the data is being fetched.
2. Once the data has been fetched, stored it in a state variable using the useState hook.
3. Created a JobInfo component to display the first job in the list, using object destructuring to extract the relevant data from the job object.
4. Used the Duties component to render the list of duties for each job.
5. Used the uuid library to generate unique ids for each job, and use these ids instead of the index to set the key prop for the JobInfo and Duties components.
6. Created a currentItem state variable in App.jsx and pass it down to the JobInfo component as a prop, using it to display the current job.
7. Set up a BtnContainer component and passed the jobs array, currentItem state variable, and setCurrentItem function down as props.
8. In the BtnContainer component, created a button for each job in the jobs array, and attached the setCurrentItem function to each button to change the currentItem state variable and render the selected job.

## How to launch a project:
1. Clone the repo.
git clone the-link-from-your-forked-repo.
2. Check your Node.js version.
node -v
3. Run VSCode and open the project folder.
4. Open a terminal in the project folder.
5. Run 'npm install' (or just npm i) to install the dependencies.
6. Run 'npm run dev' to start the project.

#### UUID Library to generate unique ids

```sh
npm install uuid
```

```js
import { v4 as uuidv4 } from 'uuid';
```
- Or generate with "date":

```js
const date = new Date();
```
