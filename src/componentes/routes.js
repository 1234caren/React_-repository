import React from 'react';
import { Route, Router } from 'react-router-dom';
//auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';
//componentes propios
import Turnos from './Turnos';
//import Clientes from './Clientes';
import Home from './Home';
import Clima from './Clima';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route exact path="/" component={Home} />
          
          <Route path="/agregar" component={Turnos} />
          <Route path="/clima" component={Clima} />
        </div>
      </Router>
  );
}
