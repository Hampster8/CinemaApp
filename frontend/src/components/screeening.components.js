import React from 'react';




const Screening = () => {

    return (
        <div style={styleSheet.screeningContainer}>
        <h2>Day</h2>
            <div style={styleSheet.screeningDate}>
                <form>
                    <label for="birthday">Birthday:</label>
                    <input type="date"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}


const styleSheet = {

    screeningContainer: {
        /*
        position: 'absolute',
        width: '300px',
        height: '454px',
        left: '1642px',
        top: '288px',
        */
        background:'#1F1F1F',
        boxShadow: '0px 4px 0px #0E0E0E',
        borderRadius: '10px',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    },

    screeningDate: {
        position: 'absolute',
        width: '252px',
        height: '40px',
        left: '1618px',
        top: '338px',

        background: '#4F4F4F',
        borderRadius: '5px',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)'
    },
    timeAndSeatsContainer: {

    }


}





export default Screening;

