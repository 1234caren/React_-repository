import React from 'react';

const Cliente = (props) => {
    const {image,name,address,id,description,ownername} = props.cliente;
    return (
        <div className="card card-customers" >
            <div><img className="card-img-top" src={`/img/${image}.jpg`} alt="mascota"/></div>
            <div className="card-body">
                <h5  className="card-title"> {name}</h5>
                <p className="card-text"><b>Nombre dueno: </b>{ownername}</p>
                <p className="card-text"><b>Descpcion:</b> {description}</p>
                <p className="card-text"><b>Direccion:</b>{address}</p>
                <p className="card-text"><b>Id:</b> {id}</p>
            </div>
        </div>
    );
}
export default Cliente;