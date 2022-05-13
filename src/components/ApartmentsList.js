import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApartmentsList() {

  const [apartments, setApartments] = useState([]);

  useEffect( () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/apartments`)
      .then( response => {
        setApartments(response.data);
      })
      .catch()
  }, []);


  const renderApartmentDetails = (apartment) => {
    return (
      <div className="apartment-summary">
        <h2>{apartment.title}</h2>
        <img src={apartment.img} alt={apartment.title} />
        <br />
        <Link to={`/apartments/${apartment._id}`}>More details</Link>
      </div>
    );
  }

  return (
    <section className="ApartmentsList">
      {apartments.map( apartment => {
        return renderApartmentDetails(apartment);
      })}
    </section>
  )
}

export default ApartmentsList;