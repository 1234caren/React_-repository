import React from 'react';

const Cliente = (props) => {
    const {imagen,nombre,direccion,id,descripcion,nombredueno} = props.cliente;
    return (
        <div className="card card-customers" >
            <div><img className="card-img-top" src={`/img/${imagen}.jpg`} alt="mascota"/></div>
            <div className="card-body">
                <h5  className="card-title"> {nombre}</h5>
                <p className="card-text">Nombre dueno: {nombredueno}</p>
                <p className="card-text">Descpcion: {descripcion}</p>
                <p className="card-text">Direccion: {direccion}</p>
                <p className="card-text">Id: {id}</p>
            </div>
        </div>
    );
}
export default Cliente;