import React from 'react';

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';

const BookingPage = () => {
    return (
        <div style={style.rootContainer}>
            <div style={style.rootItem}><MovieInfo /></div>
            <div style={{...style.rootItem, ...style.seatsContainer}}><Seats /></div>
            <div style={style.rootItem}><Screening /></div>
        </div>
    );
}

const style = {
    rootContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    rootItem: {
        display: 'inline',
        float: 'left'
    },
    seatsContainer: {
        marginLeft: 100,
        marginRight: 100,
    },
}

export default BookingPage;