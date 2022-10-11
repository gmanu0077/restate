import { useEffect, useState } from "react";
import dat from '../datadata/data.json'
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
  };

  const onSearchP = (searchTerm) => {
    setprice(searchTerm);
   
    console.log("search ", searchTerm);
  };
  const onSearchT = (searchTerm) => {
    settype(searchTerm);
 
    console.log("search ", searchTerm);
  };
  const onSearchL = (searchTerm) => {
    setlocation(searchTerm);
 
    console.log("search ", searchTerm);
  };
  const onSearchD = (searchTerm) => {
    setdate(searchTerm);

    console.log("search ", searchTerm);
  };
  useEffect(() => { 
    sethoteldata(dat.Hotels)
  }, []);

  console.log(hoteldata)
  return (
    <div className="search">
  

      <div className="search-container">
        <div className="search-inner">
        
          <input type="text" value={location} onChange={onChangeL} />
          <button onClick={() => onSearchL(location)}> <i class="fa fa-search"></i></button>
          <input type="text" value={price} onChangeP={onChangeP} />
          <button onClick={() => onSearchP(price)}> <i class="fa fa-search"></i> </button>
          <input type="text" value={date} onChange={onChangeD} />
          <button onClick={() => onSearchD(date)}> <i class="fa fa-search"></i></button>
          <input type="text" value={type} onChange={onChangeT} />
          <button onClick={() => onSearchT(type)}> <i class="fa fa-search"></i></button>
        </div>
        <div className="dropdown">
          {/* {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))} */}
        </div>

      </div>
      <Hotel hotels={hoteldata} />
    </div>
  );
}
