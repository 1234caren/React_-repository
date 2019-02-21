import React, { Component } from 'react';
import Header from './componentes/Header';
import Agregar from './componentes/Agregar';
import Lista from './componentes/Lista';
import Error from './componentes/Error';
import FormularioClima from './componentes/FormularioClima';
import Router from './componentes/Router';

class App extends Component {
  state ={
    citas: [],
    error : '',
    consulta : {},
    resultado:{}
  }
  //UNA VEZ QUE SE ELIMINA DEL DOM SE ELIMINA DEL STATE
  componentDidMount(){
    //eror
    this.setState({
      error:false
    })
    // fin error

    const citasLS = localStorage.getItem('citas');

    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
    //console.log('cuando el componente esta listo');
  }

  componentDidUpdate(){
    //console.log('cuando el componente cambia');
    localStorage.setItem(
      'citas',
      //arreglo en un string y lo almacena en el storage
      JSON.stringify(this.state.citas)
    )
    this.consultarApi();
  }
    //componentWillMount(){
      //console.log('ANTES DEL COMPONENTE');
    //}
    //componentWillUnmount(){
      //console.log('hasta que cierra el componente');
    //}


  //CITAS
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

  //CLIMA API
    //Datos ingresados
    datosConsulta = (respuesta) => {
      if(respuesta.city === '' || respuesta.country === ''){
        this.setState({
          error:true
        })
      }else{
        this.setState({
          consulta:respuesta
        })
      }
      
    }
  consultarApi = async () => {
    const {city,country} = this.state.consulta;
    if(!city || !country) return null;

    //api id
    const appId='46bdef5fb80a7c9678aaf82ac94702c7';

    const url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`);
    const respuesta = await url.json();
    console.log(url);
    console.log(respuesta);


    // query con fetch api, caracteristica de e6
    //la respuesta se puede retornar como json o como texto en este caso es con json


  }



  render() {
    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje={'Los campos son obligatorios'}/>
    }
    return (
      <React.Fragment>
        <Router/>
        <div className="container">
          <Header
            titulo={'Sistemas de turnos'}
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
        <div>
            <div className="col-md-12">
                <FormularioClima
                  datosConsulta={this.datosConsulta}
                />
                {resultado}
            </div>
        </div>

      </React.Fragment>

    );
  }
}

export default App;
