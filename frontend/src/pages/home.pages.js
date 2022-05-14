import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";


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
        <Carousel breakPoints={breakPoints}>
                {moviesData.map((movie, key) => {
                    return (
                            <div key={key}>
                                <Link to={'/movie/' + movie.imdbID}><img src={movie.Poster} /></Link>  
                            </div>)
                    })}
        </Carousel>
    );
}



export default HomePage;