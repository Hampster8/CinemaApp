import React from 'react';

const MovieInfo = ({ imageUrl, infoProps, openInfoCallback }) => {

    return (
        <div>
            <img src={imageUrl} />
            <p>{infoProps}</p>
            <button onClick={() => openInfoCallback} style={{backgroundColor: transparent}}>More Information</button>
        </div>
    );
}

export default MovieInfo;

// style={{backgroundColor: transparent}}