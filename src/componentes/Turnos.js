import React,{Component} from 'react';
import Titulo from './Titulo';
import Agregar from './Agregar';
import Lista from './Lista';



class Turnos extends Component {
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
      //this.consultarApi();
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
    render() {
      return (
        
        <div>
          <div className="container">
            <Titulo
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
    </div>
  
      );
    }
  }
  
  export default Turnos;
  