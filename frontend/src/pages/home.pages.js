import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import { secondaryColor, TimeSvg, DateSvg, TagsSvg } from '../styles/global.styles';


const HomePage = () => {

    const [moviesData, SetMoviesData] = useState([]);

    useEffect(() => {
        fetch('/api/movies')
        .then(res => res.json())
        .then(data => SetMoviesData(data))
    }, []);

    console.log(moviesData);

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},

    ]

    return (
        <div>
            <div style={style.carusel}>
                <div style={style.headerContainer} className="shadow">
                    <h1>Playing now</h1>
                </div>
                <Carousel breakPoints={breakPoints}>
                {moviesData.map((movie, key) => {
                    if (!movie.playingNow) return null
                    return (
                            <div style={style.img} key={key}>
                                <Link to={'/movie/' + movie.imdbID}><img src={movie.Poster} /></Link>  
                            </div>)
                    })}
            </Carousel>
            </div>
            <div style={style.carusel}>
                <div  style={style.headerContainer} className="shadow">
                    <h1>Coming soon</h1>
                </div>
                <Carousel breakPoints={breakPoints}>
                {moviesData.map((movie, key) => {
                    if (movie.playingNow) return null
                    return (
                            <div style={style.img} key={key}>
                                <Link to={'/movie/' + movie.imdbID}><img src={movie.Poster} /></Link>  
                            </div>)
                    })}
            </Carousel>
            </div>
        </div>
    );
}

const style = {
    headerContainer: {
        color: '#fff',
        paddingLeft: 50,
        backgroundColor: secondaryColor,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    img: {
        width: 200,
        height: 'auto',
    },
    carusel: {
        marginBottom: 20
    }
}



export default HomePage;