import React,{Component} from 'react';
import calendario from '../images/evento.png';
import sol from '../images/sol.png';
import reporte from '../images/report.png';
import Clima from './Clima';
export default class Home extends Component {

    render() {
        return (
            <div className="">
            <Clima/>
                <div className="header-img center">
                    <div className="container-text">
                        <h3>SISTEMA PARA VETERINARIAS</h3>
                        
                    </div>
                </div>

                <div className="container-box" >
                    <div className="col-text" >
                        <span className="title">Administrar Turnos</span>
                        <p>Con el sistema de turnos , vas a agregar y administrar cada uno de tus turnos.Programe su agenda y organice sus actividades.</p>
                    </div>
                    <div className="col-img ">
                        <img src={calendario} alt="" />
                    </div>
                </div>
                <div className="container-box">
                    <div className="col-img">
                        <img src={reporte} alt="" />
                    </div>
                    <div className="col-text">
                        <span className="title">Informacion de los cliente</span>
                        <p> Usted solo debe ocuparse de su profesión, la seguridad de sus datos y la infraestructura ya no serán un problema para usted. Su información está resguardada con los mejores estándares de seguridad y confiabilidad, en los mejores centros de procesamiento de datos en la nube. Total control para administrar y auditar a sus usuarios.</p>
                    </div>

                </div>
                <div className="container-box">
                    <div className="col-text" >
                        <span className="title">Clima</span>
                        <p>Tener informacion del clima</p>
                    </div>
                    <div className="col-img">
                       <img src={sol} alt=''/>
                    </div>
                </div>
                <div>
                   
                </div>
            </div>
        );
    }
}