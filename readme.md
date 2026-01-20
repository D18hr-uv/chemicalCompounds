# Chemical Compounds Management App

A full-stack web application to manage and explore chemical compounds using a modern frontend and a RESTful backend.

## Submission Video: 
https://drive.google.com/file/d/1zw0Ikf7t8v6qkS-UfhnLGnUBlHHFe-5c/view?usp=sharing


## Tech Stack

**Frontend**
- Angular
- Tailwind CSS
- DaisyUI

**Backend**
- Node.js
- Express.js
- Sequelize ORM
- MySQL

---

## Features

- View compounds in card layout
- Pagination (10 items per page)
- View compound details
- Delete compounds
- RESTful CRUD API

---

## API Endpoints

Base URL:
``` bash
http://localhost:3001/api/compounds
```


| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/` | Get paginated compounds |
| GET | `/:id` | Get compound by ID |
| POST | `/` | Create compound |
| PUT | `/:id` | Update compound |
| DELETE | `/:id` | Delete compound |

---

## Setup

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd chemical-compounds-ui
npm install
npm start
```

### Running URLs

Frontend:

```
http://localhost:4200
```
Backend:
```
http://localhost:3001
```