import React, { Component } from 'react';
import Header from './componentes/Header';
import Agregar from './componentes/Agregar';
import Lista from './componentes/Lista';
class App extends Component {
  state ={
    citas: []
  }
  //UNA VEZ QUE SE ELIMINA DEL DOM SE ELIMINA DEL STATE
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
    console.log('cuando el componente esta listo');
  }
  //componentWillMount(){
    //console.log('ANTES DEL COMPONENTE');
  //}
  //componentWillUnmount(){
    //console.log('yo hasta que cierra el componente');
  //}
  componentDidUpdate(){
    console.log('cuando el componente cambia');
    localStorage.setItem(
      'citas',
      //arreglo en un string y lo almacena en el storage
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);

    this.setState({
      citas
    });
  }

  BorrarCita = id =>{
    console.log(id);
    //obtener copia del state
    const citasActuales = [...this.state.citas];
    
    //eliminar del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el state
    this.setState({
      citas
    })
  }
  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pacientes'}
        />
        <div className="row">
          <div className="col-md-12">
            <Agregar
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-12">
            <Lista
              citas={this.state.citas}
              BorrarCita={this.BorrarCita}
            />

          </div>
        </div>


      </div>
    );
  }
}

export default App;
