# SmartBudget

SmartBudget is a full-stack web application to help users track income and expenses. Users can add, edit, and delete transactions, filter by type, and view totals and balances. The project is built with **Next.js** (frontend), **Node.js + Express** (backend), and **MongoDB**.

---

## Features

- **User Authentication**: Register, login, and maintain sessions.
- **Transactions**: Add, edit, and delete income or expense entries.
- **Filters & Totals**: Filter by type (Income/Expense) and view totals.
- **Dashboard**: View all transactions and balances.
- **Responsive & Minimal UI**: Legible fonts and clean design.
- **API Integration**: Frontend communicates with backend via Axios.

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Version Control**: Git & GitHub

---

## Getting Started

### Prerequisites

- Node.js v22+
- npm
- MongoDB (local or cloud)
- Git

### Installation

1. Clone the repository:
git clone https://github.com/VivekllRanjan/smartbudget.git
cd smartbudget


2. Install backend dependencies:
cd backend
npm install


3. Install frontend dependencies:
cd ../frontend
npm install


4. Create .env file
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

4. Running:
cd backend
npm run dev

cd frontend
npm run dev



## Folder Structure
smartbudget/
├─ backend/
│  ├─ src/
│  ├─ package.json
│  └─ .env
├─ frontend/
│  ├─ src/
│  ├─ package.json
│  └─ next.config.mjs
└─ README.md


## Future Enhancements
Charts and analytics for income/expenses
Export data to CSV
Category management
Dark mode support

