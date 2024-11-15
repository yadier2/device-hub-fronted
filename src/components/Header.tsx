import React from 'react';


interface HeaderProps {
    nombre: string;
    apellido: string;
    ciudad: string;
    picture: string;
}


const Header: React.FC<HeaderProps> = ({ nombre, apellido, ciudad, picture }) => {
    return (
        <header style={headerStyle}>
            <div>
                <h1>Device Management</h1>
            </div>
            <div className='infoUser'>
                <img src={picture} className="avatar" alt="avatar" />
                <div>
                    <h2 className="userTex" >{nombre} {apellido}</h2>
                    <hr />
                    <p className="userTex" >{ciudad}</p>
                </div>
            </div>
        </header>
    );
};


const headerStyle: React.CSSProperties = {
    backgroundColor: '#f4f4f4',
    position: 'sticky',
    top: '0px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
};



export default Header;