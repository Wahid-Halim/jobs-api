#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
   **Jobs API**

- **Description:** A small RESTful API for managing job postings with authentication. Built with Node.js, Express, and MongoDB. Includes security middleware and centralized error handling.

**Features**

- **Authentication:** Register and login users with JWT-based auth.
- **Job CRUD:** Create, read, update, and delete job postings (authenticated).
- **Security:** Uses `helmet`, `cors`, `xss-clean`, and `express-rate-limit`.
- **Errors:** Centralized error handling and custom error classes.

**Tech Stack**

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT (`jsonwebtoken`)

**Getting Started**

Prerequisites:

- Node.js (14+)
- A MongoDB instance (local or cloud)

Install dependencies:

```bash
npm install
```

Environment:
Create a `.env` file in the project root with at least the following variables:

- `MONGO_URI` - MongoDB connection string
- `PORT` - (optional) port to run the server (default: `3000`)
- `JWT_SECRET` - secret for signing JWTs
- `JWT_LIFETIME` - token lifetime (e.g. `1d`)

Run the app (development):

```bash
npm start
# or for production: node app.js
```

**Project Structure (important files)**

- `app.js` - App entrypoint and middleware setup
- `db/connect.js` - MongoDB connection helper
- `routes/authRoutes.js` - Authentication routes (`/api/v1/auth`)
- `routes/jobsRoutes.js` - Jobs routes (`/api/v1/jobs`) (protected)
- `controllers/` - Route handlers (`authController.js`, `jobsController.js`)
- `models/` - Mongoose models (`User.js`, `job.model.js`)
- `middleware/` - Authentication and error middleware
- `errors/` - Custom error classes

**API Endpoints (summary)**

- Authentication (`/api/v1/auth`)

  - `POST /register` - Register a new user
  - `POST /login` - Login and receive a JWT

- Jobs (`/api/v1/jobs`) — protected by `authenticateUser` middleware
  - `GET /` - List jobs (may support filters/pagination)
  - `POST /` - Create a job
  - `GET /:id` - Get a single job by id
  - `PATCH /:id` - Update a job
  - `DELETE /:id` - Delete a job

Refer to the controllers in `controllers/` for exact request and response schemas.

**Authentication**

- Routes under `  /api/v1/jobs` are protected. Include the JWT in the `Authorization` header as `Bearer <token>`.

**Error Handling**

- The app uses centralized error middleware located at `middleware/error-handler.js` and a not-found handler at `middleware/not-found.js`.
- Custom errors are defined in the `errors/` folder and thrown from controllers for consistent client responses.

**Security**

- Rate limiting configured via `express-rate-limit` in `app.js`.
- Additional middleware: `helmet`, `cors`, `xss-clean`.

**Scripts**

- `npm start` — runs `nodemon app.js` (development)

**Contributing**

- Open an issue or submit a PR. Keep changes small and focused.

**License**

- This project uses the `ISC` license (see `package.json`).

If you'd like, I can also generate a small Postman collection or Swagger spec for these endpoints.
