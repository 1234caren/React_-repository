import React,{Component} from 'react';
import uuid from 'uuid';
import logo from '../images/logo.png';
import App from '../css/App.css';

export default class Class extends Component {
    //refs
    nombreMascotaRef = React.createRef();
    nombreDueno = React.createRef();
    fecha = React.createRef();
    hora = React.createRef();
    sintomas = React.createRef();
    state = {
        error : false
    }
    crearNuevaCita = e => {
        e.preventDefault();
        const mascota = this.nombreMascotaRef.current.value,
            Dueno = this.nombreDueno.current.value,
            Fecha = this.fecha.current.value,
            Hora = this.hora.current.value,
            Sintomas = this.sintomas.current.value;

            if (mascota === '' || Dueno === '' || Fecha === '' || Hora === '' || Sintomas === '' ){
                this.setState({
                    error: true
                });
            } else{

                const nuevaCita = {
                    id: uuid(),
                    mascota,
                    Dueno,
                    Fecha,
                    Hora,
                    Sintomas
                }
        
                //se envia el objeto hacia el padre para actualizar el state
                this.props.crearCita(nuevaCita);
        
                //Reiniciar el formulario
                e.currentTarget.reset();

                //elimine el error
                this.setState({
                    error:false
                })
            }

        



    }


    render() {
        const existeError = this.state.error;
        return (
            <div className="card mt-5">
            <div className="card-body card-add">
                <img src={logo} className="Applogo" alt="logo" />
                <div className="container">
                    <p className="text-center">Bienvenido al Sistema de Turnos Online de Animalia.</p>
                    <p className="text-center">Desde acá podés administar los turnos, también podés Consultar o Cancelar los turnos que se hayan solicitado mediante este Sistema de Turnos Online.</p>

                </div>
                
                <form onSubmit={this.crearNuevaCita} className="container-form">
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input ref={this.nombreDueno} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input ref={this.fecha} type="date" className="form-control" />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input ref={this.hora} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea ref={this.sintomas} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div>:''}
                </div>
            </div>
        );
    }
}
