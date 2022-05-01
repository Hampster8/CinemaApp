import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar' style={style.navBar}>
            <h1 style={style.cinemaStyle}>Cinema</h1>
            <div className='nav-items' style={style.navA}>
                <Link to="/allmovies" className='navItem'>All movies</Link>
                <Link to="/aboutus" className='navItem'>About us</Link>
                <Link to="/mytickets" className='navItem'>My tickets</Link>
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
        margin: 0,
        padding: 0
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItemts: 'center',
        background: '#141414',
    },
    navA: {
        marginTop: 50
    }
}

export default Header;