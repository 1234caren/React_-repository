import React,{Component} from 'react';
import perro from '../images/perro.png';
import estetoscopio from '../images/estetoscopio.png';
import cardiograma from '../images/cardiograma.png';
export default class Footer extends Component {

    render() {
        return (
            <footer className="page-footer">
                <div className="footer-top">
                   <p>Conectate con nosotros</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        <h5 className="white-text">Sistema para veterinarias</h5>
                        <p className="grey-text text-lighten-4">Bienvenido al Sistema My vete.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">My Vete</h5>
                            <div className='imgages'>
                                <img src={perro} alt='perro'/>
                                <img src={estetoscopio} alt='estetoscopio'/>
                                <img src={cardiograma} alt='cardiograma'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <span>Caren Ruiz</span>
                        <span>MCGA</span>
                    </div>
                </div>
            </footer>
              
        );
    }
}