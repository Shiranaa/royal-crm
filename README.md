- Node.js
- Express.js
- MySQL

### Prepare The Environment

Create a new MySQL database, follow instructions in the docs folder.
Clone project: git clone https://github.com/levworkshop/royal-crm.git
Install dependencies: npm install
Install nodemon globally: npm i -g nodemon and update package.json accordingly.
In project, add configuration file: config/dev.js with database connection details.
Run the app:
Windows: set DEBUG=royal-crm:_; & npm start
MacOS/Linux: $ DEBUG=royal-crm:_ npm start
