const item = document.getElementById("item");
const buttonAgregar = document.getElementById("agregar");
const buttonLimpiar = document.getElementById("limpiar");
let arrayNewItems = [];
let arrayOldItems = [];

function agregarItem() {

    if (localStorage.getItem("arrayItems") != null) {
        arrayNewItems = JSON.parse(localStorage.getItem("arrayItems"));
    }

    if (item.value) {
        arrayNewItems.push(item.value);
        localStorage.setItem("arrayItems", JSON.stringify(arrayNewItems));
        localStorage.setItem("item", item.value);
    }
    document.getElementById("contenedor").innerHTML += '<li>'+localStorage.getItem("item")+'</li>';
    item.value="";
};

buttonAgregar.addEventListener("click", (evt) => {
agregarItem();
});

buttonLimpiar.addEventListener("click", (ev)=> {
document.getElementById("contenedor").innerHTML = "";
localStorage.clear();
})

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("arrayItems") !== null) {
arrayOldItems = localStorage.getItem("arrayItems");
arrayOldItems = JSON.parse(arrayOldItems);
for (let oldItem of arrayOldItems) {
    // console.log(oldItem);
    document.getElementById("contenedor").innerHTML += '<li>' + oldItem + '</li>';
}
}
})
