import React from 'react';

const Confirmation = () => {
    return (

        <div className='background' style={background}>
            <div className='miniBackground' style={miniBackground}>
                <h1 style={textBox}>Wooo Hoo!</h1>
                <p style={confirmedBooking}>Your Booking Has Now Been Confirmed!</p>
                <div style={hdiv}>
                <p style={headlines}>Ticket ID:</p>
                <p style={style}>56D23</p>
                </div>
                <div style={hdiv}>
                <p style={headlines}>Date:</p>
                <p style={style}>Tuesday 10 May 2022</p>
                </div>
                <div style={hdiv}>
                <p style={headlines}>Time:</p>
                <p style={style}>13:00 PM</p>
                </div>

            </div>

            <div className='button' style={{textAlign: 'center', paddingTop: '40px'}}>
                <button style={buttonStyle}>
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
    fontWeight: '700',
    color: '#FFFFFF',
    opacity: '0.2',
    margin: '15px',
    paddingLeft: '10px'
    
}

const buttonStyle = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '25px',
    color: '#FFFFFF',
    width: '250px',
    height: '57px',
    background: '#009556',
    borderRadius: '10px',
}

const style = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    margin: '15px',
    color: 'white'
}


const hdiv = {
    display: 'flex',
    flexDirection: 'row'
}

export default Confirmation;