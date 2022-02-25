import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ApartmentDetails() {
  
  const {id} = useParams();

  const [details, setDetails] = useState(undefined);

  useEffect( () => {
    axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      .then( response => {
        setDetails(response.data);
      })
      .catch()
  }, [id]);

  const renderDetails = (details) => {
    return (
      <>
        <h2>{details.title}</h2>
        <h3>€{details.pricePerDay} per day</h3>

        <img src={details.img} alt={details.title} />
      </>
    );
  }

  return (
    <section className="ApartmentDetails">
      { details ?
        renderDetails(details) :
        <p>loading....</p>
      }
    </section>
  )
}

export default ApartmentDetails;