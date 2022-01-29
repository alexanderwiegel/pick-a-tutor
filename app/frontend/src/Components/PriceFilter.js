import React from "react"
import { ToggleButton } from "react-bootstrap"

function PriceFilter({ value, priceFilter, handleOnChange }) {
  const range = value == "20+" ? value : value - 5 + "-" + value

  return (
    <>
      <ToggleButton
        style={{
          backgroundColor: priceFilter === range ? "#00b7ffa1" : "transparent",
          color: priceFilter === range ? "#ffffff" : "black"
        }}
        id={value + " Euro"}
        type="checkbox"
        variant="light"
        value={range}
        onChange={(e) => handleOnChange(e.currentTarget.value)}
      >
        {range + "€"}
      </ToggleButton>

      <br />
      <br />
    </>
  )
}

export default PriceFilter