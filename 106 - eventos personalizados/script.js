let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("cambioModo", mensajeModo);
input.addEventListener("keydown", verificarInput);
boton.addEventListener("click", buscar);

let archivo = 'peliculas.json';

function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo(){
    alert("El archivo de busqueda ahora es " + selector.value);
}

function verificarInput(event){
    if((event.keyCode < 65 || event.keyCode > 90 ) && event.keyCode !== 32 && event.keyCode !== 8){
        event.preventDefault();
    }
}

function buscar(){
    lista.innerHTML = "";
    
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                let p = document.createElement("p");
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement("li");
                li.innerHTML = item.nombre;

                li.addEventListener("mouseover", function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                lista.addEventListener("mouseout", function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error){
        console.log(error);
    });
}