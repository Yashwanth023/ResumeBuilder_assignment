# CV Builder Application

A modern CV builder application that allows users to create, edit, and export professional resumes in multiple formats.

## Features

- Multiple professional CV templates
- Drag and drop section reordering
- Image upload for profile pictures
- Auto-save functionality
- Export to PDF and Word formats
- Real-time preview
- Responsive design

## Project Structure

The project is divided into two main parts:

```plaintext
cv-builder/
├── frontend/     # React application
└── backend/      # Express server
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (if using database storage)


## Frontend Setup

1. Navigate to the frontend directory:
```shellscript
cd frontend
```

2.  Install dependencies:
```shellscript
npm install
```

3. Create a .env file:
```plaintext
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server:
```shellscript
npm start
```

I'll help you create a complete CV Builder application with separate frontend and backend codebases, along with a detailed README.md file.

First, let's create the README.md file:

```markdown file="README.md"
...
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (if using database storage)


## Frontend Setup

1. Navigate to the frontend directory:


```shellscript
cd frontend
```

2. Install dependencies:


```shellscript
npm install
```

3. Create a .env file:


```plaintext
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server:


```shellscript
npm start
```

The frontend will be available at `http://localhost:3000`

## Backend Setup

1. Navigate to the backend directory:


```shellscript
cd backend
```

2. Install dependencies:


```shellscript
npm install
```

3. Create a .env file:


```plaintext
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

4. Start the development server:


```shellscript
npm run dev
```

The backend API will be available at `http://localhost:5000`

## Available Scripts

Frontend:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App


Backend:

- `npm run dev` - Runs the server in development mode
- `npm start` - Runs the server in production mode
- `npm test` - Runs the test suite


## API Endpoints

### Resume Operations

- `GET /api/templates` - Get all available templates
- `POST /api/resume` - Create a new resume
- `PUT /api/resume/:id` - Update an existing resume
- `GET /api/resume/:id` - Get a specific resume
- `DELETE /api/resume/:id` - Delete a resume


### File Operations

- `POST /api/upload` - Upload a profile picture


## Technologies Used

Frontend:

- React
- Material-UI
- react-beautiful-dnd
- react-to-print
- docx
- Tailwind CSS


Backend:

- Express.js
- Multer
- Sharp
- CORS


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
