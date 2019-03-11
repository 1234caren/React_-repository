import React,{Component} from 'react';
import clientesDatos from '../static/datos.json';
import Cliente from './Cliente';
import Titulo from './Titulo';

export default class Clientes extends Component {
    state = {
        datos: clientesDatos
    }

    render() {
        return (
            <div className="container-customers">
                <Titulo
                    titulo={'Informacion de clientes'}       
                />
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