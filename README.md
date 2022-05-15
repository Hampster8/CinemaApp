# Cinema App using React, Express & MongoDB

We are five students at Högskolan Kristianstad who decided upon creating a Cinema App for educational purposes.

### Prerequisites

Install the dependencies using `npm install` and then create a **.env** file in the root folder.

These parameters are mandatory in the **.env** file.

| Parameters            | Description                                       |
| --------------------- | ------------------------------------------------- |
| MONGODB_DATABASE_URL  | Connection string to your MongoDB                 |
| MONGODB_DATABASE_NAME | Name of the Database in MongoDB                   |
| HASH_SECRET           | Random string used for hasing, (your secret)      |
| JWT_SECRET            | Random string used for jwt, (your secret)         |
| ADMIN_SECRET          | Random string used for admin token, (your secret) |
| OMDBAPI               | API key from OMDBAPI                              |
| USE_DUMMY_DATA        | Populate with dummy data                          |

&nbsp;

###### Example of how the file would look like:

```
MONGODB_DATABASE_URL = mongodb://username:password@host:port/database?options...
MONGODB_DATABASE_NAME = myDatabase
HASH_SECRET = asecretyoudefines
JWT_SECRET = asecretyoudefines
ADMIN_SECRET = asecretyoudefines
OMDBAPI = secretfromOMDBAPI
USE_DUMMY_DATA = false
```

&nbsp;

### How to start the app and its Package.json Scripts

Run the application in production mode: `npm run start`

| Scripts          | Description                     |
| ---------------- | ------------------------------- |
| npm install      | Installs dependencies           |
| npm run frontend | Runs the frontend in dev mode   |
| npm run backend  | Runs the backend                |
| npm run build    | Builds the frontend             |
| npm run start    | Builds and runs the application |

&nbsp;

### API routes

Majority of routes requires admin access, to get admin access you need to have an bearer token wich is the same as the .env ADMIN_SECRET

| Scripts                            | Method | Description                                         |
| ---------------------------------- | ------ | --------------------------------------------------- |
| api/auth/login                     | POST   | Login using email and password                      |
| api/auth/signup                    | POST   | Signup a new user                                   |
| api/auth/logout                    | GET    | Logout user                                         |
| api/auth/verify                    | GET    | Verify/get user information                         |
| api/auth/delete                    | DELETE | Delete user                                         |
| api/screenings                     | GET    | Get all screenings                                  |
| api/screenings                     | POST   | Create a new screening                              |
| api/screenings/date/:date/:movieId | GET    | Get screenings for movie at date                    |
| api/screenings/id/:id              | GET    | Get screening from ID                               |
| api/screenings/:id                 | PATCH  | Update screening                                    |
| api/screenings/:id                 | DELETE | Delete screening                                    |
| api/movies                         | GET    | Get all movies                                      |
| api/movies/imdbID                  | GET    | Get movie from imdbID                               |
| api/movies                         | POST   | Add movie (imdbID)                                  |
| api/movies/:imdbID                 | DELETE | Delete a movie                                      |
| api/bookigns                       | GET    | Get all bookings                                    |
| api/bookigns/:id                   | GET    | Get get booking from id                             |
| api/bookigns/email/:email          | GET    | Get bookign from email                              |
| api/bookigns/mybookings            | GET    | Get all bookings that is for the authenticated user |
| api/bookigns/:id                   | DELETE | Deletes booking                                     |
| api/auditorium                     | GET    | Get all auditoriums                                 |
| api/auditorium/:id                 | GET    | Get auditorium                                      |
| api/auditorium/:id                 | DELETE | Delete auditorium                                   |
| api/auditorium/:id                 | PATH   | Update auditorium                                   |
| api/auditorium                     | POST   | Create auditorium                                   |
