# TaskTrek | MERN

A MERN stack app to keep track of online stuff, which you may want to view later. It also has a todo list feature, so you can add tasks to do later, and mark them as completed when done.

## Thing I would have done if I had more time

- Save the sort/filter/search state in url, so that when user refreshes the page, the state is not lost and the url can be shared with others.
- Added test cases for frontend and backend using react-testing-library and jest.
- Improve the UI of the app.
- Think of a better UX for the todo list feature.

## Demo

[Deployed on Render](https://task-trek.onrender.com/)

P.S: Its deployed on a free server which sleeps on inactivity, so first open might take some time.

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Context API using useContext & useReducer hooks](https://reactjs.org/docs/context.html) - For state management
- [Material-UI w/ lots of custom CSS](https://mui.com/material-ui/) - UI library
- [React Router](https://reactrouter.com/) - For general routing & navigation

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Validator.js](https://www.npmjs.com/package/validator) - For validation of JSON data
- [Mongoose Unique Validator](https://www.npmjs.com/package/mongoose-unique-validator) - Plugin for better error handling of unique fields within Mongoose schema
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Features

- Authentication (login/register with email-password)
- Add/update/delete entries
- Add title, link, description, tags & type of link
- Bookmark important stuff (by 'starring' it)
- Mark the already read/watched items as 'viewed'
- Search entries by title, description, tags or status
- Filter entries by type (article, video or other), or by starred or viewed
- Click on tags to show all entries containing the tag you clicked on.
- Sort entries by oldest first, newest first, A-Z (alphabetical) or Z-A (reverse alpha.)
- Toast notifications for actions such as adding new entry, or 'starring' it etc.
- Dark mode toggle w/ local storage save
- Responsive UI for all screens

## Run Locally

#### Env variable:

Create a .env file in `server/` directory and add the following:

```
MONGODB_URI="Your Mongo Connection URI"
PORT=3005
SECRET="Your JWT secret"

```

#### Client:

Open `client/src/backendUrl.js` & change "backend" variable to `"http://localhost:3005"`

```
cd client
npm install
npm start
```

#### Server:

Type below commands in your terminal:

```
cd server
npm install
npm run dev
```
