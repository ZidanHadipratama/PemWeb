document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const movieDetails = document.getElementById('movieDetails');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            ngambil(searchTerm);
        }
    });

    function ngambil(nama) {
        const kunci = '6f12db4f';
        const url = `https://www.omdbapi.com/?t=${nama}&apikey=${kunci}`;
        
        const xml = new XMLHttpRequest();
        xml.open('GET', url, true);

        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                const data = JSON.parse(xml.responseText);
                if (data.Response === 'True') {
                    tampil(data);
                } else {
                    movieDetails.innerHTML = '<p>Movie not found!</p>';
                }
            } else if (xml.readyState === 4) {
                console.error('Error fetching data:', xml.status);
            }
        };

        xml.send();
    }

    function tampil(pilm) {
        const html = `
            <h2>${pilm.Title}</h2>
            <p>Year: ${pilm.Year}</p>
            <p>Genre: ${pilm.Genre}</p>
            <p>Director: ${pilm.Director}</p>
            <p>Plot: ${pilm.Plot}</p>
            <img src="${pilm.Poster}" alt="${pilm.Title} Poster">
        `;
        movieDetails.innerHTML = html;
    }
});
