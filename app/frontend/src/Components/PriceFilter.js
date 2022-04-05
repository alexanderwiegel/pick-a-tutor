import React from "react"
import { ToggleButton } from "react-bootstrap"
import { useState } from "react"

function PriceFilter({ value, priceFilter, handleOnChange }) {
  const range = value == "20+" ? value : value - 5 + "-" + value
  const [selected, setSelected] = useState(false)
  const handleRepresentative = (value) => {
    setSelected(prevState => !prevState);
    const abs = !selected
    if (abs === true) handleOnChange(value);
    if (abs === false) handleOnChange(undefined);
  }
  return (
    <>
      <ToggleButton
        style={{
          backgroundColor: priceFilter === range && selected ? "#00b7ffa1" : "transparent",
          color: priceFilter === range && selected ? "#ffffff" : "black"
        }}
        id={value + " Euro"}
        type="checkbox"
        variant="light"
        value={range}
        onChange={(e) => handleRepresentative(e.currentTarget.value)}
      >
        {range + "€"}
      </ToggleButton>

      <br />
      <br />
    </>
  )
}

export default PriceFilter