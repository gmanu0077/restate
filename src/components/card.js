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
        <div  >
        {/* <ul>
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
       
         
         
        
          </ul> */}
          
          <div className="row">
    <div className="col s12 m12 l12">
      <div className="card">
        <div className="card-image">
          <img src={pic} />
          <span className="card-title">{re.name}</span>
          <a className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={()=>{
         if(localStorage.getItem('book')){
         const prev=JSON.parse(localStorage.getItem('book'))
         
         prev.push(re)
         console.log(prev,"prev")
          localStorage.setItem('book',JSON.stringify(prev))
           alert('bookmarked')
          }else{
            value.push(re)
            localStorage.setItem('book',JSON.stringify(value))
             alert('bookmarked')
           }
         }}><i className="material-icons">book</i></a>
        </div>
        <div className="card-content">
          <h4> ${re.price}</h4>
          <p> {re.location}</p>
        </div>
      </div>
    </div>
  </div>

         
        </div>
      )

      }
      
      
       
    
   

 )):( <h2>No available hotels</h2>
 )






return(
  <div className="cardcontainer">
   {hotelcard}
  </div>

)}
export default Hotel; 