# MernCRUD test app for NerdySoft

# Technologies used in project


**Front-End**
* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [react-router-dom](https://reactrouter.com/web/guides/quick-start) - routing with ReactJS

**Back-End**
* [nodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [concurrently](https://www.npmjs.com/package/concurrently) - node package for run multiple commands concurrently
* [axios](https://github.com/axios/axios) - for HTTP requests
* [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.
* [cors](https://www.npmjs.com/package/cors) - for cross-origin platform sharing
* [MongoDB](https://www.mongodb.com/) - NoSQL DataBase
* [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
----
### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ cd client-side
$ npm install
cd ..
npm run dev
```
### Run
```
Server is running on 5000 port
React App is running on 3000 port
Heroku URL for app (is on only when server is running): https://test-app-ilya.herokuapp.com/
```
----

### Problems

Had a confrontation with last task "Should Show top 3 similar announcements". I think things like that should be developed on the server-side with tags. We could potentially have a billion ads. That is, there will be pagination. You will not pull the entire billion at once, will you? 
It`s just my opinion, if I had more time, maybe I would find a simpler solution


----







