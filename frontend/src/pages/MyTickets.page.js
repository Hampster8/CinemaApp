import React, { useEffect, useState } from 'react';

const myTicketsList = () => {

    const [ticketList, SetTicketList] = useState([]);

    useEffect(() => {
        fetch('/api/bookings/mybookings')
        .then(res => res.json())
        .then(data => SetTicketList(data))
    }, []);

    console.log(ticketList);

    return (
        <div>
            {ticketList.map((tickets) => {
                return (
                    <div>
                        <li>{tickets}</li>
                    </div>
                )
            })}
        </div>
    );
}

export default myTicketsList;
