const lista = [
    "Pane",
    "Latte",
    "Biscotti",
    "Pasta",
    "Carne",
    "Verdure",
    "Frutta",
]

// for (let i = 0; i < lista.length; i++) {
    
//     const element = lista[i];
//     console.log(i, element)
    
// }

const listaElement = document.querySelector("ul")

let i = 0;
while (i < lista.length) {
    
    const element = lista[i];
    console.log(i, element);
    i++;
    
    const elemento = document.createElement("li");
    elemento.innerText = element;
    listaElement.append(elemento);
    
}