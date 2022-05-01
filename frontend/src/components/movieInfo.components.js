import React from 'react';

const MovieInfo = ({ imageUrl, infoProps, openInfoCallback }) => {

    return (
        <div style={movieStyle.container}>
            <img src={imageUrl} />
            <p style={movieStyle.infoText}>{infoProps}</p>
            <button style={movieStyle.styleButton} onClick={() => openInfoCallback}>More Information</button>
        </div>
    );
}

const movieStyle = {

    container: {
        // style for div
    },

    infoText: {
        // face the text
    },

    styleButton: {
        backgroundColor: 'white', // change to the correct color when decided
        border: 'none'
    }
}
export default MovieInfo;
