import React, { useState } from 'react';
import { secondaryColor, tertiaryColor } from '../styles/global.styles';

const Screening = ({movieId, onClickedScreening, count, SetCount, screenings, SetScreenings, activeScreening}) => {


    const GetDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + count);
        const final = date.toDateString();

        if (!screenings.date || screenings.date !== final) {
            fetch('/api/screenings/date/' + final + '/' + movieId)
            .then(res => res.json())
            .then(data => {
                SetScreenings({
                    loading: false,
                    date: final,
                    screenings: data
                });
            });
        }

        if (screenings.loading) return null;

        const showAmountOfAvailableSeats = (seatsTaken) => {
            return (360 - seatsTaken.length)
        }

        const showMinutesAndHours = (timeObject) => {
            const y = new Date(timeObject)
            return y.getHours() + "." + String(y.getMinutes()).padStart(2, "0");
        }


        return (
            <div>
                <p style={style.date}>{screenings.date}</p>
                {
                    screenings.screenings.map((data, key) => {
                        const isActive = ((activeScreening && data) && data._id === activeScreening._id);
                        return (
                                <div onClick={() => onClickedScreening(data)} style={isActive ? {...style.screeningContainer, ...style.screeningClicked} : style.screeningContainer} key={key}>
                                    <div style={{display: 'flex'}} ><p style={style.itemGhost}>Auditorium:</p> <p style={style.item}>{data.auditoriumName}</p></div>
                                    <div style={{display: 'flex'}} ><p style={style.itemGhost}>Starts at:</p> <p style={style.item}>{showMinutesAndHours(data.start_time)}</p></div>
                                    <div style={{display: 'flex'}} ><p style={style.itemGhost}>Seats available:</p> <p style={style.item}>{showAmountOfAvailableSeats(data.takenSeats)}</p></div>
                                </div>
                        )
                    })
                }
            </div>
        );
    }

    const IncreaseCount = (Increase) => {
        if (count === 0 && !Increase) return;
        SetCount(Increase ? count + 1 : count - 1);
    }

    return (
        <div style={style.container} className='shadow'>
            <p style={{color: '#fff', opacity: 0.5}}>Increase or Decrease Date</p>
            <button style={style.button} onClick={() => IncreaseCount(false)} >&lt;</button>
            <button style={style.button} onClick={() => IncreaseCount(true)}>&gt;</button>
            <GetDate />
        </div>
    );
}

const style = {
    container: {
        paddingTop: 20,
        borderRadius: 5,
        backgroundColor: secondaryColor,
        paddingBottom: 10
    },
    date: {
        color: '#fff',
    },
    itemGhost: {
        fontSize: 15,
        color: '#fff',
        opacity: 0.4,
        margin: 4,
        textAlign: 'right'
    },
    item: {
        color: '#fff',
        fontSize: 15,
        margin: 4,
        textAlign: 'left'
    },
    screeningContainer: {
        background: '#292929',
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
        cursor: 'pointer',
        padding: 2
    },
    screeningClicked: {
        background: '#4F4F4F',
    },
    button: {
        margin: 4
    }
}

export default Screening;