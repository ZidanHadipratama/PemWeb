document.addEventListener('DOMContentLoaded', () => {
    const nginput = document.getElementById('nginput');
    const klik = document.getElementById('buton');
    const detail = document.getElementById('detail');

    klik.addEventListener('click', () => {
        const judul = nginput.value;
        if (judul) {
            ngambil(judul);
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
                    detail.innerHTML = '<p>Gaada :p</p>';
                }
            } else if (xml.readyState === 4) {
                console.error(xml.status);
            }
        };

        xml.send();
    }

    function tampil(pilm) {
        const html = `
            <h2>${pilm.Title}</h2>
            <p>Tahun: ${pilm.Year}</p>
            <p>Genre: ${pilm.Genre}</p>
            <p>Director: ${pilm.Director}</p>
            <p>Plot: ${pilm.Plot}</p>
            <img src="${pilm.Poster}" alt="${pilm.Title} Poster">
        `;
        detail.innerHTML = html;
    }
});
