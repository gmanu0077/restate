import React from 'react'
import pic from './R.jpg'
import './card.css'

const FavHotel=()=>{
  let Hotels=JSON.parse(localStorage.getItem('book'))
  const hotelcard=Hotels.length?(Hotels.map((re)=>
  
  {
 
      

    
       
       return(
        <div className="cardcontainer" >
        <ul >
        <li>
            <img src={pic} width="200px" /></li>
            <li>
         <h4 >price: ${re.price}</h4> </li>
         <li>
         <h4 >name: {re.name}</h4> </li>
         <li>
         <h4 >location: {re.location}</h4> </li>
         
         
        
          </ul>
         
        </div>
      )

      }
      
      
       
    
   

 )):( <h5 >No available hotels</h5>
 )






return(
  <div className="card">
  
{hotelcard}
  </div>

)}
export default FavHotel; 