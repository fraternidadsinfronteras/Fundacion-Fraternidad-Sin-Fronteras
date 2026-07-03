// Mensaje de bienvenida
window.addEventListener("load", () => {
    console.log("Bienvenido a la Fundación Fraternidad Sin Fronteras");
});

// Desplazamiento suave del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Botón para volver arriba
const botonArriba = document.createElement("button");
botonArriba.innerHTML = "⬆";
botonArriba.id = "btnArriba";
document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "12px 15px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#0c4a6e";
botonArriba.style.color = "white";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ================= CARRUSEL DE LA PORTADA =================

const hero = document.querySelector(".hero");

const imagenes = [
    "images/slider/1.jpeg",
    "images/slider/2.jpeg",
    "images/slider/3.jpeg",
    "images/slider/4.jpeg",
    "images/slider/5.jpeg",
   
];

let indice = 0;

setInterval(() => {

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    hero.style.background =
        `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url('${imagenes[indice]}')`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";

}, 4000);
// Cambiar apariencia del menú al hacer scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("activo");
    }else{
        header.classList.remove("activo");
    }

});
// Contadores animados

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const objetivo = +contador.dataset.target;
        let numero = 0;

        const aumentar = () => {

            const incremento = objetivo / 80;

            if (numero < objetivo) {

                numero += incremento;
                contador.innerText = Math.ceil(numero);

                requestAnimationFrame(aumentar);

            } else {

                contador.innerText = objetivo;

                if (objetivo === 500) contador.innerText = "500+";
                if (objetivo === 20) contador.innerText = "20+";
                if (objetivo === 100) contador.innerText = "100%";
            }

        };

        aumentar();

    });

};

const seccionImpacto = document.querySelector("#impacto");

const observador = new IntersectionObserver((entradas) => {

    if (entradas[0].isIntersecting) {

        iniciarContadores();
        observador.disconnect();

    }

});

observador.observe(seccionImpacto);
// ================= ANIMACIONES AL HACER SCROLL =================

const elementos = document.querySelectorAll("section");

elementos.forEach((elemento)=>{
    elemento.classList.add("oculto");
});

const mostrarElemento = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){
            entrada.target.classList.add("mostrar");
        }

    });

},{
    threshold:0.15
});

elementos.forEach((elemento)=>{
    mostrarElemento.observe(elemento);
});
// ================= GALERÍA LIGHTBOX =================

const imagenesGaleria = document.querySelectorAll(".grid-galeria img");
const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagen-grande");
const cerrar = document.querySelector(".cerrar");

imagenesGaleria.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";
        imagenGrande.src=img.src;

    });

});

cerrar.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        lightbox.style.display="none";
    }

});
// ================= PRELOADER =================

window.addEventListener("load",()=>{

    const preloader=document.getElementById("preloader");

    setTimeout(()=>{

        preloader.style.opacity="0";

        setTimeout(()=>{

            preloader.style.display="none";

        },800);

    },1200);

});
// ================= MENÚ RESPONSIVE =================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

    nav.classList.toggle("activo");

});

