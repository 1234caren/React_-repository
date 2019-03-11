import React, { Component } from 'react';
import {makeMainRoutes} from './componentes/routes';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
const routes = makeMainRoutes();
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        {routes}
        <Footer/>
      </React.Fragment>

    );
  }
}

export default App;
