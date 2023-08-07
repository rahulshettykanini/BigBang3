import React from 'react';

function HotelForm({ handleSubmitHotel ,hotelpack ,sethotelpack ,hotname ,sethotname,hotrating , sethotrating, hotpri, sethotpri,hotimg,sethotimg}) {
  return ( 

    <form onSubmit={handleSubmitHotel}>

<div>       
<label htmlFor="id">Package Id:</label>
      <input
        type="number"
        id='id'
        value={hotelpack}
        onChange={(e) => sethotelpack(parseInt(e.target.value))}
      />
      </div>

<div>
<label htmlFor="name">Hotel Name:</label>
      <input
        type="text"
        id='name'
        value={hotname}
        onChange={(e) => sethotname(e.target.value)}
      />
       </div>

<div>
<label htmlFor="rating">Hotel Rating:</label>
       <input
        type="number"
        id='rating'
        value={hotrating}
        onChange={(e) => sethotrating(parseInt(e.target.value))}
      />
 </div>

<div>
<label htmlFor="price">Hotel Price:</label>
<input
        type="number"
        id='price'
        value={hotpri}
        onChange={(e) => sethotpri(parseInt(e.target.value))}
      />
 </div>

<div>
<label htmlFor="image">Hotel Image:</label>
<input
        type="text"
        id='image'
        value={hotimg}
        onChange={(e) => sethotimg(e.target.value)}
      />
</div>

      <button type="submit">ADD A HOTEL</button>
    </form>

    
  );
}

export default HotelForm;