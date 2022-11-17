import { useEffect, useState } from "react";
import dat from '../data/data.json'
import "./search.css";
import Hotel from "./card";

export default function Search() {
  const [type, settype] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");
  const [location, setlocation] = useState("");
  const [hoteldata, sethoteldata] = useState([]);

  const onChangeT = (event) => {
    settype(event.target.value); 
  };
  const onChangeP = (event) => {
    setprice(event.target.value); 
  };
  const onChangeL = (event) => {
    setlocation(event.target.value); 
  };
  const onChangeD = (event) => {
    setdate(event.target.value); 
    console.log(date,"date")
  };


  const onSearchD = (searchTerm) => {
    setdate(searchTerm);


    console.log("search ", searchTerm.getDate());
  };
  useEffect(() => { 
    sethoteldata(dat.Hotels)
  }, []);

  console.log(hoteldata)
  return (
    <div className="search">
  

      <div className="search-container">
        <div className="search-inner white-text">
          
          <input className="white-text" type="text" value={location} onChange={onChangeL} placeholder="location" />
          {/* <button onClick={() => onSearchL(location)}> <i class="fa fa-search"></i></button> */}
          <input className="white-text" type="number" value={price} onChange={onChangeP}  placeholder="max-price"/>
          {/* <button onClick={() => onSearchP(price)}> <i class="fa fa-search"></i> </button> */}
         
          <input className="white-text" type="text" value={type} onChange={onChangeT}  placeholder="property-type"/>
          {/* <button onClick={() => onSearchT(type)}> <i class="fa fa-search"></i></button> */}
          <input className="white-text" type="date" value={date} onChange={onChangeD}  placeholder="date"/>
          <button className="btn pink" onClick={() => onSearchD(date)}> search</button>
        </div>


      </div>
      <Hotel hotels={hoteldata} location={location} price={price} date={date} type={type} />
    </div>
  );
}
