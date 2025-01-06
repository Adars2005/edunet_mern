# News Application

This project is a News Application built using React for the frontend and ExpressJS for the backend, with MongoDB as the database. The application allows users to browse, search, and read news articles.

## Project Structure

```
news-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── config
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database connection in `backend/src/config/db.js`.

4. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## Features

- User authentication
- Browse and search news articles
- Create, update, and delete news articles (admin functionality)

## API Endpoints

Refer to the `backend/README.md` for detailed API endpoints and usage.

## License

This project is licensed under the MIT License.