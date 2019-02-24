import React,{Component} from 'react';

export default class FormularioClima extends Component {
    // creando Los refs
    cityRef = React.createRef();
    countryRef = React.createRef();

    buscador = (e) => {
        //previene el default de enviar el formulario
        e.preventDefault();
        //leer los refs y crear el objeto
        const respuesta = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }
        //console.log(respuesta);
        //enviar por props (comunicandose con el componente padre)
        this.props.datosConsulta(respuesta);

        //resetear el form

    }
    render() {
    
        return (
            <div className="contenedor-form">
            <div className="container">
                <div className="row">
                   <form onSubmit={this.buscador}>
                        <div className="input-field col s12 m8 offset-m2">
                            <input ref={this.cityRef} id="ciudad" type="text" />
                            <label  htmlFor="ciudad">Ciudad:</label>
                        </div>
                        <div className="input-field col s12 m8 offset-m2">
                            <select ref={this.countryRef}> 
                                <option value="" defaultValue>
                                    Elige un pais
                                </option>
                                <option value="AR">
                                    ARGENTINA
                                </option>
                                <option value="BR">
                                    BRASIL
                                </option>

                                <option value="CO">
                                    COLOMBIA
                                </option>    
                                <option value="US">
                                    EEUU
                                </option>                          </select>
                            <label  htmlFor="Pais"></label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-2 buscador">
                            <input type="submit" className="waves-effect waves-light yellow accent-4 btn-large" value="Buscar"></input>
                        </div>
                    </form> 
                </div>
            </div>
            </div>
        );
    }
}