import React, { useEffect, useState } from 'react';

const MyTickets = () => {

    const [ticketList, SetTicketList] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [u, setU] = useState(false);

    useEffect(() => {
        fetch('/api/bookings/mybookings')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) SetTicketList(data);
            SetLoading(false);
        })
    });

    const showMinutesAndHours = (timeObject) => {
        const y = new Date(timeObject)
        return y.getHours() + "." + String(y.getMinutes()).padStart(2, "0");
    }

    const dateString = (timeObject) => {
        const y = new Date(timeObject)
        return y.toDateString()
    }

    const cancelBooking = (bookingId) => {
        fetch('/api/bookings/' + bookingId, {
            method: 'DELETE',
          })
          .then(res => {
            setU(!u);
          }) 
    }
    


    return (
        <div>
            <h1 style={style.header}>My Bookings</h1>
            {loading ? <p style={{color: "#fff"}}>Loading...</p> : (
                <div>
                    {ticketList.length === 0 ? <p style={{color: "#fff"}}>No bookings</p> : (
                        <div>
                            {ticketList.map((ticket , key) => {
                                return (
                                    <div className="shadow" style={style.ticketContainer} key={key}>
                                        <h1>{ticket.Title}</h1>
                                        <div>
                                            <p>Starts at: {showMinutesAndHours(ticket.start_time)}</p>
                                            <p>Date: {dateString(ticket.start_time)}</p>
                                            <p>Seats:</p>
                                            <ul>
                                                {
                                                    ticket.seats.map((seat, key) => {
                                                        return <li key={key}>{seat}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <button className="redbtn" onClick={() => cancelBooking(ticket._id)}> Cancel booking! </button>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const style = {
    header: {
        color: '#fff'
    },
    ticketContainer: {
        padding: 20,
        border: `5px solid #212121`,
        borderRadius: '10px',
        marginBottom: 20,
        color: '#fff'
    }
}

export default MyTickets;
