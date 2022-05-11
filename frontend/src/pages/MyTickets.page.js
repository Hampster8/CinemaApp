import React, { useEffect, useState } from 'react';

const MyTickets = () => {

    const [ticketList, SetTicketList] = useState([]);

    useEffect(() => {
        fetch('/api/bookings/mybookings')
        .then(res => res.json())
        .then(data => SetTicketList(data))
    }, []);

    console.log(ticketList);

    return (
        <div>
            {ticketList.map((ticket , key) => {
                return (
                    <div style={style.ticketContainer} key={key}>
                        <h1>The Northman</h1>
                        <p>Created at: {ticket.createdAt}</p>
                        <p>Screaning id: {ticket.screeningID}</p>
                        <p>Seats: {ticket.seats.toString()}</p>
                        <button style={style.buttonStyle} onClick={() => cancelBooking(ticket._id)}> Cancel booking! </button>
                    </div>
                )
            })}
        </div>
    );
}

const cancelBooking = (bookingId) => {

}

const style = {
    ticketContainer: {
        border: `5px solid #212121`,
        borderRadius: '10px',
        color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#D75E15',
    },
}

export default MyTickets;
