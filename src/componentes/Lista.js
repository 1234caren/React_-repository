import React,{Component} from 'react';
import Cita from './Cita'
class Lista extends Component {

    render() {
        const citas = this.props.citas;       
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar citas';
        return (
            <div className="card mt-5">
               <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                                BorrarCita={this.props.BorrarCita}
                            />                            
                        ))}

                    </div>
               </div>
            </div>
        );
    }
}
export default Lista;