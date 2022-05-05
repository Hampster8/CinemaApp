import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { secondaryColor, TimeSvg, DateSvg, TagsSvg } from '../styles/global.styles';
import { useAuth, setToast } from '../contexts/authentication.contexts';

import MovieInfo from '../components/movieInfo.components';
import Seats from '../components/seats.components';
import Screening from '../components/screeening.components';


const MoviePage = () => {
    const auth = useAuth();
    const { id } = useParams(); // id represents imdbID
    const [movieData, SetMovieData] = useState(null);
    const [update, SetUpdate] = useState(false);
    const [count, UpdateCount] = useState(0);
    const [unavailableSeats, SetUnavailableSeats] = useState([]);
    const [activeScreening, SetActiveScreening] = useState(null);
    const [seatsMarked, SetSeatMarked] = useState([]);
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

    const seatClicked = (seat) => {
        if (activeScreening == null) return;
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

    const SetCount = (value) => {
        UpdateCount(value);
        SetActiveScreening(null);
    }

    const ScreeningClicked = (newScreening) => {
        SetActiveScreening(newScreening);
        SetUnavailableSeats(newScreening.takenSeats);
        SetSeatMarked([]);
    };

    const CreateBookingBtn = () => {
        if (!auth.user) return <Link to='/login'><button>Login to create booking</button></Link>
        else return <button onClick={() => createBooking()}>Create Booking</button>
    }

    const createBooking = () => {
        console.log(activeScreening);
        console.log(seatsMarked);
        
        if (!auth.user) {
            auth.setToast({
                msg: "You need to be logged in to make a booking",
                warning: true,
                render: true
            });
            return;
        };

        
        if (!activeScreening) {
            auth.setToast({
                msg: "You need to select a screening to make a booking",
                warning: true,
                render: true
            });
            return;
        }

        if (seatsMarked.length < 1) {
            auth.setToast({
                msg: "Atleast one seat is required to make a booking",
                warning: true,
                render: true
            });
            return;
        }

        let seats = [...seatsMarked];
        seats = seats.map(x => x = parseInt(x.substring(4)));

        fetch('/api/bookings',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "screeningID": activeScreening._id,
                "seats": seats,
            })
        }).then(res => {
            if (res.ok) {
                window.location.href="/mybookings"
            }
        });
    }

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
                    <div style={{...style.rootItem, ...style.seatsContainer}}><Seats activeScreening={activeScreening} seatClicked={seatClicked} seatsMarked={seatsMarked} unavailableSeats={unavailableSeats} /></div>
                    <div style={style.rootItem}>
                        <Screening activeScreening={activeScreening} count={count} screenings={screenings} SetScreenings={SetScreenings} SetCount={SetCount} onClickedScreening={ScreeningClicked} />
                        <CreateBookingBtn />
                    </div>
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