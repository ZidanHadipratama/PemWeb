// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const movieDetails = document.getElementById('movieDetails');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            fetchMovieDetails(searchTerm);
        }
    });

    function fetchMovieDetails(searchTerm) {
        // Replace 'YOUR_OMDB_API_KEY' with your actual OMDB API key
        const apiKey = '6f12db4f';
        const apiUrl = `https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`;
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                if (data.Response === 'True') {
                    displayMovieDetails(data);
                } else {
                    movieDetails.innerHTML = '<p>Movie not found!</p>';
                }
            } else if (xhr.readyState === 4) {
                console.error('Error fetching data:', xhr.status);
            }
        };

        xhr.send();
    }

    function displayMovieDetails(movie) {
        const html = `
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>Director: ${movie.Director}</p>
            <p>Plot: ${movie.Plot}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
        `;
        movieDetails.innerHTML = html;
    }
});
