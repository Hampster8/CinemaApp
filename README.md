### React & Express Full Stack Template

Full Stack Template using _React_ and _Express_ that has a user authentication middleware using _jwt_. The application uses _Mongoose/MongoDB_ for the database.

### Prerequisites

Install the dependencies using `npm install` and then create a **.env** file in the root folder.

These parameters are mandatory in the **.env** file.

| Parameters            | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| REACT_BUILD_FOLDER    | Points to the dist folder. default as: **../frontend/dist** |
| MONGODB_DATABASE_URL  | Connection string to your MongoDB                           |
| MONGODB_DATABASE_NAME | Name of the Database in MongoDB                             |
| HASH_SECRET           | Random string used for hasing, (your secret)                |
| JWT_SECRET            | Random string used for jwt, (your secret)                   |
| ADMIN_SECRET          | Random string used for admin token, (your secret)           |

&nbsp;

###### Example of how the file would look like:

```
REACT_BUILD_FOLDER = ../frontend/dist
MONGODB_DATABASE_URL = mongodb://username:password@host:port/database?options...
MONGODB_DATABASE_NAME = myDatabase
HASH_SECRET = BNTI7KCUJL5N4MSNVY6DBH5RL1M469M5
JWT_SECRET = BV9G9MAV6LYD8U6YIBS07AYHVB8QOXF2
ADMIN_SECRET = BV9G9MAV6LYD8U6YIBS07AYHVB8QOXF2
```

&nbsp;

### Package.json Scripts

| Scripts          | Description                   |
| ---------------- | ----------------------------- |
| npm install      | Installs dependencies         |
| npm run frontend | Runs the frontend in dev mode |
| npm run backend  | Runs the backend              |
| npm run build    | Builds the frontend           |

To run the application in production mode, run `npm run build` then `npm run backend`, now you can view it in the browser!

&nbsp;
&nbsp;

### User Authentication Routes

| Method | Route            | Description                  |
| ------ | ---------------- | ---------------------------- |
| POST   | /api/auth/login  | Login using email & password |
| POST   | /api/auth/signup | Create a new account         |
| GET    | /api/auth/logout | Logout                       |
| GET    | /api/auth/verify | Verify logged in account     |
| DELETE | /api/auth/delete | Delete current account       |
