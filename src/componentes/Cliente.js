import React from 'react';
import Clientes from './Clientes';
import Class from './Agregar';

const Cliente = (props) => {
    const {imagen,nombre,direccion,id,descripcion} = props.cliente;
    return (
        <div className="mdc-card">
            <ul>
                <li>Nombre mascota: {nombre}</li>
                <li>Nombre dueno:</li>
                <li>Descpcion: {descripcion}</li>
                <li>Direccion: {direccion}</li>
                <li>Id: {id}</li>
                <li><img src={"../images/img/"+ imagen +".jpg"} alt="mascota"/></li>
            </ul>
        </div>
    );
}


export default Cliente;