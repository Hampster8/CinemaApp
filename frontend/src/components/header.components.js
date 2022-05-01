import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authentication.contexts';

const Header = () => {


    const auth = useAuth();

    const LoggedInData = () => {
        if (!auth.user) return <Link to="/login" className='link'>Login</Link>;
        return (
            <div>
                <Link to='/mytickets' className='link'>My Tickets</Link>
                <Link to='/' onClick={() => auth.logout()} className='link'>Logout</Link>
            </div>
        );
    };

    return (
        <div className='navbar' style={style.navBar}>
            <Link style={{textDecoration: 'none'}} to='/'><h1 style={style.cinemaStyle}>Cinema</h1></Link>
            <div className='nav-items' style={style.navA}>
                <Link to='/' className='link'>Movies</Link>
                <Link to='/about' className='link'>About us</Link>
                <LoggedInData />
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
        display: 'flex',
        marginTop: 50
    }
}

export default Header;