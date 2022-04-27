import React from 'react';

const Confirmation = () => {
    return (

        <div className='background' style={background}>
        <div className='miniBackground' style={miniBackground}>
        <h1 style={textBox}>Wooo Hoo!</h1>
        <p style={confirmedBooking}>Your Booking Has Now Been Confirmed!</p>
        <p style={headlines}>Ticket ID:</p>
        <p style={headlines}>Date:</p>
        <p style={headlines}>Time:</p>
        <button onclick='confirmButton' className={buttonStyle}>
            Amazing!
        </button>

        </div>




        </div>
        

    )
}; 

const background = {
    background: '#141414',
    padding: '70px'

}

const miniBackground = {
    background: '#1F1F1F',
    paddingBottom: '20px'

}

const textBox = {
    fontFamily: 'Pacifico',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '50px',
    color: '#009556',
    margin: '15px'
}

const confirmedBooking = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    color: '#FFFFFF',
    paddingLeft: '20px'
}

const headlines = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontSize: '15px',
    color: '#FFFFFF',
    opacity: '0.2',
    margin: '15px',
    paddingLeft: '10px'
    
}

const buttonStyle = {
    color: '#009556',
    padding: '20px'
}

export default Confirmation;