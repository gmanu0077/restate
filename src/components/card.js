import React from "react";
import pic from "./R.jpg";
import "./card.css";

const Hotel = ({ hotels, location, minprice, maxprice, type, date, flag, }) => {
  console.log(JSON.parse(localStorage.getItem("book")), "lc");
  console.log(hotels, "hhh")
  const value = [];
  const filteredHotels = hotels.filter((h) => {

    if (location && flag) {
      if (h.location !== location) {
        return false;
      }
    }
    if (minprice && flag) {
      if (h.price < minprice) {
        return false;
      }
    }
    if (maxprice && flag) {
      if (h.price > maxprice) {
        return false;
      }
    }
    if (date && flag) {
      if (h.date !== date) {
        return false;
      }
    }
    if (type) {
      if (h.type !== type) return false;
    }
    return true;
  });
  const hotelcard = filteredHotels.length ? (




    <div className="row">

      {filteredHotels.map((re) => {
        return (
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={pic} />
                <span className="card-title">{re.name}</span>
                <a
                  className="btn-floating btn-large halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    if (localStorage.getItem("book")) {
                      var redundant = false;
                      const prev = JSON.parse(localStorage.getItem("book"));
                      console.log(prev, "prev");
                      prev.map((pre) => {
                        console.log(pre, "pre");
                        if (pre.name === re.name) {
                          redundant = true;

                          return;
                        }
                      });
                      if (!redundant) {
                        prev.push(re);
                        console.log(prev, "prev");
                        localStorage.setItem("book", JSON.stringify(prev));
                        alert("bookmarked");
                      } else {
                        alert("already bookmarked");
                      }
                    } else {
                      value.push(re);
                      localStorage.setItem("book", JSON.stringify(value));
                      alert("bookmarked");
                    }
                  }}
                >
                  <i className="material-icons">book</i>
                </a>
              </div>
              <div className="card-content">
                <h4> ${re.price}</h4>
                <p> {re.location}</p>
              </div>
            </div></div>
        )
      })
      }

    </div>



  ) : (
    <h2>No available hotels</h2>
  );

  return (


    <div className="cardcontainer">{hotelcard}
    </div>

  )
};
export default Hotel;
