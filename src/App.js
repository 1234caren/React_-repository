import React, { Component } from 'react';
import Router from './componentes/Router';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Router/>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default App;
