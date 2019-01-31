import React,{Component} from 'react';

export default class Cita extends Component {
    eliminarCita  = () =>{
        console.log('eliminar');
        this.props.BorrarCita(this.props.info.id)
    }
    render() {
        const {Fecha,Hora,mascota,Sintomas,Dueno}= this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre dueno:</span>{Dueno}</p>
                    <p className="card-text"><span>Fecha</span>{Fecha}</p>
                    <p className="card-text"><span>Hora</span>{Hora}</p>
                    <p className="card-text"><span>Sintomas</span>{Sintomas}</p>     
                    <button className="btn btn-danger" onClick={this.eliminarCita}>Borrar</button>
                </div>
            </div>
        );
    }
}