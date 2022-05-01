import React from 'react';

const MovieInfo = ({ imageUrl, infoProps, openInfoCallback }) => {

    return (
        <div style={movieStyle.container}>
            <img style={movieStyle.iamgeStyle} src={imageUrl} />
            <p style={movieStyle.infoText}>{infoProps}</p>
            <button style={movieStyle.styleButton} onClick={() => openInfoCallback}>More Information</button>
        </div>
    );
}

const movieStyle = {

    container: {
        // style for div
    },
    iamgeStyle: {
        border: `5px solid #202121`,
        borderRadius: '10px'
    },

    infoText: {
        color: 'white'
    },

    styleButton: {
        // style for button
    }
}
export default MovieInfo;
