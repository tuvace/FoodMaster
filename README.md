This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The API used in this project is the Recipe Search from Edamam.

# The Project

This project allow you to search for ingredients and gathers all recipes with a matching ingredient. 


<img width="1440" alt="Skjermbilde 2020-05-09 kl  16 47 59" src="https://user-images.githubusercontent.com/46562790/81477046-be20a380-9215-11ea-82e6-22381247b3ed.png">

<img width="1440" alt="Skjermbilde 2020-05-10 kl  12 14 50" src="https://user-images.githubusercontent.com/46562790/81496485-422b6780-92b8-11ea-930d-e433eac06124.png">


# Our Goal

Our goal with this project is to make a website which will help with meal planning. The site is supposed to have a login button where you can log into your account. From here you will be able to add meals to a calendar, to plan when and what you are going to eat. We wish for this website to be a helping tool in peoples everyday life.


# Installs

To run this project you need to install a few things first:

1. First you need to install Node.js
2. Secondly, you need to install a React project with the command: 
### `npx create-react-app my-app`
### `cd my-app`
### `npm start`
3. Thrid, you need to install express with the command:
### `npm install express --save`
4. For the use of the login, you need to install the open source project Passport https://github.com/jaredhanson/passport
### `npm install passport`
5. For the use of the calendar, you need to install the open source project React-Calendar https://www.npmjs.com/package/react-calendar
### `npm install react-calendar`


When working with React, sometimes later on in the project you need to install some more things. Especially when you are importing from other Open Source projects. This is simply done with a command in the Terminal.

# The API

To run the Edamam API you need an account on their website at the right API: https://developer.edamam.com/edamam-recipe-api.
Use the free one (it is enough for this project), and create a new application for the Recipe Search API.
Find your Application Key and Application ID and change the already existing ones in the project with your new ones.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
