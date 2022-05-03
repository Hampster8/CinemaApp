import React, { useState } from 'react';

const Screening = () => {

    const [count, SetCount] = useState(0);
    const [screenings, SetScreenings] = useState({
        loading: true,
        date: null,
        screenings: []
    });

    const GetDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + count);
        const final = date.toDateString()

        if (!screenings.date || screenings.date !== final) {
            fetch('/api/screenings/date/' + final)
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

        return (
            <div>
                <p style={style.date}>{screenings.date}</p>
                {
                    screenings.screenings.map((data, key) => {
                        return (
                            <div style={style.screeningContainer} key={key}>
                                <p style={style.date}>{data.movie}</p>
                                <p style={style.date}>{data.auditorium}</p>
                                <p style={style.date}>{data.takenSeats.toString()}</p>
                                <p style={style.date}>{data.start_time}</p>
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
            <GetDate />
            <button onClick={() => IncreaseCount(true)}>&gt;</button>
        </div>
    );
}

const style = {
    date: {
        color: '#fff'
    },
    screeningContainer: {
        background: 'grey'
    }
}

export default Screening;