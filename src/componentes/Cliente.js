import React from 'react';
import Clientes from './Clientes';
import Class from './Agregar';

const Cliente = (props) => {
    const {imagen,nombre,direccion,id,descripcion} = props.cliente;

    return nombre;
}


export default Cliente;