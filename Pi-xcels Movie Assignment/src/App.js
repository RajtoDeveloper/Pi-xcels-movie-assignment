import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      if (response.ok) {
        const payload = await response.json();
        setMovies(payload.data);
      } else {
        console.error('Failed to fetch movies list');
      }
    }
    getData();
  }, []);
 
  async function selectMovie(id) {
    const response = await fetch(`/api/movies/${id}`);
    if (response.ok) {
      const movie = await response.json();
      setSelectedMovie(movie);
    }
  }

  function backToList() {
    setSelectedMovie(null);
  }

  if (selectedMovie) {
    // Single movie page
    const releaseDate = new Date(selectedMovie.release_date);
    const localizedDate = releaseDate.toLocaleDateString();
    const runtimeMinutes = selectedMovie.runtime;

    return (
      <div className="App">
        <button onClick={backToList}>Back to list</button>
        <h1>{selectedMovie.title}</h1>
        <p><strong>Tagline:</strong> {selectedMovie.tagline}</p>
        <p><strong>Overview:</strong> {selectedMovie.overview}</p>
        <p><strong>Release Date:</strong> {localizedDate}</p>
        <p><strong>Runtime:</strong> {runtimeMinutes} minutes</p>
        <p><strong>Vote Average:</strong> {selectedMovie.vote_average}</p>
        <p><strong>Status:</strong> {selectedMovie.status}</p>
        <p><strong>Vote Count:</strong> {selectedMovie.vote_count}</p>
      </div>
    );
  }

  // List movies page with responsive grid
  return (
    <div className="App">
      <h1>Movies List</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card" onClick={() => selectMovie(movie.id)}>
            <h2>{movie.title}</h2>
            <p>{movie.tagline}</p>
            <p>Rating: {(movie.vote_average).toFixed(1)} / 10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
