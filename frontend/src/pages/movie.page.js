import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';

const MoviePage = () => {
    const { id } = useParams(); // id represents imdbID
    const [movieData, SetMovieData] = useState(null);

    useEffect(() => {
        fetch('/api/movies/' + id)
        .then(res => res.json())
        .then(data => SetMovieData(data[0]))
    }, []);

    console.log(movieData);

    // Stores the marked seats
    const [seatsMarked, SetSeatMarked] = useState([]);

    // This function is called when the marked seats is updates (user clicked on a seat)
    const seatsWasUpdated = (seats) => {
        SetSeatMarked(seats);
    }

    const Page = () => {
        return (
            <div>
                <div>
                    <h1>{movieData.Title}</h1>
                </div>
                <div style={style.heroContainer}>
                    <div style={style.rootItem}><MovieInfo /></div>
                    <div style={{...style.rootItem, ...style.seatsContainer}}><Seats selectedSeatsUpdate={seatsWasUpdated} /></div>
                    <div style={style.rootItem}><Screening /></div>
                </div>
            </div>
        );
    }

    return (movieData ? <Page /> : null);
}

const style = {
    heroContainer: {
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