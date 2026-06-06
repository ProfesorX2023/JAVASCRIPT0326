class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} Kg. ${this.edad} años`
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo =  sexo;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} Kg. - ${this.edad} años - ${this.color}`;
    }
}

class Pajaro extends Animal {
    constructor(nombre, peso, edad, especie){
        super(nombre, peso, edad);
        this.especie = especie;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} Kg. - ${this.edad} años ${this.especie}`
    }
}

let perro1 = new Perro('Simba', 11, 4, 'Shih Tzu');
let gato1 = new Gato('Ringo', 4, 6,'Macho');
let conejo1 = new Conejo('Dumbo', 2, 3, 'blanco');
let pajaro1 = new Pajaro('Pio', 2, 10, 'Canario')

let animales = [perro1, gato1, conejo1, pajaro1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');
    for(let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}