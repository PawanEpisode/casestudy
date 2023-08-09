# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the required library dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project Requirements

Build a single page that displays the profile of 10 users (the data is obtained from an open API ). Each
user's profile contains an avatar picture, name, email, phone, address, website and company name. Beneath
the profile are 3 action buttons to like, edit and delete. Upon clicking the edit button , a modal window
should pop up and display information about the edited profile and the user should be allowed to edit the
information. Upon clicking the like button , the button should be toggled. Upon clicking delete, a
confirmation popup should display and upon confirmation, should delete the card.

## Project Documentation

In the Project building and implementation, We strongly feel that single page application should handle all of the required features and works smoothly. 

**The Project design is as per using Material UI design, best practices, components and their styling**

**The Project is build FULLY RESPONSIVE for all the devices irrespective of Mobile/Browser,Desktop.**\
**The UI for the Website is Awesome.**

### Package.json (Dependencies)

"dependencies": {\
    "@emotion/react": "^11.11.1",\
    "@emotion/styled": "^11.11.0",\
    "@fontsource/roboto": "^5.0.8",\
    "@mui/icons-material": "^5.14.3",\
    "@mui/material": "^5.14.4",\
    "@reduxjs/toolkit": "^1.9.5",\
    "@testing-library/jest-dom": "^5.17.0",\
    "@testing-library/react": "^13.4.0",\
    "@testing-library/user-event": "^13.5.0",\
    "react": "^18.2.0",\
    "react-dom": "^18.2.0",\
    "react-redux": "^8.1.2",\
    "react-scripts": "5.0.1",\
    "redux": "^4.2.1",\
    "sass": "^1.64.2",\
    "web-vitals": "^2.1.4"\
  },

### Workflows

The project has used Material UI design and their components which are designed to easily integrate with the project requirements.\
The Project have followed Modular pattern building the components and implementing the features.

The Single Page consists of Two Section, in which first one is Home Banner Component and Second one is Users Details Component.

### User Details Component

It consists of 10 user cards displayed , in which each user card shows details of each user like , name, username, email, phone, website, address and company.\
There are also 3 actions i.e. Like button, Edit button, Delete Button. Each Action button performs thier respective actions.\ There are multiple MUI components that are integrated into this main user detail component for easy implementation like, Dialog, Alert, Button, Snackbar, Stack, Tooltip, Typography, Paper , Box etc.


### Implentations, Understanding & Integrated concepts

● Ability to create new react projects using Create React App\
● Understanding of JSX\
● Passing props to components\
● Understanding of stateful and stateless Components\
● Basic understanding of state management and component lifecycle methods\
● Fetching data from an API endpoint\
● Conditional rendering\
● Working with lists\
● Code structuring and packaging\
● Ability of the applicant to learn a new React UI library and use its components in their app\
● Handling events and working with forms\
● Lifting State Up\
● Show the loading icon before loading the data from api\
● Avatar must be from the dicebear api\

### Future TODOs

● User Specific Authentication using JWT or OAuth.\
● Store Liked profiles for respective each Authenticated User\
● Features like, WhatsApp message, Phone call, emailing and so on.\

**Thank You for Reading !!!**


