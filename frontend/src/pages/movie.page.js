import React, {useState} from 'react';
import { useParams } from "react-router-dom";

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';

const MoviePage = () => {
    const { id } = useParams();
    console.log(id)

    // Stores the marked seats
    const [seatsMarked, SetSeatMarked] = useState([]);

    // This function is called when the marked seats is updates (user clicked on a seat)
    const seatsWasUpdated = (seats) => {
        SetSeatMarked(seats);
    }

    return (
        <div style={style.rootContainer}>
            <div style={style.rootItem}><MovieInfo /></div>
            <div style={{...style.rootItem, ...style.seatsContainer}}><Seats selectedSeatsUpdate={seatsWasUpdated} /></div>
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

export default MoviePage;