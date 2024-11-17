const botonFijo = document.getElementById('botonFijo');
const posicion = 200;

window.addEventListener('scroll', () => {
    if (window.scrollY > posicion) {
        botonFijo.style.display = 'block';
    } else {
        botonFijo.style.display = 'none';
    }
});

function scrollCards(direction, cardsContainer) {
    const scrollAmount = 200;
    cardsContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
