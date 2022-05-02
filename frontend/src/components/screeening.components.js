import React, { useState } from 'react';

const Screening = () => {

    const [count, SetCount] = useState(0);

    const IncreaseCount = (Increase) => {
        SetCount(Increase ? count + 1 : count - 1)
    }

    const UpdateDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + count );
        return <p>{date.toString()}</p>
    }

    return (
        <div>
            <button onClick={() => IncreaseCount(true)} >Increase date</button>
            <UpdateDate />
            <button onClick={() => IncreaseCount(false)}>Decrease Date</button>

            {/* Annars kan man göra så här */}

            <input type='date' onChange={(e) => console.log(e.target.value)} />

        </div>
    );
}

export default Screening;