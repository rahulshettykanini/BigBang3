import React from 'react';

function PackageForm({ handleSubmitPackage ,pakplace,setpakplace ,dura,setdura, pp, setpp ,pname,setpname, descr ,setdescr,pimage,setpimage}) {
  return ( 

    <form onSubmit={handleSubmitPackage}>

<div>
        <label htmlFor="place">Place:</label>
      <input
        type="text"
        id='place'
        value={pakplace}
        onChange={(e) => setpakplace(e.target.value)}
      />
 </div>

 <div>
<label htmlFor="duration">Duration:</label>
      <input
        type="number"
        id='duration'
        value={dura}
        onChange={(e) => setdura(e.target.value)}
      />
 </div>

 <div>
<label htmlFor="price">Package Price:</label>
       <input
        type="number"
        id='price'
        value={pp}
        onChange={(e) => setpp(parseInt(e.target.value))}
 />
 </div>

<div>
<label htmlFor="name">Package Name:</label>
       <input
        type="text"
        id='name'
        value={pname}
        onChange={(e) => setpname(e.target.value)}
      />
       </div>
      
      <div>
      <label htmlFor="description">Description:</label>
      <input
       type="text"
       id='description'
       value={descr}
       onChange={(e) => setdescr(e.target.value)}
     />
 </div>

 <div>
<label htmlFor="image">Package Image:</label>
       <input
        type="text"      
       id='image'
        value={pimage}
        onChange={(e) => setpimage(e.target.value)}
      />
 </div>

      <button type="submit">ADD A PACKAGE</button>
    </form>

    
  );
}

export default PackageForm;