import React from 'react';

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
                                <div onClick={() => onClickedScreening(data)} style={isActive ? style.screeningClicked : style.screeningContainer} key={key}>
                                <p style={style.date}>{ showMinutesAndHours(data.start_time)} &emsp; {showAmountOfAvailableSeats(data.takenSeats)} seats available.</p>
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
        <div>
            <button onClick={() => IncreaseCount(false)} >&lt;</button>
            <button onClick={() => IncreaseCount(true)}>&gt;</button>
            <GetDate />
        </div>
    );
}

const style = {
    date: {
        color: '#fff',
        containerDisplay: 'flex'
    },
    screeningContainer: {
        background: 'grey'
    },
    screeningClicked: {
        background: 'green'
    }
}

export default Screening;