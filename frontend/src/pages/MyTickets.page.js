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
                        <p>Created at: {ticket.createdAt}</p>
                        <p>Screaning id: {ticket.screeningID}</p>
                        <p>Seats: {ticket.seats.toString()}</p>
                    </div>
                )
            })}
        </div>
    );
}

const style = {
    ticketContainer: {
        backgroundColor: 'black',
        color: '#fff'
    }
}

export default MyTickets;
