# HuLe Marketing Website

A full-stack website for HuLe Marketing, a Digital Marketing & Web Development Agency. Built with Next.js, Express, and MongoDB.

## Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS, Lucide React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT

## Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)

## Getting Started

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/hule-marketing
   JWT_SECRET=your_super_secret_key_change_this
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

### 2. Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Features

- **Public Pages:** Home, About, Services, Portfolio, Pricing, Blog, Contact, Quote.
- **Admin Dashboard:** Manage content (Blog, Services, Portfolio, etc.) and view messages/quotes.
- **Authentication:** Admin login to access the dashboard.

## Admin Access

- **Login URL:** `http://localhost:3000/admin/login`
- **Default Credentials:** (You need to create a user in the database or use the registration endpoint if enabled. For demo purposes, the frontend has a mock login check: `admin@hule.com` / `admin123`)

## Project Structure

- `client/`: Next.js frontend application
- `server/`: Express backend API
  - `models/`: Mongoose database models
  - `routes/`: API routes
  - `controllers/`: Route logic
