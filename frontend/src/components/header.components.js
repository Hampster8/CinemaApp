import React from 'react';


const Header = () => {
    return (
        <div className='navbar' style={navBar}>
            <h1 style={cinemaStyle}>Cinema</h1>
            <div className='nav-items' style={navItems}>
                <Link to="/allmovies" style={navA}>All movies</Link>
                <Link to="/aboutus" style={navA}>About us</Link>
                <Link to="/mytickets" style={navA}>My tickets</Link>
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