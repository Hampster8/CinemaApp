import React, { useState } from 'react';

const Screening = () => {

    const [count, SetCount] = useState(0);
    const [screenigns, SetScreenings] = useState({
        loading: true,
        date: null,
        screenigns: []
    });

    const GetDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + count );
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const final = `${year}-${month}-${day}`;

        if (!screenigns.date || screenigns.date !== final) {
            fetch('/api/screenings/date/' + final)
            .then(res => res.json())
            .then(data => {
                SetScreenings({
                    loading: false,
                    date: final,
                    screenigns: data
                });
            });
        }

        if (screenigns.loading) return null;

        return (
            <div>
                <p style={style.date}>{screenigns.date}</p>
                {
                    screenigns.screenigns.map((data, key) => {
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
            <button onClick={() => IncreaseCount(true)} >Increase date</button>
            <GetDate />
            <button onClick={() => IncreaseCount(false)}>Decrease Date</button>
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