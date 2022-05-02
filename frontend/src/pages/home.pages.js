import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

    const [moviesData, SetMoviesData] = useState([]);

    useEffect(() => {
        fetch('/api/movies')
        .then(res => res.json())
        .then(data => SetMoviesData(data))
    }, []);

    console.log(moviesData);

    return (
        <div>
            {moviesData.map((movie, key) => {
                return (
                    <div key={key}>
                        <Link to={'/movie/' + movie.imdbID}><img src={movie.Poster} /></Link>
                        <p>{movie.Title}</p>
                    </div>)
            })}
        </div>
    );
}

export default HomePage;