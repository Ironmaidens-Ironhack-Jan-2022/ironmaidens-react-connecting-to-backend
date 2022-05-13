import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateApartment() {

  const [title, setTitle] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentDetails = {
      title: title,
      pricePerDay: pricePerDay
    }

    axios.post(`${process.env.REACT_APP_API_BASE_URL}/apartments`, apartmentDetails)
      .then( response => {
        navigate(`/apartments/${response.data._id}`);
      })
      .catch( e => {
        console.log("error creating apartment...", e)
      });
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangePrice = (e) => {
    setPricePerDay(e.target.value);
  }

  return (
    <div className="CreateApartment">
      <form onSubmit={ handleSubmit }>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
          />
        </label>

        <label>
          Price per Day
          <input
            type="number"
            min={0}
            name="pricePerDay"
            value={pricePerDay}
            onChange={onChangePrice}
          />
        </label>

        <button type="submit">Create Apartment</button>

      </form>
    </div>
  )
}

export default CreateApartment;