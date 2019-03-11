import React,{Component} from 'react';

export default class ResultadoCLima extends Component {
    mostrarResultado = (props) =>{
        const {name} = this.props.resultado;
        if (!name) return null;
        
        return (
            <div>
                <ul>
                    <li>
                        {name}
                    </li>
                </ul>
            </div>
        )
    }
    render() {
        return (
            <div className="class-name">
                {this.mostrarResultado()}
            </div>
        );
    }
}