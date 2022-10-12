import React from 'react'
import pic from './R.jpg'
import './card.css'

const Hotel=({hotels,location,price,type,date})=>{
  console.log(JSON.parse(localStorage.getItem('book')),"lc")
  const value=[];
  const filteredHotels = hotels.filter(h => {
    if(location){
        if (h.location !== location){
            return false;
        }
    }
    if(price){
        if (h.price > price){
            return false;
        }
    }
    if(date){
        if (h.date !== date){
            return false;
        }
    }
    if(type){
    if(h.type!==type)return false
  }
    return true;
})
  const hotelcard=filteredHotels.length?(filteredHotels.map((re)=>
  
  {
 
     

    
       
       return(
        <div  className="cardcontainer"  >
        <ul>
          <li className='images'>
            <img src={pic} width="200px" />
            <button onClick={()=>{
          value.push(re)
          localStorage.setItem('book',JSON.stringify(value))
           alert('bookmarked')
         }}><i class='fa fa-bookmark'></i></button>
          </li>
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
      
      
       
    
   

 )):( <h5>No available hotels</h5>
 )






return(
  <div className="card">
   {hotelcard}
  </div>

)}
export default Hotel; 