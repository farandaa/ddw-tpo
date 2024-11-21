// Variables scroll-top
const btnFijo = document.getElementById('scroll-top');

// Funcion para mostrar/ocultar boton de scroll vertical
window.addEventListener('scroll', () => {
    const posicion = 200;
    if (window.scrollY > posicion) {
        btnFijo.style.display = 'block';
    } else {
        btnFijo.style.display = 'none'; 
    }
});

// Funcion para realizar el scroll vertical
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Funcion para realizar scroll horizontal de las cards
function scrollCards(direction, cardsContainer) {
    const scrollAmount = 200;
    cardsContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


// Variables carrito
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCompra = document.getElementById('total-compra');
const carritoElemento = document.getElementById('carrito');
const toggleCarritoBtn = document.getElementById('btn-carrito');

// Función para mostrar/ocultar el carrito
toggleCarritoBtn.addEventListener('click', () => {
    carritoElemento.classList.toggle('oculto'); // Alterna la clase 'oculto'
});

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
}

// Eventos para agregar productos
document.querySelectorAll('.agregar').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const producto = e.target.closest('.producto');
        agregarAlCarrito({
            id: parseInt(producto.dataset.id),
            nombre: producto.dataset.nombre,
            precio: parseFloat(producto.dataset.precio)
        });
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}
        `;
        listaCarrito.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    totalCompra.textContent = total.toFixed(2);

}

// Evento para realizar el pago
document.getElementById('btn-pagar').addEventListener('click', () => {
    alert('Pago realizado con éxito.');
    carrito.length = 0; // Vaciar carrito
    actualizarCarrito();
});