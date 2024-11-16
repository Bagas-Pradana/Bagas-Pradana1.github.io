// Membuat Penambahan Class Melalui JS
// Pada Kasus ini Penambahan <ul class="slide">

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
});