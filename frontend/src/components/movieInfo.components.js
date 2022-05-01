import React from 'react';

const MovieInfo = ({ imageUrl, infoProps, openInfoCallback }) => {

    return (
        <div>
            <img src={imageUrl} />
            <p>{infoProps}</p>
            <button onClick={() => openInfoCallback}>More Information</button>
        </div>
    );
}

const style = {

}
export default MovieInfo;
