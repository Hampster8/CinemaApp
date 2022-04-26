import React from 'react';

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';

const BookingPage = () => {
    return (
        <div style={{marginTop: 300}}>
            <MovieInfo />
            <Seats />
            <Screening />
        </div>
    );
}

export default BookingPage;