import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar' style={style.navBar}>
            <h1 style={style.cinemaStyle}>Cinema</h1>
            <div className='nav-items' style={style.navItems}>
                <Link to="/allmovies" style={style.navA}>All movies</Link>
                <Link to="/aboutus" style={style.navA}>About us</Link>
                <Link to="/mytickets" style={style.navA}>My tickets</Link>
            </div>
        </div>
    );
}

const style = {
    cinemaStyle: {
        fontFamily: 'Pacifico',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '50px',
        color: '#009556',
        margin: '15px'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItemts: 'center',
        background: '#141414',
    },
    
    navItems: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '700',
        paddingTop: '60px'
    },
    navA: {
        textDecoration: 'none',
        color: '#FFFFFF',
        opacity: '0.2',
        margin: '15px'
    }
}

export default Header;