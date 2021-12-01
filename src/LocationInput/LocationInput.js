import React from "react";
import { useInput } from "../Hooks/useInput";

export default function LocationInput(passLocation) {
  const { value, bind, reset } = useInput("Seattle");

  const submit = (e) => {
    e.preventDefault();
    alert(`Location changed to ${value}`);
    reset();
  }

  return(
    <form onSubmit={submit}>
      <label id="inputLabel">Change location: 
        <input
            type="text" 
            id="locationTextBox" 
            {...bind}
        />
      </label>
      <input type="submit" value="Submit" onClick={() => passLocation(value)} />
    </form>
  );
}
  
