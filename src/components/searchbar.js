import { useEffect, useState } from "react";
import dat from "../data/data.json";
import "./search.css";
import Hotel from "./card";

export default function Search() {
  const [type, settype] = useState("");
  const [minprice, setminprice] = useState("");
  const [maxprice, setmaxprice] = useState("");
  const [date, setdate] = useState("");
  const [location, setlocation] = useState("");
  const [hoteldata, sethoteldata] = useState([]);
  const [Flag, setFlag] = useState(false);

  const onChangeA = () => {
    settype("Apartment");
  };
  const onChangeF = () => {
    settype("Flat");
  };
  const onChangeminP = (event) => {
    setminprice(event.target.value);
  };
  const onChangemaxP = (event) => {
    setmaxprice(event.target.value);
  };
  const onChangeL = (event) => {
    setlocation(event.target.value);
  };
  const onChangeD = (event) => {
    setdate(event.target.value);
    console.log(date, "date");
  };

  const onSearchD = () => {
    setFlag(true)
  };
  useEffect(() => {
    sethoteldata(dat.Hotels);
  }, []);

  console.log(hoteldata);
  return (
    <div className="search">
      <div className="search-container ">

        <div className="search-inner white-text">
          <input
            className="white-text"
            type="text"
            value={location}
            onChange={onChangeL}
            placeholder="location"
          />
          <input
            className="white-text"
            type="number"
            value={minprice}
            onChange={onChangeminP}
            placeholder="min-price"
          />
          <input
            className="white-text"
            type="number"
            value={maxprice}
            onChange={onChangemaxP}
            placeholder="max-price"
          />

          <p>Type:</p>
          <button className="btn-small red" onClick={() => onChangeA()}>
            Apartment
          </button>
          <button className="btn-small green" onClick={() => onChangeF()}>
            flat
          </button>

          <input
            className="white-text"
            type="date"
            value={date}
            onChange={onChangeD}
            placeholder="date"
          />
          <button className="btn pink" onClick={() => onSearchD()}>
            search
          </button>
        </div>
      </div>
      <Hotel
        hotels={hoteldata}
        location={location}
        minprice={minprice}
        maxprice={maxprice}
        date={date}
        type={type}
        flag={Flag}
      />
    </div>
  );
}
