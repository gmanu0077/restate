import React from 'react'

import './card.css'

const Hotel=({hotels})=>{
  
  const hotelcard=hotels.length?(hotels.map((re)=>{
   
       
       return(
        <div  >
        <ul className="cardcontainer">
         <li>
         <h4 >{re.name}</h4> </li>
         <li>
         <h4 >{re.location}</h4> </li>
         <li>
         <h4 >{re.price}</h4> </li>
         
         
        
          </ul>
         
        </div>
      )
      
       
    
   

 })):( <h5 className=" center">No available hotels</h5>
 )






return(
  <div className="cons container">
  <div className="container">
  

  
      {hotelcard}
  </div></div>

)}
export default Hotel; 