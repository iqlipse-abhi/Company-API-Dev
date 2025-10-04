# Companies Dashboard

A responsive and dynamic dashboard to view, search, filter, and paginate companies. Built with **React** for the frontend and **Node.js & Express** with **MongoDB** for the backend.

---

## Features

- **CRUD Operations** on companies (Create, Read, Update, Delete)
- **Search** by company name, industry, or tags
- **Filter** companies by industry and multiple tags
- **Pagination** to navigate through large datasets
- **Responsive Design** for mobile, tablet, and desktop
- **Debounced search** to improve performance

---

## Tech Stack

**Frontend:**
- React
- React Select
- Axios
- Lodash.debounce
- Tailwind CSS (optional, can be replaced with your own CSS)

**Backend:**
- Node.js
- Express.js
- MongoDB / Mongoose
- CORS


---

## Setup & Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

| Method | Endpoint                | Description               |
| ------ | ----------------------- | ------------------------- |
| GET    | `/api/companies`        | Get all companies         |
| GET    | `/api/companies/:id`    | Get a company by ID       |
| POST   | `/api/companies`        | Create a new company      |
| PUT    | `/api/companies/:id`    | Update a company by ID    |
| DELETE | `/api/companies/:id`    | Delete a company by ID    |
| GET    | `/api/companies/search` | Search & filter companies |
| GET    | `/api/companies/seed`   | Seed sample companies     |


## Key Decisions

 - Used debounced search for performance optimisation.
 - Grid layout for responsive cards.
 - Backend search supports name, industry, and tags.
 - Pagination is implemented in both the frontend and the backend.



