import React from 'react';

const MovieInfo = ({ imageUrl, infoProps, openInfoCallback }) => {

    return (
        <div style={style.container}>
            <img style={style.imageStyle} src={imageUrl} className='shadow' />
            <p style={style.infoText}>{infoProps}</p>
            <div style={style.button} className='link' onClick={() => openInfoCallback}>More Information</div>
        </div>
    );
}

const style = {

    container: {
        textAlign: 'center',
        width: 330
    },
    imageStyle: {
        border: `5px solid #202121`,
        borderRadius: '10px'
    },
    infoText: {
        textAlign: 'center',
        color: 'white',
        opacity: '0.9',
        fontFamily: 'Nunito',
        fontStyle: 'bolder'
    },
    button: {
        margin: 0,
        cursor: 'Pointer',
        fontSize: 18,
        fontFamily: 'Nunito',
        fontStyle: 'bolder',
        letterSpacing: '.1rem',
        marginTop: 30,
        fontWeight: 700,
        color: '#6D6D6D'
    }
}
export default MovieInfo;
