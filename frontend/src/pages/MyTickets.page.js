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
                        <h1>Movie Name: The Northman</h1>
                        <p>Created at: {ticket.createdAt.substring(0, 10)}</p> {/* format ISODate as Year-Month-Day (From index 0 to 10) */}
                        <p>Time: 11.00 pm</p>                                  {/* Viste inte om detta var tid för bokningen eller när den spelades. */}
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

    fetch("URL?" + bookingId, {
        method: 'DELETE',
      })
      .then(res => {
        return res.json()
      }) 
      .then(data => console.log(data))
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
