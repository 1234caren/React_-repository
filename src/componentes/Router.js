import React,{Component} from 'react';
import { Switch,Route} from 'react-router-dom';

import Agregar from './Agregar';
import Clientes from './Clientes';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/clientes" component={Clientes} />
                <Route path="/Clima" component={Agregar} />
            </Switch>
        );
    }
}