import './TarjetaPerfil.css';
import '../App.css';

function TarjetaPerfil(){
    const nombre = 'Luis García';
    const curso = 'Javascript Total';
    const nivel = 'Semana 11';
    const progreso = '75';

    return(
        <div className="tarjeta">
            <div className="avatar">LG</div>
            <h3>{nombre}</h3>
            <p>Curso: {curso}</p>
            <p>Avance: {nivel}</p>
            <p>Progreso: {progreso}%</p>
            {/* Esto es un comentario en JSX */}
        </div>
    );
}

export default TarjetaPerfil;