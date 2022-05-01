import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';

const MoviePage = () => {
    const { id } = useParams(); // id represents imdbID
    const [movieData, SetMovieData] = useState(null);
    const [update, SetUpdate] = useState(false);

    useEffect(() => {
        fetch('/api/movies/' + id)
        .then(res => res.json())
        .then(data => SetMovieData(data[0]))
    }, []);

    console.log(movieData);

    // Updates the seats when clicked on
    const [seatsMarked, SetSeatMarked] = useState([]);
    const seatClicked = (seat) => {
        if (seatsMarked.includes(seat)) {
            for( var i = 0; i < seatsMarked.length; i++){ 
                if (seatsMarked[i] === seat) {
                    seatsMarked.splice(i, 1);
                }
            }
        } else {
            seatsMarked.push(seat);
        }
        SetUpdate(!update);
    }

    const Page = () => {
        return (
            <div>
                <div>
                    <h1>{movieData.Title}</h1>
                </div>
                <div style={style.heroContainer}>
                    <div style={style.rootItem}><MovieInfo /></div>
                    <div style={{...style.rootItem, ...style.seatsContainer}}><Seats seatClicked={seatClicked} seatsMarked={seatsMarked} /></div>
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