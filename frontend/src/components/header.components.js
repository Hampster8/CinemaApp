import React from 'react';


const Header = () => {
    return (
        <div className='navbar' style={navBar}>
            <h1 style={cinemaStyle}>Cinema</h1>
            <div className='nav-items' style={navItems}>
                <a href="/allmovies" style={navA}>All movies</a>
                <a href="/aboutus" style={navA}>About us</a>
                <a href="/mytickets" style={navA}>My tickets</a>
            </div>
        </div>

    );
}

const cinemaStyle = {
    fontFamily: 'Pacifico',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '50px',
    color: '#009556',
    margin: '15px'

};

const navBar = {
  
    display: 'flex',
    justifyContent: 'space-between',
    alignItemts: 'center',
    background: '#141414',
};

const navItems = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    paddingTop: '60px'
};

const navA = {
    textDecoration: 'none',
    color: '#FFFFFF',
    opacity: '0.2',
    margin: '15px'
};


export default Header;