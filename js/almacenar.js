const item = document.getElementById("item");
const buttonAgregar = document.getElementById("agregar");
const arrayItems = [];

buttonAgregar.addEventListener("click", (evt) => {
if (item.value) {
    localStorage.setItem("item", item.value);
}
document.getElementById("contenedor").innerHTML += '<li>'+localStorage.getItem("item")+'</li>';
});

//Hay 3 funcionalidades diferentes, a realizar en la misma función de evento
//Al momento de cargar la página, traer el array (almacenado en localStorage), recorrerlo con for, y cargarlo
//localStorae solo guarda string (convertilo con stringify)
//for of