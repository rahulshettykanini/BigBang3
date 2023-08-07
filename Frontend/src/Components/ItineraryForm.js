import React from 'react';

function ItineraryForm({ handleSubmitItinerary ,packid ,setpackid ,daynum ,setdaynum ,activi , setactivi, time,settime,place,setplace,iterimage,setiterimage}) {
  return ( 

    <form onSubmit={handleSubmitItinerary}>
    <div>
        <label htmlFor="id">Package Id:</label>
      <input
        type="number"
        id='id'
        value={packid}
        onChange={(e) => setpackid(parseInt(e.target.value))}
      />
 </div>

 <div>
<label htmlFor="num">Day Number:</label>
      <input
        type="number"
        id='num'
        value={daynum}
        onChange={(e) => setdaynum(e.target.value)}
      />
 </div>

 <div>
<label htmlFor="activity">Activity:</label>
       <input
        type="text"
        id='activity'
        value={activi}
        onChange={(e) => setactivi(e.target.value)}
 />
 </div>

<div>
<label htmlFor="time">Time:</label>
       <input
        type="time"
        id='time'
        value={time}
        onChange={(e) => settime(e.target.value)}
      />
       </div>
      
      <div>
      <label htmlFor="place">Place:</label>
      <input
       type="text"
       id='place'
       value={place}
       onChange={(e) => setplace(e.target.value)}
     />
 </div>

 <div>
<label htmlFor="image">Image:</label>
       <input
        type="text"      
       id='image'
        value={iterimage}
        onChange={(e) => setiterimage(e.target.value)}
      />
 </div>

      <button type="submit">ADD A ITINERARY</button>
    </form>

    
  );
}

export default ItineraryForm;