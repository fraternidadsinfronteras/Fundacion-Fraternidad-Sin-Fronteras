document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slider .slide");
    const indicadores = document.querySelector(".slider-indicadores");

    if (slides.length === 0) return;

    let indiceActual = 0;
    let temporizador;

    // Crear un punto por cada fotografía
    if (indicadores) {
        indicadores.innerHTML = "";

        slides.forEach(function (_, indice) {
            const boton = document.createElement("button");
            boton.type = "button";
            boton.setAttribute("aria-label", "Ver fotografía " + (indice + 1));

            boton.addEventListener("click", function () {
                mostrarSlide(indice);
                iniciarCarrusel();
            });

            indicadores.appendChild(boton);
        });
    }

    function mostrarSlide(indice) {
        slides[indiceActual].classList.remove("active");
        indiceActual = indice;
        slides[indiceActual].classList.add("active");

        if (indicadores) {
            const botones = indicadores.querySelectorAll("button");

            botones.forEach(function (boton, i) {
                boton.classList.toggle("active", i === indiceActual);
            });
        }
    }

    function iniciarCarrusel() {
        clearInterval(temporizador);

        temporizador = setInterval(function () {
            mostrarSlide((indiceActual + 1) % slides.length);
        }, 5000);
    }

    slides.forEach(function (slide, indice) {
        slide.classList.toggle("active", indice === 0);
    });

    iniciarCarrusel();
});
/* CARRUSEL AUTOMÁTICO DE NUESTRA HISTORIA */
const fotosHistoria = document.querySelectorAll(".historia-galeria .historia-foto");

if (fotosHistoria.length > 1) {
    let indiceHistoria = 0;

    setInterval(function () {
        fotosHistoria[indiceHistoria].classList.remove("activa");
        indiceHistoria = (indiceHistoria + 1) % fotosHistoria.length;
        fotosHistoria[indiceHistoria].classList.add("activa");
    }, 5000);
}

/* GALERÍAS DE NUESTROS PROGRAMAS */

const carpetasProgramas = {
    comedor: {
        titulo: "Comedor Comunitario",
        carpeta: "Comedor Comunitario",
        cantidad: 25
    },
    jardin: {
        titulo: "Creación Jardín Ancestral Casa Afro",
        carpeta: "Creacion Jardin Ancestral Casa Afro",
        cantidad: 15
    },
    deporte: {
        titulo: "Deporte y Salud",
        carpeta: "Deporte y Salud",
        cantidad: 5
    },
    navidad: {
        titulo: "Fiestas Navideñas con Niños",
        carpeta: "Fiestas Navidenas con Ninos",
        cantidad: 17
    },
    crochet: {
        titulo: "Curso de Crochet",
        carpeta: "Curso de Crochet",
        cantidad: 1
    },
      chocolatada: {
        titulo: "Chocolatada Solidaria",
        carpeta: "Chocolatada Solidaria",
        cantidad: 1
    },
    cine: {
        titulo: "Cine Casa Afro",
        carpeta: "Cine Casa Afro",
        cantidad: 1
    }
};

function abrirPrograma(programa) {
    const datos = carpetasProgramas[programa];

    if (!datos) return;

    document.getElementById("titulo-galeria-programa").textContent =
        datos.titulo;

    const galeria = document.getElementById("galeria-programa");
    const contenedor = document.getElementById("fotos-programa");

    contenedor.innerHTML = "";

    const extensiones = [".jpeg", ".jpg", ".png", ".webp"];
    let numero = 1;

    galeria.hidden = false;

    function probarFoto() {
        if (numero > 100) return;

        const imagen = document.createElement("img");
        let extensionActual = 0;

        function probarExtension() {
            if (extensionActual >= extensiones.length) {
                numero++;
                probarFoto();
                return;
            }

            imagen.src =
                "imagenes/" + datos.carpeta + "/" +
                numero + extensiones[extensionActual];

            extensionActual++;
        }

        imagen.onload = function () {
            contenedor.appendChild(imagen);
            numero++;
            probarFoto();
        };

        imagen.onerror = function () {
            probarExtension();
        };

        probarExtension();
    }

    probarFoto();
    galeria.scrollIntoView({ behavior: "smooth" });
}

function cerrarPrograma() {
    document.getElementById("galeria-programa").hidden = true;

    document.getElementById("programas").scrollIntoView({
        behavior: "smooth"
    });
}
window.abrirPrograma = abrirPrograma;