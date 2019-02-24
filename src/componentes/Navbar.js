import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {

    render() {
        return (
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/agregar'}>Turnos</Link>
                <Link to={'/clientes'}>Clientes</Link>
                <Link to={'/clima'}>Clima</Link>

                
            </nav>
        );
    }
}