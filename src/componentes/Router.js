import React,{Component} from 'react';
import { Switch,Route} from 'react-router-dom';
import Turnos from './Turnos';
import Clientes from './Clientes';
import Home from './Home';
import Clima from './Clima';
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/agregar" component={Turnos} />
                <Route path="/clima" component={Clima} />
            </Switch>
        );
    }
}