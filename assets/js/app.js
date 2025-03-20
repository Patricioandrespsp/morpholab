document.getElementById('buscador').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const investigaciones = document.querySelectorAll('.investigacion');

    investigaciones.forEach(investigacion => {
        const titulo = investigacion.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(searchTerm)) {
            investigacion.style.display = 'block';
        } else {
            investigacion.style.display = 'none';
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen-animada");
    imagenes.forEach((imagen, index) => {
        setTimeout(() => {
            imagen.classList.add("visible"); // Añade la clase que las hace aparecer
        }, index * 500); // Retraso de 500 ms entre cada imagen
    });
});
