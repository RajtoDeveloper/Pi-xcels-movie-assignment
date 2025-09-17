# Pi-xcels Movie Assignment

## Project Overview
This is a **full-stack web application** that displays a list of movies and detailed information about each movie. The project uses **React** for the frontend and **Node.js with Express** for the backend. Movie data is loaded from `movies_metadata.json` and served via backend APIs.

## Features

### Movies List Page
- Displays all movies in a **responsive grid layout** (4 columns on desktop, 1 column on mobile).  
- Shows **Title**, **Tagline**, and **Vote Average (out of 10)**.  
- Clicking a movie navigates to its **detailed page**.  

### Single Movie Page
- Displays **all available movie fields** (title, tagline, overview, release date, runtime, vote average, genres, etc.).  
- Release date is **localized based on browser settings**.  
- Runtime is displayed in **minutes**.  
- Includes a **button to return to the movies list**.  

### Backend APIs
- `GET /api/movies` → List all movies  
- `GET /api/movies/:id` → Get details of a single movie by ID  

## Technical Details
- **Frontend:** React 
- **Backend:** Node.js 
- **Data:** `movies_metadata.json`  

## How to Run
1. Clone the repository:
```bash
git clone <repo-link>

2.Install dependencies:

npm install
Run in development mode:
npm start

Open your browser at:http://localhost:3000

Responsive Design

The application adapts to different screen sizes for a smooth experience on desktop, tablet, and mobile devices.

Future Improvements,Add search and filter functionality,Include pagination for large movie lists,Enhance UI with animations or movie posters,Add user authentication to save favorite movies
