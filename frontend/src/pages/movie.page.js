import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import { primaryColor, secondaryColor, TimeSvg, DateSvg, TagsSvg } from '../styles/global.styles';

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';


const MoviePage = () => {
    const { id } = useParams(); // id represents imdbID
    const [movieData, SetMovieData] = useState(null);
    const [update, SetUpdate] = useState(false);
    const [count, SetCount] = useState(0);
    const [unavailableSeats, SetUnavailableSeats] = useState([]);
    const [screenings, SetScreenings] = useState({
        loading: true,
        date: null,
        screenings: []
    });

    useEffect(() => {
        fetch('/api/movies/' + id)
        .then(res => res.json())
        .then(data => SetMovieData(data[0]))
    }, []);

    const [seatsMarked, SetSeatMarked] = useState([]);
    const seatClicked = (seat) => {
        
        const seatId = parseInt(seat.substring(4));
        if (unavailableSeats.includes(seatId)) return;

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
    };

    const [screeening, SetScreeening] = useState({});
    const ScreeningClicked = (newScreening) => {
        SetScreeening(newScreening);
        SetUnavailableSeats(newScreening.takenSeats);
    };

    const Page = () => {
        return (
            <div>
                <div className='shadow' style={style.headerContainer}>
                    <h1 style={style.title}>{movieData.Title}</h1>
                    <div style={style.headerSubContainer}>

                        <div style={style.headerItem}>
                            <div style={{ height: 30, margin: 0, padding: 0}}><TimeSvg /></div>
                            <p style={{ height: 30, margin: 0, padding: 0, lineHeight: 1.2, marginLeft: 5}} >{movieData.Runtime}</p>
                        </div>

                        <div style={style.headerItem}>
                            <div style={{ height: 30, margin: 0, padding: 0}}><TagsSvg /></div>
                            <p style={{ height: 30, margin: 0, padding: 0, lineHeight: 1.2, marginLeft: 5}} >{movieData.Genre}</p>
                        </div>

                        <div style={style.headerItem}>
                            <div style={{ height: 30, margin: 0, padding: 0}}><DateSvg /></div>
                            <p style={{ height: 30, margin: 0, padding: 0, lineHeight: 1.2, marginLeft: 5}} >{movieData.Released}</p>
                        </div>

                        <div style={style.headerItem}>
                            <p style={{ height: 30, margin: 0, padding: 0, lineHeight: 1.2, marginLeft: 5}} >Metascore: </p>
                            <p style={{ height: 30, margin: 0, padding: 0, lineHeight: 1.2, marginLeft: 5}} >{movieData.Metascore}  / 100</p>
                        </div>

                    </div>
                </div>
                <div style={style.heroContainer}>
                    <div style={style.rootItem}><MovieInfo infoProps={movieData.Plot} imageUrl={movieData.Poster} openInfoCallback={() => console.log(movieData)} /></div>
                    <div style={{...style.rootItem, ...style.seatsContainer}}><Seats seatClicked={seatClicked} seatsMarked={seatsMarked} unavailableSeats={unavailableSeats} /></div>
                    <div style={style.rootItem}><Screening count={count} screenings={screenings} SetScreenings={SetScreenings} SetCount={SetCount} onClickedScreening={ScreeningClicked} /></div>
                </div>
            </div>
        );
    }

    return (movieData ? <Page /> : null);
}

const style = {
    headerContainer: {
        display: 'flex',
        backgroundColor: secondaryColor,
        marginBottom: 50,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 5,
        marginTop: 50
    },
    headerSubContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        paddingTop: 30,
    },
    title: {
        color: '#fff',
        width: '50%',
        fontFamily: 'Nunito',
        fontStyle: 'bolder',
        fontWeight: '700',
        paddingTop: 0
    },
    headerItem: {
        display: 'flex',
        color: '#4C4C4C',
        fontSize: 15,
        fontFamily: 'Nunito',
        fontStyle: 'bolder',
        fontWeight: '700',
        marginRight: 20
    },
    heroContainer: {
        display: 'flex'
    },
    rootItem: {
        display: 'inline',
        width: '100%',
    },
    seatsContainer: {
        
    },
}

export default MoviePage;