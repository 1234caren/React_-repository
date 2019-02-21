import React,{Component} from 'react';
import clientesDatos from '../static/datos.json';
import Cliente from './Cliente';

export default class Clientes extends Component {
    state = {
        datos: clientesDatos
    }

    render() {
        return (
            <div className="container-clientes">
                <h4>Informacion de Clientes</h4>
                <ul>
                    {this.state.datos.map(cliente => (
                        <li>
                            <Cliente cliente={cliente}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}