import React from 'react';

const Header = props => {
    return(
        <header>
            <h4 className="text-center">{props.titulo}</h4>
        </header>
    )
}

export default Header;