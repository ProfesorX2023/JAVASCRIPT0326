import React from "react";

function Juego(props){
    const [numeroUsuario, setNumeroUsuario] = React.useState(0);
    const [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random()*props.limite+1));

    function ComprobarNumeroUsuario(evento){
        setNumeroUsuario(evento.target.value);
    }

    function comprobarNumeroMaquina(){
        if(numeroUsuario == numeroMaquina){
            alert("Adivinaste!");
        } else {
            alert("Fallaste, era " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random()*props.limite+1));
    }
    return(
        <div>
            <p>Elige del 1 al {props.limite}</p>
            <input 
            type="number" 
            placeholder="Ingresa tu apuesta"
            min={1}
            max={props.limite}
            onChange={ComprobarNumeroUsuario}
            />
            <br />
            <button onClick={comprobarNumeroMaquina}>
                Adivinar
            </button>
        </div>
    )
}

export default Juego;