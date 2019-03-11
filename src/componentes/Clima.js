import React,{Component} from 'react';
import FormularioClima from './FormularioClima';
import Error from './Error';
import ResultadoCLima from './ResultadoClima';
export default class Clima extends Component {
  state ={
    error : '',
    consulta : {},
    resultado:{},
    respuesta:null
  }
    //UNA VEZ QUE SE ELIMINA DEL DOM SE ELIMINA DEL STATE
    componentDidMount(){
      //eror
      this.setState({
        error:false
      })
      // fin error
      //console.log('cuando el componente esta listo');
    }
  
    //componentDidUpdate(){
      //console.log('cuando el componente cambia');

      //this.consultarApi();
   // }
      //componentWillMount(){
        //console.log('ANTES DEL COMPONENTE');
      //}
      //componentWillUnmount(){
        //console.log('hasta que cierra el componente');
      //}
  
  //CLIMA API
    //Datos ingresados
    datosConsulta = (resultado) => {
      if(resultado.city === '' || resultado.country === ''){
        this.setState({
          error:true
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
    this.setState({
      respuesta
    })

    // query con fetch api, caracteristica de e6
    //la respuesta se puede retornar como json o como texto en este caso es con json


  }

  render() {
      const error = this.state.error;
      const { respuesta } = this.state;

      let resultado = null;

      if (respuesta) {
        resultado = <ResultadoCLima resulato={respuesta} />
      } else if (error) {
        resultado = <Error mensaje={'Los campos son obligatorios'}/>
      }

      return (
      <div>
          <div className="col-md-12">
              <FormularioClima
                datosConsulta={this.datosConsulta}
                onSubmit={this.consultarApi}
              />
              {resultado}
          </div>
      </div>
      );
  }
}