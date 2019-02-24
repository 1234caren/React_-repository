import React,{Component} from 'react';
import logo from '../images/MyVete.jpg';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
export default class Header extends Component {

    render() {
        return (
            <div>
        <div className="home">
            <div>
                <Link to={'/'}>
                        <img src={logo} alt='logo'/>
                </Link>
            </div>
        </div>
            <Navbar/>
                
        </div>
        );
    }
}