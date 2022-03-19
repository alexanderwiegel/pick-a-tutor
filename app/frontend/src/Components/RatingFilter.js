import React from "react"
import { ToggleButton } from "react-bootstrap"
import { useState } from "react"

function RatingFilter({ value, starValue, handleOnChange }) {
  // later, we can't map over an array of length value whose elements are empty, 
  // but we can spead the array into a new array and then it will work
  const filledStars = [...Array(value)]
  const unfilledStars = [...Array(5 - value)]
  var counter = 0
  const [selected, setSelected] = useState(false)
  const handleRepresentative = (value) => {
    setSelected(prevState => !prevState);
    const abs = !selected
    if (abs === true) handleOnChange(value, abs);
    if (abs === false) handleOnChange(0, abs);
  }
  //setSelected(prevState => ({ selected: !prevState.selected }));
  return (
    <>
      <ToggleButton
        style={{
          // have to use == here instead of ===
          backgroundColor: starValue == value && selected ? "#00b7ffa1" : "transparent",
          color: starValue == value && selected ? "#ffffff" : "black"
        }}
        id={value + " star"}
        type="checkbox"
        variant="light"
        value={value}
        onChange={(e) => handleRepresentative(e.currentTarget.value)}
      >
        {
          filledStars.map(() =>
            <i className="bi bi-star-fill" style={{ color: 'gold' }} key={++counter} />
          )
        }
        {
          unfilledStars.map(() =>
            counter++ &&
            <i className="bi bi-star" key={++counter} />
          )
        }
        {" & more"}
      </ToggleButton>
      <br />
      <br />
    </>
  )
}

export default RatingFilter