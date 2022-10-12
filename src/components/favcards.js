import React from 'react'
import pic from './R.jpg'
import './card.css'

const FavHotel=()=>{
  let Hotels=JSON.parse(localStorage.getItem('book'))
  const hotelcard=Hotels?(Hotels?.map((re)=>
  
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
      
      
       
    
   

 )):( <h2 class="bookmark">No Bookmarked hotels</h2>
 )






return(
  <div className="card">
  <div className='fav'>
  <h1 class="bookmark">BOOKMARK</h1>
{hotelcard}
  </div></div>

)}
export default FavHotel; 