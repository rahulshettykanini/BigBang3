import React from 'react';

function BookTrip({ handleSubmit ,dateOfTheTrip ,setdateOfTheTrip ,dateofBooking ,setdateofBooking , numberOfPeople , setNumberOfPeople}) {
  return ( 

    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={dateOfTheTrip}
        onChange={(e) => setdateOfTheTrip(e.target.value)}
      />

      <input
        type="datetime-local"
        value={dateofBooking}
        onChange={(e) => setdateofBooking(e.target.value)}
      />

       <input
        type="number"
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
      />


      <button type="submit">BOOK YOUR TRIP</button>
    </form>

    
  );
}

export default BookTrip;