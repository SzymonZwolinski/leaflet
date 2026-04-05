const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
});

const cards = document.querySelectorAll('.card:not(.link-card)');

cards.forEach(card => {
card.addEventListener('click', () => {
card.classList.toggle('active');
});
});

const map = L.map('map').setView([49.606, 20.697], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.606, 20.697]).addTo(map)
.bindPopup('<b>Bud-Max</b><br>ul. Węgierska 1, 33-300 Nowy Sącz<br><br><a href="https://www.google.com/maps/dir/?api=1&destination=49.606,20.697" target="_blank" style="color: #ff7e5f; text-decoration: none; font-weight: bold;">Nawiguj w Google Maps</a>')
.openPopup();