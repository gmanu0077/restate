import React from 'react'
import pic from './R.jpg'
import './card.css'

const FavHotel = () => {
  let Hotels = JSON.parse(localStorage.getItem('book'))
  const hotelcard = Hotels ? (Hotels?.map((re) => {





    return (
      <div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-image">
                <img src={pic} />
                <span className="card-title">{re.name}</span>
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">book</i></a>
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






  )) : (<h2 className="center">No Bookmarked hotels</h2>
  )






  return (

    <div>
      <h1 className="bookmark center pink-text">BOOKMARK</h1>
      <div className="cardcontainer">
        {hotelcard}
      </div>
    </div>
  )
}
export default FavHotel; 