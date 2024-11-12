let lista = [
    "Pane",
    "Latte",
    "Biscotti",
    "Pasta",
    "Carne",
    "Verdure",
    "Frutta",
]

for (let i = 0; i < lista.length; i++) {
    
    
}
console.log(lista)
let ul = document.getElementById("lista");

let i = 0;
while (i < lista.length) {
    
    let li = document.createElement("li");
    li.textContent = lista[i];
    ul.appendChild(li);
    i++;
    
    
    
}