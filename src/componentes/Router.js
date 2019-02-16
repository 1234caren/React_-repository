import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FormularioClima from './FormularioClima';
import App from '../App';
import Nofound from './Nofound';
export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={Nofound} />
                    <Route exact path='/' component={App}/>
                    <Route exact path='/clima' component={FormularioClima}/>
                </Switch>
            </BrowserRouter>
        );
    }
}