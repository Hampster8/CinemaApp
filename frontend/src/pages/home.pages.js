import React, { useEffect, useState } from 'react';


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
                        <img src={movie.Poster} />
                        <p>{movie.Title}</p>
                    </div>)
            })}
        </div>
    );
}

export default HomePage;